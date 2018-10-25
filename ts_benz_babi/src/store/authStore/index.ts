import { observable, action, runInAction } from 'mobx'

import { StoreExt } from '@utils/reactExt'
import { routerStore } from './../'
import {setCookie, clearCookie, getCookie} from '@utils/index'
import { COOKIE_KEYS, LOCALSTORAGE_KEYS } from '@constants/index'

export class AuthStore extends StoreExt {
    /**
     * 用户信息
     *
     * @type {IAuthStore.UserInfo}
     * @memberof AuthStore
     */
    @observable
    userInfo: IAuthStore.UserInfo = null

    @action
    login = async (params: IAuthStore.LoginParams): Promise<any> => {
        try {
            const res = await this.api.auth.login(params)
            console.log('----接口返回的数据----')
            console.log(res)
            runInAction('SET_USERINFO', () => {
                this.userInfo = res
            })
            console.log('----用户数据----')
            setCookie(COOKIE_KEYS.TOKEN, res.token)
            console.log(getCookie(COOKIE_KEYS.TOKEN))
            localStorage.setItem(LOCALSTORAGE_KEYS.USERINFO, JSON.stringify(res))
            routerStore.replace('/')
        } catch (err) {
            console.error(err)
        }
    }

    @action
    logout = () => {
        clearCookie(COOKIE_KEYS.TOKEN)
        localStorage.removeItem(LOCALSTORAGE_KEYS.USERINFO)
        routerStore.replace('/login')
    }

    /**
     * 初始化用户信息
     *
     * @memberof AuthStore
     */
    @action
    initUserInfo = (): IAuthStore.UserInfo => {
        const lcoalUserInfo = localStorage.getItem(LOCALSTORAGE_KEYS.USERINFO)
        if (!lcoalUserInfo) {
            throw new Error('no local userinfo!!')
        }
        const userInfo: IAuthStore.UserInfo = JSON.parse(lcoalUserInfo)
        this.userInfo = userInfo
        return userInfo
    }
}

export default new AuthStore()
