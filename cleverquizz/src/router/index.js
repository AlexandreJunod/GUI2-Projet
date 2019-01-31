import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/Questions'
import Result from '@/components/Result'
import listQuiz from '@/components/listQuiz'





Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  {
    path: '/Questions/:id',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/Result/:score/:length/:perc',
    name: 'Result',
    component: Result
  },
  {
    path: '/',
    name: 'listQuiz',
    component: listQuiz
  }
  ]
})
