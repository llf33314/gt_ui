import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/alert',
      name: 'alert',
      component: r => require.ensure([], () => r(require('../docs/alert.md')))
    }
  ]
})
