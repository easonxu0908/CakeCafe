// 官方必須元件
import Vue from 'vue';
import VueRouter from 'vue-router';
// 自訂
import Index from '@/components/Index';
import Home from '@/components/Home';
import Cake from '@/components/Cake';
import Contact from '@/components/Contact';

Vue.use(VueRouter);

export default new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '*',
            redirect: '/',
        },
        {
            name: 'Index',
            path: '/',
            component: Index,
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: Home,
                },
                {
                    path: '/cake',
                    name: 'Cake',
                    component: Cake,
                },
                {
                    path: '/contact',
                    name: 'Contact',
                    component: Contact,
                },
            ]
        }
    ]

})