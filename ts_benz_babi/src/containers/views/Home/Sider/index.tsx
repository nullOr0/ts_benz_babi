import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd'

import * as styles from './index.scss'

import SiderMenu from './Menu'

import './index.less'
interface IStoreProps {
    sideBarCollapsed?: boolean
    toggleSideBarCollapsed?: (sideBarCollapsed) => void
    sideBarTheme?: IGlobalStore.SideBarTheme
    changeSiderTheme?: (theme: IGlobalStore.SideBarTheme) => void
    routerStore?: RouterStore
}

@inject(
    (store: IStore): IStoreProps => {
        const { routerStore, globalStore } = store
        const { sideBarCollapsed, sideBarTheme, changeSiderTheme, toggleSideBarCollapsed} = globalStore
        return {
            routerStore,
            sideBarCollapsed,
            sideBarTheme,
            changeSiderTheme,
            toggleSideBarCollapsed,
        }
    }
)
@observer
class Sider extends React.Component<IStoreProps> {
    handleThemeChange = (e: boolean) => {
        this.props.changeSiderTheme(e ? 'dark' : 'light')
    }
    handleSideBar = (sideBarCollapsed) => {
        this.props.toggleSideBarCollapsed(sideBarCollapsed ? 'menu-unfold' : 'menu-fold')
    }
    render() {
        const { sideBarCollapsed, sideBarTheme } = this.props
        return (
            <Layout.Sider
                className={styles.sider}
                trigger={null}
                theme={sideBarTheme}
                collapsible
                collapsed={sideBarCollapsed}
            >
                {/*<div className={styles.navTop}>*/}
                    {/*<div className={styles.nav}>网站导航</div>*/}
                    {/*<Icon*/}
                        {/*className={styles.trigger}*/}
                        {/*type={sideBarCollapsed ? 'menu-unfold' : 'menu-fold'}*/}
                        {/*onClick={this.handleSideBar}*/}
                    {/*/>*/}
                {/*</div>*/}
                <SiderMenu />
            </Layout.Sider>
        )
    }
}

export default Sider
