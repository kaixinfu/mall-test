import React, { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
import Nav from '@/components/Nav';
import '@/static/iconfont/iconfont.css';
import styles from './index.less';
interface BasicLayoutProps extends ConnectProps {
  user: UserModelState;
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { dispatch, user, location } = props;
  useEffect(() => {
    // 获取用户登录信息
    if (dispatch) {
      dispatch({ type: 'user/fetchUser' });
    }
  }, []);
  const { pathname } = location;
  return (
    <div className={styles.main}>
      <div className={styles.layout}>{props.children}</div>
      {pathname !== '/login' ? <Nav pathname={pathname} /> : null}
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);
