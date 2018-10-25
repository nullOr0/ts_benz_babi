import http from '@services/http';
export default {
    tabLine(data) {
        return http.post('/daimler/getHistoryUserCount', data || {});
    },
    table(data) {
        return http.post('/daimler/getHistory', data || {});
    }
};
//# sourceMappingURL=userTrends.js.map