import * as React from 'react'
import {DatePicker} from 'antd'
// import moment from 'moment'
import 'moment/locale/zh-cn'
import { thirtyDays} from '@utils/date'
import {inject} from 'mobx-react'
// import {toJS} from 'mobx'
import * as styles from './index.scss'
const dateFormat = 'YYYY.MM.DD'
const { RangePicker } = DatePicker
interface IStoreProps {
    loadTime?: (date, dateString) => Promise<any>
}

interface IProps extends IStoreProps {}

@inject(
    (store: IStore): IStoreProps => {
        const { loadTime } = store.pageHeaderStore
        return { loadTime }
    }
)
class PageHeader extends React.Component<IProps> {
    constructor(props) {
        super(props)
        this.state = {
            startTime: thirtyDays().t2,
            endTime: thirtyDays().t1
        }
    }
    render() {
        return(
            <div className={styles.pageHeader}>
                <RangePicker
                    renderExtraFooter={() => 'extra footer'}
                    // value={[moment(this.state.startTime), moment(this.state.endTime)]}
                    format={dateFormat}
                    onChange={(date, dateString) => this.props.loadTime(date, dateString)}
                />
            </div>
        )
    }
}

export default PageHeader
