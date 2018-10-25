import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Layout, Select, Menu, Dropdown, Icon } from 'antd'

import * as styles from './index.scss'
import './index.less'

// import logo from '../../../../../src/assets/images/logo.png'

const Option = Select.Option

interface IStoreProps {
    sideBarCollapsed?: boolean
    toggleSideBarCollapsed?: () => void
    logout?: () => void
    personInform?: () => void
}

function Header({ sideBarCollapsed, toggleSideBarCollapsed, logout, personInform }: IStoreProps) {
    const menu = (
        <Menu>
            <Menu.Item onClick={personInform}>个人信息</Menu.Item>
            <Menu.Item>修改密码</Menu.Item>
            <Menu.Item onClick={logout}>退出登录</Menu.Item>
        </Menu>
    )
    return (
        <Layout.Header className={styles.header}>
            <div className={styles.logoStyle}>
                {/*<img src={logo}/>*/}
                <span>Daimler</span>
            </div>
            <div className={styles.languageSwitch}>
                <Select placeholder="中文" className={styles.select}>
                    <Option value="Chinese">中文</Option>
                    <Option value="English">English</Option>
                </Select>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        admin <Icon type="down" />
                    </a>
                </Dropdown>,
            </div>
        </Layout.Header>
    )
}

export default inject(
    (store: IStore): IStoreProps => {
        const { globalStore, authStore } = store
        const { sideBarCollapsed, toggleSideBarCollapsed } = globalStore
        const { logout } = authStore
        return { sideBarCollapsed, toggleSideBarCollapsed, logout }
    }
)(observer(Header))
