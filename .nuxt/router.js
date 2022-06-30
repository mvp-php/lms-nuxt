import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c0b0110 = () => interopDefault(import('../pages/forgot-password/index.vue' /* webpackChunkName: "pages/forgot-password/index" */))
const _778ae5bc = () => interopDefault(import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */))
const _5dc3f08b = () => interopDefault(import('../pages/oldindex.vue' /* webpackChunkName: "pages/oldindex" */))
const _4920999c = () => interopDefault(import('../pages/reset-password/index.vue' /* webpackChunkName: "pages/reset-password/index" */))
const _24914240 = () => interopDefault(import('../pages/forgot-password/link-successfully.vue' /* webpackChunkName: "pages/forgot-password/link-successfully" */))
const _7d07e262 = () => interopDefault(import('../pages/reset-password/reset-success.vue' /* webpackChunkName: "pages/reset-password/reset-success" */))

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
    component: _3c0b0110,
    name: "forgot-password"
  }, {
    path: "/Login",
    component: _778ae5bc,
    name: "Login"
  }, {
    path: "/oldindex",
    component: _5dc3f08b,
    name: "oldindex"
  }, {
    path: "/reset-password",
    component: _4920999c,
    name: "reset-password"
  }, {
    path: "/forgot-password/link-successfully",
    component: _24914240,
    name: "forgot-password-link-successfully"
  }, {
    path: "/reset-password/reset-success",
    component: _7d07e262,
    name: "reset-password-reset-success"
  },{
    path: "/assets/js/jquery-3.6.0.slim.min",
    component: _c4f2efc4,
    name: "assets-js-jquery-3.6.0.slim.min"
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
