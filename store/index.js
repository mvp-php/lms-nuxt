export const actions = {
  async nuxtServerInit({ commit }, context) {
    // Public profile
    if (context.route.params && context.route.params.subdomain) {
      context.$axios.onRequest((config) => {
        config.progress = false
      })

      let { data } = await context.$axios.get(
        `users/get_user_data_using_subdomain/${context.route.params.subdomain}`,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      await context.store.dispatch('artists/setPublicProfile', data.user_data)
    }
  },
}