import http from '@services//http';
export default {
    line(data) {
        return http.post('/usercount/base/query/echarts', data || {});
    }
};
//# sourceMappingURL=lossOfBackflow.js.map