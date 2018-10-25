import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { observable, action } from 'mobx'
interface IStoreProps {
    userTrendsTable?: IUserTrendsStore.IUserTrendsTable[]
    getTable?: () => Promise<any>
}

interface IProps extends IStoreProps {
    userTrendsTable?: IUserTrendsStore.IUserTrendsTable[]
}

@inject(
    (store: IStore): IStoreProps => {
        const { getTable, userTrendsTable } = store.userTrendsStore
        return { getTable, userTrendsTable }
    }
)
@observer
class Table extends React.Component<IProps> {
    @observable
    private loading: boolean = false

    @action
    toggleLoading = () => {
        this.loading = !this.loading
    }
    componentDidMount() {
        this.props.getTable()
    }
    render() {
        return (
            <div>
                用户趋势table
            </div>
        )
    }
}

export default Table
