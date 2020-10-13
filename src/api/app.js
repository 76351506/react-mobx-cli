import request from '@/utils/request';

export function _getData() {
  return request.get('/api/api')
}