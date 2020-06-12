import Vue from 'vue'
import VueRouter from 'vue-router'
import SwipeTask from '@/views/SwipeTask'
import Settings from '@/views/Settings'
import ChatOverview from '@/views/ChatOverview'
import Login from '@/views/Login'
import Register from '@/views/Register'
import TaskOverview from '@/views/TaskOverview'
import AppWrapper from '@/views/AppWrapper'
import RequestCardCreation from '@/views/RequestCardCreation'
import QuestionCardCreation from '@/views/QuestionCardCreation'
import AccountSettings from '@/views/AccountSettings'
import Introduction from '@/views/Introduction'

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
      },
      {
        path: '/RequestCardCreation',
        name: 'RequestCardCreation',
        component: RequestCardCreation
      },
      {
        path: '/QuestionCardCreation',
        name: 'QuestionCardCreation',
        component: QuestionCardCreation
      },
      {
        path: '/account-settings',
        name: 'AccountSettings',
        component: AccountSettings
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
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
