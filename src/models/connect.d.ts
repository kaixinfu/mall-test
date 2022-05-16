// model state 类型
import { UserModelState } from './user';
import { Location, Dispatch } from 'umi';

export interface ConnectProps {
  dispatch: Dispatch;
  location: Location & { state: { from: string } };
}

export interface ConnectState {
  user: UserModelState;
}

export { UserModelState };
