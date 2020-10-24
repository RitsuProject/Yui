import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/Home'
import HowToPlay from '~/pages/HowToPlay'
import Dashboard from '~/pages/Dashboard'
import Login from '~/pages/Login'
import Logout from '~/pages/Logout'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/howtoplay',
        component: HowToPlay,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/logout',
        component: Logout,
      },
    ],
  })
}
