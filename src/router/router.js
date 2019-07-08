import Vue from 'vue'
import Router from 'vue-router'
import config from './config';

Vue.use(Router);
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [...config, {
        name: '404',
        path: '*',
        component: () => import('../views/error.vue')
    }]
});
router.beforeEach((to, _from, next) => {
    next();
});

router.afterEach(route => {
    // // 从路由的元信息中获取 title 属性
    // if(route.meta.title) {
    //     document.title = route.meta.title;
    //     // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
    //     if(navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    //         const hackIframe = document.createElement('iframe');
    //         hackIframe.style.display = 'none';
    //         hackIframe.src = '/path/fixIosTitle.html?r=' + Math.random();
    //         document.body.appendChild(hackIframe);
    //         setTimeout(() => {
    //             document.body.removeChild(hackIframe)
    //         }, 300)
    //     }
    // }
});
export default router;
