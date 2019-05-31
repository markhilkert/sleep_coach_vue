import Vue from 'vue'
import Router from 'vue-router'
import Sleep from './views/Sleep.vue'
import Signup from "./views/Signup.vue";
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import SleepInformation from './views/SleepInformation.vue';
import Statistics from './views/Statistics.vue';
import Home from './views/Home.vue';
import TwelveHabits from './views/TwelveHabits.vue';
import About from './views/About.vue';
import ContactUs from './views/ContactUs.vue';
import FAQ from './views/FAQ.vue';
import Privacy from './views/Privacy.vue';
import SleepsEdit from './views/SleepsEdit.vue';
import SleepsShow from './views/SleepsShow.vue';



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/sleep', name: 'sleep', component: Sleep },
    { path: '/sleeps/:id/edit', name: 'sleeps-edit', component: SleepsEdit },
    { path: '/sleeps/:id/', name: 'sleeps-show', component: SleepsShow },
    { path: "/statistics", name: "statistics", component: Statistics },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/sleeps/:id/sleep-information", name: "sleep-information", component: SleepInformation },
    { path: "/about", name: "about", component: About },
    { path: "/contact", name: "contact-us", component: ContactUs },
    { path: "/faq", name: "faq", component: FAQ },
    { path: "/privacy", name: "privacy", component: Privacy },
    { path: "/twelve-sleep-habits", name: "sleep-habits", component: TwelveHabits }
  ]
})
