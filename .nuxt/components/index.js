export { default as Login } from '../../components/Login.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Category } from '../../components/Category/category.vue'
export { default as Dashboard } from '../../components/Dashboard/dashboard.vue'
export { default as ForgotPassword } from '../../components/ForgotPassword/forgotPassword.vue'
export { default as IncludeFooter } from '../../components/Include/Footer.vue'
export { default as IncludeHeader } from '../../components/Include/Header.vue'
export { default as IncludeSidebar } from '../../components/Include/Sidebar.vue'
export { default as ResetPassword } from '../../components/ResetPassword/resetPassword.vue'
export { default as ServiceAuthService } from '../../components/Service/AuthService.js'
export { default as ConfigDataService } from '../../components/config/DataService.js'
export { default as ElementDropzone } from '../../components/element/Dropzone.vue'
export { default as ElementLoadingBar } from '../../components/element/LoadingBar.vue'
export { default as ElementNuxtLink } from '../../components/element/NuxtLink.vue'
export { default as ElementErrorToastr } from '../../components/element/errorToastr.vue'
export { default as ElementFormButton } from '../../components/element/formButton.vue'
export { default as ElementFormDropdown } from '../../components/element/formDropdown.vue'
export { default as ElementFormLabel } from '../../components/element/formLabel.vue'
export { default as ElementFormTextBoxField } from '../../components/element/formTextBoxField.vue'
export { default as ElementImage } from '../../components/element/image.vue'
export { default as ElementSuccessToastr } from '../../components/element/successToastr.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
