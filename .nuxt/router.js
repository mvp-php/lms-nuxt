import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c0906b02 = () => interopDefault(import('..\\pages\\category-managment\\index.vue' /* webpackChunkName: "pages/category-managment/index" */))
const _f1daa99a = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _0b936e12 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _c93fadfe = () => interopDefault(import('..\\pages\\forgot-password\\index.vue' /* webpackChunkName: "pages/forgot-password/index" */))
const _50386f68 = () => interopDefault(import('..\\pages\\link-successfully\\index.vue' /* webpackChunkName: "pages/link-successfully/index" */))
const _4acd443d = () => interopDefault(import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages/Login/index" */))
const _1ff24881 = () => interopDefault(import('..\\pages\\reset-success\\index.vue' /* webpackChunkName: "pages/reset-success/index" */))
const _060c77b0 = () => interopDefault(import('..\\pages\\SubCategory\\index.vue' /* webpackChunkName: "pages/SubCategory/index" */))
const _1229e0c8 = () => interopDefault(import('..\\pages\\category-managment\\create-category.vue' /* webpackChunkName: "pages/category-managment/create-category" */))
const _1474e754 = () => interopDefault(import('..\\pages\\Login\\login.vue' /* webpackChunkName: "pages/Login/login" */))
const _fb822812 = () => interopDefault(import('..\\pages\\SubCategory\\add.vue' /* webpackChunkName: "pages/SubCategory/add" */))
const _5171608b = () => interopDefault(import('..\\pages\\user-management\\role\\index.vue' /* webpackChunkName: "pages/user-management/role/index" */))
const _762a03d4 = () => interopDefault(import('..\\pages\\user-management\\user\\index.vue' /* webpackChunkName: "pages/user-management/user/index" */))
const _7bf7a720 = () => interopDefault(import('..\\pages\\user-management\\role\\create-role.vue' /* webpackChunkName: "pages/user-management/role/create-role" */))
const _c7e92d80 = () => interopDefault(import('..\\pages\\user-management\\user\\create-user.vue' /* webpackChunkName: "pages/user-management/user/create-user" */))
const _136bfc98 = () => interopDefault(import('..\\pages\\user-management\\role\\edit-role\\_id.vue' /* webpackChunkName: "pages/user-management/role/edit-role/_id" */))
const _661cefb8 = () => interopDefault(import('..\\pages\\user-management\\user\\edit-user\\_id.vue' /* webpackChunkName: "pages/user-management/user/edit-user/_id" */))
const _357c1d9c = () => interopDefault(import('..\\pages\\category-managment\\edit-category\\_id.vue' /* webpackChunkName: "pages/category-managment/edit-category/_id" */))
const _7d6bd246 = () => interopDefault(import('..\\pages\\reset-password\\_id.vue' /* webpackChunkName: "pages/reset-password/_id" */))
const _20fab090 = () => interopDefault(import('..\\pages\\SubCategory\\_id.vue' /* webpackChunkName: "pages/SubCategory/_id" */))
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
    path: "/category-managment",
    component: _c0906b02,
    name: "category-managment"
  }, {
    path: "/course",
    component: _f1daa99a,
    name: "course"
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
    path: "/reset-success",
    component: _1ff24881,
    name: "reset-success"
  }, {
    path: "/SubCategory",
    component: _060c77b0,
    name: "SubCategory"
  }, {
    path: "/category-managment/create-category",
    component: _1229e0c8,
    name: "category-managment-create-category"
  }, {
    path: "/Login/login",
    component: _1474e754,
    name: "Login-login"
  }, {
    path: "/SubCategory/add",
    component: _fb822812,
    name: "SubCategory-add"
  }, {
    path: "/user-management/role",
    component: _5171608b,
    name: "user-management-role"
  }, {
    path: "/user-management/user",
    component: _762a03d4,
    name: "user-management-user"
  }, {
    path: "/user-management/role/create-role",
    component: _7bf7a720,
    name: "user-management-role-create-role"
  }, {
    path: "/user-management/user/create-user",
    component: _c7e92d80,
    name: "user-management-user-create-user"
  }, {
    path: "/user-management/role/edit-role/:id",
    component: _136bfc98,
    name: "user-management-role-edit-role-id"
  }, {
    path: "/user-management/user/edit-user/:id",
    component: _661cefb8,
    name: "user-management-user-edit-user-id"
  }, {
    path: "/category-managment/edit-category/:id",
    component: _357c1d9c,
    name: "category-managment-edit-category-id"
  }, {
    path: "/reset-password/:id?",
    component: _7d6bd246,
    name: "reset-password-id"
  }, {
    path: "/SubCategory/:id",
    component: _20fab090,
    name: "SubCategory-id"
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
