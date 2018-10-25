import {observable, action, runInAction} from 'mobx'
import { StoreExt } from '@utils/reactExt'

export  class UserTrendsStore extends StoreExt {
    /**
     * params endTime
     *
     * @type {string}
     * @memberof UserTrendsStore
     */
    @observable
    endTime: string = '2018-09-24 23:59:59'
    /**
     *  params startTime
     *
     * @type {string}
     * @memberof UserTrendsStore
     */
    @observable
    startTime: string = '2018-08-26 00:00:00'
    /**
     *  params pageID
     *
     * @type {string}
     * @memberof UserTrendsStore
     */
    @observable
    pageID: string = 'true'
    /**
     *  params pageNo
     *
     * @type {number}
     * @memberof UserTrendsStore
     */
    @observable
    pageNo: number = 1
    /**
     *  params pageNo
     *
     * @type {number}
     * @memberof UserTrendsStore
     */
    @observable
    pageSize: number = 10
    /**
     * 用户趋势数据
     *
     * @type {UserTrendsStore.IUserTrendsLine[]}
     * @type {UserTrendsStore.IUserTrendsTable[]}
     * @memberof UserTrendsStore
     */
    @observable
    userTrendsLine: IUserTrendsStore.IUserTrendsLine[] = []
    @observable
    userTrendsTable: IUserTrendsStore.IUserTrendsTable[] = []
    @action
    getTabLine = async (params) => {
        try {
            const res = await this.api.userTrends.tabLine(params)
            runInAction('LINE_DATA', () => {
                this.userTrendsLine = res
            })
        } catch (err) {
        }
    }
    @action
    getTable = async () => {
        try {
            const res = await this.api.userTrends.table({
                startTime: this.startTime,
                endTime: this.endTime,
                pageNo: this.pageNo,
                pageSize: this.pageSize,
            })
            runInAction('TABLE_DATA', () => {
                this.userTrendsTable = res
            })
        } catch (err) {}
    }
}
export default new UserTrendsStore()
