import request from '@/utils/request';

export interface LoginParams {
  name: string;
  password: string;
}

export async function fnLogin(params: LoginParams) {
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}

export async function fnLogout(): Promise<any> {
  return request('/api/logout');
}
