import * as React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as styles from './style.scss';
import option from './option';
function ChartPie({ style }) {
    return (React.createElement("div", { className: styles.chart, style: style },
        React.createElement(ReactEcharts, { option: option, style: { height: '100%', width: '100%' } })));
}
export default ChartPie;
//# sourceMappingURL=index.js.map