import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/index.vue'
import News from '../views/News/index.vue'
import Products from '../views/Products/index.vue'
import Mine from '../views/Mine/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      index: 1
    },
    component: Home,
  },
  {
    path: '/news',
    name: 'News',
    meta: {
      index: 1
    },
    component: News,
  },
  {
    path: '/products',
    name: 'Products',
    meta: {
      index: 1
    },
    component: Products,
  },
  {
    path: '/mine',
    name: 'Mine',
    meta: {
      index: 1
    },
    component: Mine,
  },
  {
    path: '/show',
    name: 'Show',
    meta: {
      index: 2,
      isback: true,
    },
    component: () =>
      import(/* webpackChunkName: "show" */ "../views/Show/index.vue")
  },
  {
    path: '/404',
    name: '404',
    meta: {
      index: 2,
      isback: true,
    },
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/404.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
