import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _beef9e16 = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _1726c1d3 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _2ab6c504 = () => interopDefault(import('../pages/forgot-password/index.vue' /* webpackChunkName: "pages/forgot-password/index" */))
const _8f3f4f4e = () => interopDefault(import('../pages/link-successfully/index.vue' /* webpackChunkName: "pages/link-successfully/index" */))
const _2c6b2b70 = () => interopDefault(import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */))
const _344624f8 = () => interopDefault(import('../pages/reset-success/index.vue' /* webpackChunkName: "pages/reset-success/index" */))
const _7a858037 = () => interopDefault(import('../pages/user-management/role/index.vue' /* webpackChunkName: "pages/user-management/role/index" */))
const _33ec854c = () => interopDefault(import('../pages/user-management/user/index.vue' /* webpackChunkName: "pages/user-management/user/index" */))
const _1c2f5468 = () => interopDefault(import('../pages/user-management/role/create-role.vue' /* webpackChunkName: "pages/user-management/role/create-role" */))
const _cfc7a014 = () => interopDefault(import('../pages/user-management/user/create-user.vue' /* webpackChunkName: "pages/user-management/user/create-user" */))
const _112a3669 = () => interopDefault(import('../pages/user-management/role/edit-role/_id.vue' /* webpackChunkName: "pages/user-management/role/edit-role/_id" */))
const _37789cd3 = () => interopDefault(import('../pages/user-management/user/edit-user/_id.vue' /* webpackChunkName: "pages/user-management/user/edit-user/_id" */))
const _5b28d8f8 = () => interopDefault(import('../pages/reset-password/_id.vue' /* webpackChunkName: "pages/reset-password/_id" */))
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
    path: "/category",
    component: _beef9e16,
    name: "category"
  }, {
    path: "/dashboard",
    component: _1726c1d3,
    name: "dashboard"
  }, {
    path: "/forgot-password",
    component: _2ab6c504,
    name: "forgot-password"
  }, {
    path: "/link-successfully",
    component: _8f3f4f4e,
    name: "link-successfully"
  }, {
    path: "/Login",
    component: _2c6b2b70,
    name: "Login"
  }, {
    path: "/reset-success",
    component: _344624f8,
    name: "reset-success"
  }, {
    path: "/user-management/role",
    component: _7a858037,
    name: "user-management-role"
  }, {
    path: "/user-management/user",
    component: _33ec854c,
    name: "user-management-user"
  }, {
    path: "/user-management/role/create-role",
    component: _1c2f5468,
    name: "user-management-role-create-role"
  }, {
    path: "/user-management/user/create-user",
    component: _cfc7a014,
    name: "user-management-user-create-user"
  }, {
    path: "/user-management/role/edit-role/:id",
    component: _112a3669,
    name: "user-management-role-edit-role-id"
  }, {
    path: "/user-management/user/edit-user/:id",
    component: _37789cd3,
    name: "user-management-user-edit-user-id"
  }, {
    path: "/reset-password/:id?",
    component: _5b28d8f8,
    name: "reset-password-id"
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
