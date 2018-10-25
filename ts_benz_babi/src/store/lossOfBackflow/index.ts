import {observable, action, runInAction} from 'mobx'
import {StoreExt} from '@utils/reactExt'
export  class LossOfBackflowStore  extends StoreExt {
    @observable
    lineData: ILossOfBackflowStore.ILossOfBackflowLine[] = []
    @action
    getLine = async (params) => {
        try {
            const res = await this.api.lossOfBackflow.line(params)
            runInAction('LINE_DATA', () => {
                this.lineData = res
            })
        } catch (e) {}
    }
}
export default new LossOfBackflowStore()
