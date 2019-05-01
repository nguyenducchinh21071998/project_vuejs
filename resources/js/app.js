import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import Dashboard from './components/Dashboard.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import List from './components/List.vue';
import CreateUser from './components/CreateUser.vue';
import EditUser from './components/EditUser.vue';
import Delete from './components/Delete.vue';
import ViewUser from './components/ViewUser.vue';
window.Axios = require('axios').default;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://vuejs.edu.vn:8080/api';
const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },{
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },{
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },{
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },{
        path: '/list',
        name: 'list',
        component: List,
        
    },{
        path: 'CreateUser',
        name: 'create-user',
        component: CreateUser,
        
    },{
        path: 'Delete',
        name: '/user-delete',
        component: Delete,
        
    },{
        path: 'ViewUser',
        name: '/view/:id',
        component: ViewUser,
        
    },
    {path: '/admin/list-user/edit/:id', component: EditUser, name: 'EditUser'},

    ]
});

Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});
App.router = Vue.router
new Vue(App).$mount('#app');