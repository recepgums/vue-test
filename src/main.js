import Vue from 'vue'
import Home from './components/Home.vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import New from './components/New'
import Card from './components/Card'
import Hello from './components/HelloWorld'
import Vuex from 'vuex'
import {axios} from 'vue-axios'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
// import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);
Vue.config.productionTip = false
const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/new', component: New},
        {path: '/hello', component: Hello},
        {path: '/Card', component: Card},
    ],
    mode: 'history'
});

export const store = new Vuex.Store({
    state: {
        appVar1: 'haaaythis is app vari1 ',
        appVar2 : '$storedan geldim',
        globalBasket:[],
        jsonPlaceHolder:'',
    },
    getters: {
        firstGetter(state) {
            return state.appVar1
        },
        secondGetter(state) {
            return state.appVar2
        },
        globalBasketGetter(state){
            return state.globalBasket
        },
        jsonPlaceHolderGetter(state){
            return state.jsonPlaceHolder
        }
    },
    mutations:{
        addGlobalBasketMutation(state,newElement){
            state.globalBasket.push(newElement)
        },
        jsonPlaceHolderMutation(state,response){
            state.jsonPlaceHolder= response
        }
    },
    actions:{
        addGlobalBasketAction({commit},newElement){
            commit('addGlobalBasketMutation',newElement)
        },
        jsonPlaceHolderAxios({commit}){
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) =>{
                    console.log("xx"+response)
                    commit('jsonPlaceHolderMutation',response)
                });
        }

    }
})


new Vue({
    render: h => h(App),
    router: router,
    store:store
}).$mount('#app')
