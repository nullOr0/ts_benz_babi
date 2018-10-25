import * as tslib_1 from "tslib";
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';
let Table = class Table extends React.Component {
    constructor() {
        super(...arguments);
        this.loading = false;
        this.toggleLoading = () => {
            this.loading = !this.loading;
        };
    }
    componentDidMount() {
        this.props.getTable();
    }
    render() {
        return (React.createElement("div", null, "\u7528\u6237\u8D8B\u52BFtable"));
    }
};
tslib_1.__decorate([
    observable
], Table.prototype, "loading", void 0);
tslib_1.__decorate([
    action
], Table.prototype, "toggleLoading", void 0);
Table = tslib_1.__decorate([
    inject((store) => {
        const { getTable, userTrendsTable } = store.userTrendsStore;
        return { getTable, userTrendsTable };
    }),
    observer
], Table);
export default Table;
//# sourceMappingURL=index.js.map