import * as tslib_1 from "tslib";
import * as React from 'react';
import { DatePicker } from 'antd';
// import moment from 'moment'
import 'moment/locale/zh-cn';
import { thirtyDays } from '@utils/date';
import { inject } from 'mobx-react';
// import {toJS} from 'mobx'
import * as styles from './index.scss';
const dateFormat = 'YYYY.MM.DD';
const { RangePicker } = DatePicker;
let PageHeader = class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: thirtyDays().t2,
            endTime: thirtyDays().t1
        };
    }
    render() {
        return (React.createElement("div", { className: styles.pageHeader },
            React.createElement(RangePicker, { renderExtraFooter: () => 'extra footer', 
                // value={[moment(this.state.startTime), moment(this.state.endTime)]}
                format: dateFormat, onChange: (date, dateString) => this.props.loadTime(date, dateString) })));
    }
};
PageHeader = tslib_1.__decorate([
    inject((store) => {
        const { loadTime } = store.pageHeaderStore;
        return { loadTime };
    })
], PageHeader);
export default PageHeader;
//# sourceMappingURL=index.js.map