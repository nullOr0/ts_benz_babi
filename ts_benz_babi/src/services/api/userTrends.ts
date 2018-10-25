import http from '@services/http'
export default {
    tabLine(data): Promise<any> {
        return http.post('/daimler/getHistoryUserCount', data || {})
    },
    table(data): Promise<any> {
        return http.post('/daimler/getHistory', data || {})
    }
}
