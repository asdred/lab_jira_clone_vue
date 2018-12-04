import Vue from 'vue'
import Router from 'vue-router'

import Projects from '@/components/Projects'
import Settings from '@/components/Settings'
import Tasks from '@/components/Tasks'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/:projectId',
      name: 'Tasks',
      component: Tasks
    },
  ]
})
