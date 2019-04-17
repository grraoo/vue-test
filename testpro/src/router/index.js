import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/list'
import category from '@/components/category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: HelloWorld
    },
    {
      path: '/category/:id',
      name: 'category',
      component: category
    }
  ]
})
