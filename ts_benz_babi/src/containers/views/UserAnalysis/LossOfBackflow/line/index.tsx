import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { toJS, observable, action } from 'mobx'
import { thirtyDays } from '@utils/date'
import {dataHandle} from '@utils/data'
import {multipleLines} from '@utils/echart'
import * as styles from '../index.scss'
interface IStoreProps {
    getLine?: (params) => Promise<any>
}

interface IProps extends IStoreProps {
    lineData?: ILossOfBackflowStore.ILossOfBackflowLine
    timeParams?: IPageHeaderStore.ITimeParams
}

@inject(
    (store: IStore): IStoreProps => {
        // @ts-ignore
        const { getLine, lineData } = store.lossOfBackflowStore
        // @ts-ignore
        const { timeParams } = store.pageHeaderStore
        // @ts-ignore
        return { getLine, lineData, timeParams }
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
        this.props.getLine({
            startTime: thirtyDays().t2,
            endTime: thirtyDays().t1,
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
            this.props.getLine({
                startTime: timeParams.startTime,
                endTime: timeParams.endTime,
            })
        }
    }
    render() {
        const  { lineData }  = this.props
        console.log('----line----')
        // console.log(line)
        // console.log(toJS(lineData).entitys)
        const value = dataHandle('line', toJS(lineData), ['#118AAE', '#B99011'], ['流失用户', '回流用户'])
        console.log(value)
        multipleLines('lossAndBackflow', value.xData, value.yData, ['流失用户', '回流用户'])
        return (
            <div className={styles.lossAndBackflow} id="lossAndBackflow"/>
        )
    }
}

export default Line
