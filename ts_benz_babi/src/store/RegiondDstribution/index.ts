import {observable, action, runInAction} from 'mobx'
import {StoreExt} from '@utils/reactExt'
export class RegiondDstributionStore extends StoreExt{
    /**
     * 地域分析数据
     * @type {IRegiondDstributionStore.IMapData[]}  地图数据  1使用用户数
    * */
    @observable
    userMapData:IRegiondDstributionStore.IMapData[] =[]
    @action
    getUserMapData = async (params) => {
        try{
            const res =await this.api.regiondDstribution.userMapData(params)
            runInAction('USER_MAP_DATA', ()=>{
                this.userMapData= res
            })
        } catch (e) {

        }
    }
}
export default new RegiondDstributionStore()