import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import New from './components/New'
import Hello from './components/HelloWorld'
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.config.productionTip = false
const router = new VueRouter({
    routes: [
        {path: '/', component: App},
        {path: '/new', component: New},
        {path: '/hello', component: Hello},
    ],
    mode: 'history'
});

export const store = new Vuex.Store({
    state: {
        appVar1: 'haaaythis is app vari1 ',
        appVar2 : '$storedan geldim',

    },
    getters: {
        firstGetter(state) {
            return state.appVar1
        },
        secondGetter(state) {
            return state.appVar2
        }
    }
})


new Vue({
    render: h => h(App),
    router: router,
    store:store
}).$mount('#app')
