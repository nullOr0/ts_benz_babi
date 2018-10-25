import * as React from 'react';
import * as styles from './style.scss';
import ChartAreaStack from '@shared/ChartAreaStack';
function Dashboard() {
    return (React.createElement("div", { className: styles.dashboard },
        React.createElement(ChartAreaStack, { style: { height: 600, margin: '20px 0' } })));
}
export default Dashboard;
//# sourceMappingURL=index.js.map