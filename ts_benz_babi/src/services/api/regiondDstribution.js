import http from '@services/http';
export default {
    userMapData(data) {
        return http.post('/servicecount/area/echarts', data || {});
    }
};
imp;
//# sourceMappingURL=RegiondDstribution.js.map