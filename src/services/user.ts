import request from '@/utils/request';

// 获取用户登录信息
export async function fnFetchUser(): Promise<any> {
  return request('/api/currentUser');
}
// 获取用户详细信息
export async function fnfetchUserDetail(): Promise<any> {
  return request('/api/getUserDetail');
}
