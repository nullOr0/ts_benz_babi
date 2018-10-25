import {action, observable, runInAction} from 'mobx'
import { StoreExt } from '@utils/reactExt'

export class PageHeaderStore extends StoreExt {
    /**
     * 时间参数
     *
     * @type {IPageHeaderStore.ITimeParams[]}
     * @memberof ITimeStore
     */
    @observable
    timeParams: IPageHeaderStore.ITimeParams[] = []
    @action
    loadTime = async (date, dateString) => {
        const params = {
            startTime: dateString[0].replace(/\./g, '-') + ' 00:00:00',
            endTime: dateString[1].replace(/\./g, '-') + ' 00:00:00',
        }
        try {
            runInAction('TIME_PARAMS', () => {
                // @ts-ignore
                this.timeParams = params
            })
        } catch (err) {}
    }
}

export default new PageHeaderStore()
