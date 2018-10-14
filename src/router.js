import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import One from './components/One';
import Two from './components/Two';

export default new VueRouter({
    routes: [
        {path: '/one', component: One},
        {path: '/two', component: Two}
    ]
})
