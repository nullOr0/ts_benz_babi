import * as React from 'react';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import * as styles from './index.scss';
import PageLoading from '@components/PageLoading';
import Error from '@components/Error';
import PrivateRoute from '@shared/PrivateRoute';
const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '@views/Home'),
    loading: PageLoading
});
const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '@views/Login'),
    loading: PageLoading
});
const AppWrapper = props => React.createElement("div", { className: styles.appWrapper }, props.children);
class AppRouter extends React.Component {
    render() {
        return (React.createElement(AppWrapper, null,
            React.createElement(Router, null,
                React.createElement(Switch, null,
                    React.createElement(Route, { exact: true, path: "/login", component: Login }),
                    React.createElement(PrivateRoute, { path: "/", component: Home }),
                    React.createElement(Route, { component: Error })))));
    }
}
export default hot(module)(AppRouter);
//# sourceMappingURL=index.js.map