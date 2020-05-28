import Vue from 'vue'
import VueRouter from 'vue-router'
import SwipeTask from '@/views/SwipeTask'
import Settings from '@/views/Settings'
import ChatOverview from '@/views/ChatOverview'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/task',
    name: 'Task',
    component: SwipeTask
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ChatOverview
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    redirect: '/task'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
