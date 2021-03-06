import Vue from 'vue'
import Router from 'vue-router'

import Film from './film'
import Read from './read'
import Music from './music'

const Index = r => require.ensure([], () => r(require('@/views/Layout/index')), 'Index')
const Login = r => require.ensure([], () => r(require('@/views/basics/login')), 'Index')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/Film/InTheaters',
      component: Index,
      children: [
        Film,
        Read,
        Music
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
