import  request from 'common/js/request'

export function getList() {
  return request({
    url:'/tables'
  })
}
