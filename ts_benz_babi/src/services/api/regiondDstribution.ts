import http from '@services/http'
export default {
    userMapData(data): Promise<any> {
        return http.post('/servicecount/area/echarts', data || {})
    }
}
