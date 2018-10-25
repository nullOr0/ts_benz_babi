import http from '@services//http'
export default {
    line(data): Promise<any> {
        return http.post('/usercount/base/query/echarts', data || {})
    }
}
