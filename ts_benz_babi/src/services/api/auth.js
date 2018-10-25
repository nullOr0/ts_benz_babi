import http from '@services/http';
export default {
    // 登录
    login(data) {
        return http.post('/system/user/login', data || {});
    }
};
//# sourceMappingURL=auth.js.map