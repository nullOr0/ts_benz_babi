import './index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';
import createHashHistory from 'history/createHashHistory';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router-dom';
import AppRouter from '@shared/App';
import * as store from './store';
const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, store.routerStore);
configure({ enforceActions: 'observed' });
const render = Component => {
    ReactDOM.render(React.createElement(Provider, Object.assign({}, store),
        React.createElement(Router, { history: history },
            React.createElement(Component, null))), document.getElementById('app'));
};
render(AppRouter);
//# sourceMappingURL=index.js.map