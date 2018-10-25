import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { FormComponentProps } from 'antd/lib/form'

import { ComponentExt } from '@utils/reactExt'

interface IStoreProps {
    getTabLine?: () => Promise<any>
}

interface IProps extends IStoreProps {
    // userTrends?: IUserTrendsStore.IUserTrends
}

@inject(
    (store: IStore): IStoreProps => {
        const { getTabLine } = store.userTrendsStore
        return { getTabLine }
    }
)
@observer
class UserTrendsModal extends ComponentExt<IProps & FormComponentProps> {
    @observable
    private loading: boolean = false

    @action
    toggleLoading = () => {
        this.loading = !this.loading
    }

    render() {
        return (
            <div>
                用户趋势modal
            </div>
        )
    }
}

export default UserTrendsModal
