import { Effect, Reducer } from 'umi';
import { fnFetchUser, fnfetchUserDetail } from '@/services/user';
import { fnLogin, fnLogout } from '@/services/login';
import { Toast } from 'antd-mobile';

interface User {
  name?: string;
  icon?: string;
  userid?: string;
}

interface DetailUser {
  name: string;
  icon: string;
  userid: string;
  email: string;
  phone: string;
  address: string;
  signature?: string;
  title?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  country: string;
}

export interface UserModelState {
  curUser: User;
  detail:
    | DetailUser
    | {
        name: string;
        icon: string;
      };
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchUser: Effect;
    queryDetail: Effect;
    login: Effect;
    logout: Effect;
  };
  reducers: {
    saveUser: Reducer<UserModelState>;
    clearUser: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user', // 唯一的key值
  state: {
    curUser: {},
    detail: {
      name: '',
      icon: '',
    },
  },
  effects: {
    // 获取当前用户信息
    *fetchUser(_, { call, put }) {
      const res = yield call(fnFetchUser);
      yield put({ type: 'saveUser', payload: { curUser: { ...res } } });
    },
    // 用户登录
    *login({ payload }, { call, put }) {
      const res = yield call(fnLogin, payload);
      if (res.status === 1) {
        yield put({ type: 'saveUser', payload: { curUser: { ...res } } });
      } else {
        Toast.fail(res.msg || '系统开小差了');
      }
    },
    *queryDetail(_, { call, put }) {
      const res = yield call(fnfetchUserDetail);
      if (res.status === 1) {
        yield put({ type: 'saveUser', payload: { detail: { ...res } } });
      } else {
        Toast.fail(res.msg || '系统开小差了');
      }
    },
    *logout(_, { call, put }) {
      yield call(fnLogout);
      yield put({
        type: 'clearUser',
        payload: { curUser: {}, detail: { name: '', icon: '' } },
      });
    },
  },
  reducers: {
    saveUser(state, action) {
      return { ...state, ...action.payload };
    },
    clearUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
export default UserModel;
