import * as React from 'react'
import {inject} from 'mobx-react'
import {toJS} from 'mobx'
import {dataHandle} from '@utils/data'
import TabMapTable from '@components/TabMapTable'
// import {thirtyDays} from '@utils/date'
import * as styles from '../index.scss'
interface  IStoreProps {
    getUserMapData?: (params) => Promise<any>
}
interface IProps extends IStoreProps{
    userMapData?: IRegiondDstributionStore.IMapData
    timeParams?: IPageHeaderStore.ITimeParams
}
@inject(
    (store: IStore): IStoreProps => {
        // @ts-ignore
        const {getUserMapData, userMapData} = store.regiondDstributionStore
        // @ts-ignore
        const { timeParams } = store.pageHeaderStore
        // @ts-ignore
        return {getUserMapData, userMapData, timeParams}
    }
)
class Map extends  React.Component<IProps>{
    componentDidMount(){
        this.props.getUserMapData({
            // startTime: thirtyDays().t2,
            // endTime: thirtyDays().t1,
            queryTime: '2018-10-15 00:00:00',
            areaType: 1,
            timeType: 'day'
        })
    }
    render (){
        const {userMapData} =this.props
        console.log('地图数据')
        console.log(toJS(userMapData))
        const value = dataHandle('map',toJS(userMapData),'','')
        console.log(value)
        return(
            <div className={styles.mapTable}>
                <TabMapTable/>
            </div>
        )
    }
}
export default Map