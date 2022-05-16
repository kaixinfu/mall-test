import React, { ReactElement } from 'react';
import { connect, Dispatch, Redirect } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
import '@/static/iconfont/iconfont.css';
import styles from './index.less';
interface SecurityLayoutProps extends ConnectProps {
  user: UserModelState;
  children: ReactElement;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = ({
  user,
  children,
  location,
}) => {
  const { userid } = user.curUser;
  if (!userid) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { from: location.pathname } }}
      />
    );
  }
  return children;
};

export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);
