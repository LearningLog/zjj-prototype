import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import subContractplanList from '@/components/subContractplan/subContractplanList'
import subContractplanAdd from '@/components/subContractplan/subContractplanAdd'
import subContractplanDetail from '@/components/subContractplan/subContractplanDetail'
import subContractplanApproval from '@/components/subContractplan/subContractplanApproval'
import subContractplanAccount from '@/components/subContractplan/subContractplanAccount'
import subContractplanQueryList from '@/components/subContractplan/subContractplanQueryList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect: '/main',
      component: Home
    },
    {
      path: '/',
      name: '欢迎页面',
      component: Home,
      children: [
        {path: '/main', component: Main, name: 'Main'}
      ]
    },
    {
      path: '/',
      name: '分包策划管理',
      component: Home,
      children: [
        {path: '/subContractplanList', component: subContractplanList, name: 'subContractplanList'},
        {path: '/subContractplanAdd', component: subContractplanAdd, name: 'subContractplanAdd'},
        {path: '/subContractplanDetail/:isApproval', component: subContractplanDetail, name: 'subContractplanDetail'},
        {path: '/subContractplanApproval', component: subContractplanApproval, name: 'subContractplanApproval'},
        {path: '/subContractplanAccount', component: subContractplanAccount, name: 'subContractplanAccount'},
        {path: '/subContractplanDetail', component: subContractplanDetail, name: 'subContractplanDetail'},
        {path: '/subContractplanQueryList', component: subContractplanQueryList, name: 'subContractplanQueryList'}
      ]
    },
    {
      path: '*', // 配置非法页面
      hidden: true,
      redirect: { path: '/main' }
    }
  ]
})
