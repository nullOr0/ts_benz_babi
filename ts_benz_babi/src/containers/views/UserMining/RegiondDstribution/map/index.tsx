import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {toJS, observable, action} from 'mobx'
import {thirtyDays} from '@utils/date'
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

}
export default Map