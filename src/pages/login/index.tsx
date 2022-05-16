import React from 'react';
import { connect, Redirect } from 'umi';
import { LoginParams } from '@/services/login';
import { ConnectState, UserModelState, ConnectProps } from '@/models/connect';
import Form from './Form';
import styles from './index.less';

interface LoginProps extends ConnectProps {
  user: UserModelState;
}

const Login: React.FC<LoginProps> = (props) => {
  const { user, location, dispatch } = props;
  const { userid } = user.curUser;
  // 是否已经登录
  if (!!userid) {
    const { from = '/' } = location.state || {};
    console.log('location.state', location);
    return <Redirect to={from} />;
  }
  const handleSubmit = (e: LoginParams) => {
    dispatch({ type: 'user/login', payload: e });
  };
  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(Login);
