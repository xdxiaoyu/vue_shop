import request from '../utils/request'

/**
 *
 *
 * @export 登录接口
 * @param {*} data
 * @returns
 */
export function login (data) {
  return request({
    url: 'login',
    method: 'POST',
    data: data
  })
}

/**
 *
 *
 * @export 获取左侧菜单
 * @param {*} data
 * @returns
 */
export function menus (data) {
  return request({
    url: 'menus',
    method: 'GET',
    pram: data
  })
}
