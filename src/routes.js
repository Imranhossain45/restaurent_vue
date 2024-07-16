import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/AddRestaurent.vue'
import Update from './components/UpdateRestaurent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name:'HomePage',
    component: HomePage,
    path:'/'
  },
  {
    name:'SignUp',
    component: SignUp,
    path:'/sign-up'
  },
  {
    name:'Login',
    component: Login,
    path:'/login'
  },
  {
    name:'Add',
    component: Add,
    path:'/add'
  },
  {
    name:'Update',
    component: Update,
    path:'/update/:id'
  },
]
const router = createRouter({
  history:createWebHistory(),
  routes
});
export default router