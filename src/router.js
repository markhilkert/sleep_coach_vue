import Vue from 'vue'
import Router from 'vue-router'
import Sleep from './views/Sleep.vue'
import Signup from "./views/Signup.vue";
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import SleepInformation from './views/SleepInformation.vue';
import Statistics from './views/Statistics.vue';
import Home from './views/Home.vue';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/sleep', name: 'sleep', component: Sleep },
    { path: "/statistics", name: "statistics", component: Statistics },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/sleeps/:id/edit", name: "sleep-information", component: SleepInformation }
  ]
})
