import * as React from 'react';
import Line from './line';
import Table from './table';
import PageHeader from '@components/PageHeader';
import * as styles from './index.scss';
class UserTrends extends React.Component {
    render() {
        return (React.createElement("div", { className: styles.userTrends },
            React.createElement("div", { className: styles.pageHeader },
                React.createElement(PageHeader, null)),
            React.createElement("div", { className: styles.pageLine },
                React.createElement(Line, null)),
            React.createElement("div", { className: styles.pageTable },
                React.createElement(Table, null))));
    }
}
export default UserTrends;
//# sourceMappingURL=index.js.map