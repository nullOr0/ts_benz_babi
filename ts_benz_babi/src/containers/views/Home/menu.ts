import Loadable from 'react-loadable'

import PageLoading from '@components/PageLoading'

const loadComponent = (loader: () => Promise<any>) =>
    Loadable({
        loader,
        loading: PageLoading
    })

export const asynchronousComponents = {
    UserTrends: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/UserAnalysis/UserTrends/index')),
    NewOldUsers: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/UserAnalysis/NewOldUsers/index')),
    ActiveUsers: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/UserAnalysis/ActiveUsers/index')),
    LossOfBackflow: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/UserAnalysis/LossOfBackflow/index')),
    Overview: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/PublicOpinion/Overview/index')),
    Headline: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/PublicOpinion/Headline/index')),
    RegiondDstribution: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/UserMining/RegiondDstribution/index')),
    UserCar: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/UserMining/UserCar/index')),
    AccessService: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/BehaviorAnalysis/AccessService/index')),
    UserManagement: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/SystemManage/userManagement/index')),
    ChartAreaStack: loadComponent(() => import(/* webpackChunkName: "chart-area-stack" */ '@views/Charts/AreaStack')),
    ChartLineSmooth: loadComponent(() =>
        import(/* webpackChunkName: "chart-line-smooth" */ '@views/Charts/LineSmooth')
    ),
    ChartPie: loadComponent(() => import(/* webpackChunkName: "chart-pie" */ '@views/Charts/Pie')),
    Users: loadComponent(() => import(/* webpackChunkName: "users" */ '@views/Users'))
}

// 所有路由的key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface IMenu {
    title: string
    id: number
    pid?: number
    path?: string
    icon?: string
    component?: AsynchronousComponentKeys
    exact?: boolean
}

export interface IMenuInTree extends IMenu {
    children?: IMenuInTree[]
}

export const menu: IMenu[] = [
    {
        id: 1,
        title: '用户分析',
        icon: 'retalData',
    },
    {
        id: 11,
        pid: 1,
        path: '/',
        title: '用户趋势',
        component: 'UserTrends',
        exact: true
    },
    {
        id: 12,
        pid: 1,
        path: '/NewOldUsers',
        title: '新老用户',
        component: 'NewOldUsers',
        exact: true
    },
    {
        id: 13,
        pid: 1,
        path: '/ActiveUsers',
        title: '活跃用户',
        component: 'ActiveUsers',
        exact: true
    },
    {
        id: 14,
        pid: 1,
        path: '/lossOfBackflow',
        title: '流失用户',
        component: 'LossOfBackflow',
        exact: true
    },
    {
        id: 2,
        title: '舆情分析',
        icon: 'bar-chart'
    },
    {
        id: 21,
        pid: 2,
        path: '/Overview',
        title: '概要',
        component: 'Overview',
        exact: true
    },
    {
        id: 22,
        pid: 2,
        path: '/Headline',
        title: '舆情资讯',
        component: 'Headline',
        exact: true
    },
    {
        id: 3,
        title: '用户画像',
        icon: 'user',
    },
    {
        id: 31,
        pid: 3,
        path: '/RegiondDstribution',
        title: '地域分布',
        component: 'RegiondDstribution',
        exact: true
    },
    {
        id: 32,
        pid: 3,
        path: '/UserCar',
        title: '用户车系',
        component: 'UserCar',
        exact: true
    },
    {
        id: 4,
        title: '行为分析',
        icon: 'user',
    },
    {
        id: 41,
        pid: 4,
        path: '/AccessService',
        title: '访问服务',
        component: 'AccessService',
        exact: true
    },
    {
        id: 5,
        title: '系统管理',
        icon: 'user',
    },
    {
        id: 51,
        pid: 5,
        path: '/UserManagement',
        title: '用户管理',
        component: 'UserManagement',
        exact: true
    }
]

export default menu
