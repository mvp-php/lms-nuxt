export { default as Login } from '../..\\components\\Login.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as ElementDropzone } from '../..\\components\\element\\Dropzone.vue'
export { default as ElementFormButton } from '../..\\components\\element\\formButton.vue'
export { default as ElementFormDropdown } from '../..\\components\\element\\formDropdown.vue'
export { default as ElementFormLabel } from '../..\\components\\element\\formLabel.vue'
export { default as ElementFormTextBoxField } from '../..\\components\\element\\formTextBoxField.vue'
export { default as ElementImage } from '../..\\components\\element\\image.vue'
export { default as ElementNuxtLink } from '../..\\components\\element\\NuxtLink.vue'
export { default as ConfigDataService } from '../..\\components\\config\\DataService.js'
export { default as Header } from '../..\\components\\Header\\header.vue'
export { default as ServiceAuthService } from '../..\\components\\Service\\AuthService.js'

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
