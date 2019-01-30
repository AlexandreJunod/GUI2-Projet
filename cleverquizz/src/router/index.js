import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/Questions'
import Result from '@/components/Result'




Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/:id',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/Result/:score/:lenght',
    name: 'Result',
    component: Result
  }
  ]
})
