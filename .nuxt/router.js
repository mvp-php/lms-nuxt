import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ab6c504 = () => interopDefault(import('../pages/forgot-password/index.vue' /* webpackChunkName: "pages/forgot-password/index" */))
const _2c6b2b70 = () => interopDefault(import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */))
const _643f7290 = () => interopDefault(import('../pages/reset-password/index.vue' /* webpackChunkName: "pages/reset-password/index" */))
const _1894d468 = () => interopDefault(import('../pages/forgot-password/link-successfully.vue' /* webpackChunkName: "pages/forgot-password/link-successfully" */))
const _991be542 = () => interopDefault(import('../pages/Login/login.vue' /* webpackChunkName: "pages/Login/login" */))
const _2506987a = () => interopDefault(import('../pages/reset-password/reset-success.vue' /* webpackChunkName: "pages/reset-password/reset-success" */))
const _52f7988e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/forgot-password",
    component: _2ab6c504,
    name: "forgot-password"
  }, {
    path: "/Login",
    component: _2c6b2b70,
    name: "Login"
  }, {
    path: "/reset-password",
    component: _643f7290,
    name: "reset-password"
  }, {
    path: "/forgot-password/link-successfully",
    component: _1894d468,
    name: "forgot-password-link-successfully"
  }, {
    path: "/Login/login",
    component: _991be542,
    name: "Login-login"
  }, {
    path: "/reset-password/reset-success",
    component: _2506987a,
    name: "reset-password-reset-success"
  }, {
    path: "/",
    component: _52f7988e,
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
