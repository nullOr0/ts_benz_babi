import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { toJS, observable, action } from 'mobx'
import { thirtyDays } from '@utils/date'
import * as styles from '../index.scss'
interface IStoreProps {
    getTabLine?: (params) => Promise<any>
}

interface IProps extends IStoreProps {
    userTrendsLine?: IUserTrendsStore.IUserTrendsLine
    timeParams?: IPageHeaderStore.ITimeParams
}

@inject(
    (store: IStore): IStoreProps => {
        const { getTabLine, userTrendsLine } = store.userTrendsStore
        const { timeParams } = store.pageHeaderStore
        // @ts-ignore
        return { getTabLine, userTrendsLine, timeParams }
    }
)
@observer
class Line extends React.Component<IProps> {
    @observable
    private loading: boolean = false
    constructor(props) {
        super(props)
        this.state = {
            startTime: '',
            endTime: '',
            getLineValue: []
        }
    }
    @action
    toggleLoading = () => {
        this.loading = !this.loading
    }
    componentDidMount() {
        this.props.getTabLine({
            startTime: thirtyDays().t2,
            endTime: thirtyDays().t1,
            pageID: true
        })
    }
    @action
   /*
   * 通过改变时间参数endTime,startTime
   * 更新折线图和table的数据
   * */
    componentDidUpdate(prevProps) {
        const {timeParams} = this.props
        if (this.props.timeParams !== prevProps.timeParams) {
            this.props.getTabLine({
                startTime: timeParams.startTime,
                endTime: timeParams.endTime,
                pageID: true
            })
        }
    }
    render() {
        const { userTrendsLine } = this.props
        console.log('----line----')
        console.log(toJS(userTrendsLine))
        return (
            <div className={styles.userTrendsLine}>
                用户趋势Line
            </div>
        )
    }
}

export default Line
