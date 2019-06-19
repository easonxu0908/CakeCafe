// 官方必須元件
import Vue from 'vue';
import VueRouter from 'vue-router';
// 自訂
import Index from '@/components/Index';
import Home from '@/components/Home';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
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
            ]
        }
    ]

})