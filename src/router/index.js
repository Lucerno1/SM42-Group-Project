import Vue from 'vue'
import VueRouter from 'vue-router'
import SwipeTask from '@/views/SwipeTask'
import Settings from '@/views/Settings'
import ChatOverview from '@/views/ChatOverview'
import Login from '@/views/Login'
import Register from '@/views/Register'
import TaskOverview from '@/views/TaskOverview'
import AppWrapper from '@/views/AppWrapper'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/task'
  },
  {
    path: '/',
    component: AppWrapper,
    children: [
      {
        path: '/task',
        name: 'Task',
        component: SwipeTask
      },
      {
        path: '/tasks',
        name: 'Tasks',
        component: TaskOverview
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
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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
