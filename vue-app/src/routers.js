import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'



const routes = [
  {
    path: '/',
    name: 'view',
    component: () => import(/* webpackChunkName: "about" */ './views/View.vue')

  },
  {
    path: '/view/:slug',
    name: 'view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/View.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/addpage',
    name: 'addpage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/Addpage.vue')
  },
  {
    path: '/editpage',
    name: 'Editpage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/Editpage.vue')
  }
]



export default routes
