import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e3c19d20 = () => interopDefault(import('..\\pages\\category\\index.vue' /* webpackChunkName: "pages/category/index" */))
const _571776d1 = () => interopDefault(import('..\\pages\\categorys\\index.vue' /* webpackChunkName: "pages/categorys/index" */))
const _0b936e12 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _c93fadfe = () => interopDefault(import('..\\pages\\forgot-password\\index.vue' /* webpackChunkName: "pages/forgot-password/index" */))
const _50386f68 = () => interopDefault(import('..\\pages\\link-successfully\\index.vue' /* webpackChunkName: "pages/link-successfully/index" */))
const _4acd443d = () => interopDefault(import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages/Login/index" */))
const _71ee6996 = () => interopDefault(import('..\\pages\\reset-password\\index.vue' /* webpackChunkName: "pages/reset-password/index" */))
const _1ff24881 = () => interopDefault(import('..\\pages\\reset-success\\index.vue' /* webpackChunkName: "pages/reset-success/index" */))
const _1474e754 = () => interopDefault(import('..\\pages\\Login\\login.vue' /* webpackChunkName: "pages/Login/login" */))
const _fa2c8ca4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category",
    component: _e3c19d20,
    name: "category"
  }, {
    path: "/categorys",
    component: _571776d1,
    name: "categorys"
  }, {
    path: "/dashboard",
    component: _0b936e12,
    name: "dashboard"
  }, {
    path: "/forgot-password",
    component: _c93fadfe,
    name: "forgot-password"
  }, {
    path: "/link-successfully",
    component: _50386f68,
    name: "link-successfully"
  }, {
    path: "/Login",
    component: _4acd443d,
    name: "Login"
  }, {
    path: "/reset-password",
    component: _71ee6996,
    name: "reset-password"
  }, {
    path: "/reset-success",
    component: _1ff24881,
    name: "reset-success"
  }, {
    path: "/Login/login",
    component: _1474e754,
    name: "Login-login"
  }, {
    path: "/",
    component: _fa2c8ca4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
