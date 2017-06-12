import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import List from '@/components/List'
import Detail from '@/components/Detail'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: List
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/add',
            component: Add
        },
        {
            path: '/detail/:id',
            component: Detail,
            name:"Detail"
        },
    ]
})
