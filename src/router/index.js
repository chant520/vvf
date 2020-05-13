import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页', keepAlive: false, auth: false },
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue'),
    meta: { title: '列表页', keepAlive: true, auth: false },
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录', keepAlive: false, auth: false },
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: '关于', keepAlive: false, auth: true },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from, next) => {
  document.title = to.meta.title
  const userInfo = sessionStorage.getItem('userInfo') || null
  if (!userInfo && to.meta.auth) {
    next('/login')
  } else {
    next()
  }
})

export default router
