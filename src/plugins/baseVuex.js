import NotifyMessage from '../mixins/notify-message.mixin.js'
const BaseVuex = {
  install (Vue, options) {
    Vue.mixin({
      mixins: [NotifyMessage],
      methods: {
        async skeleton (params) {
          if (!params.noLoading) {
            this.$loading(true)
          }
          try {
            await this.$store.dispatch(params.urlDispatch, params.params)
            if (params.messages) this.$setNotifySuccess(params.messages)
            if (params.callback) params.callback()
          } catch (errors) {
            this.$setNotifyDanger(errors)
          } finally {
            this.$loading(false)
          }
        },
        async $list (params) {
          await this.skeleton(params)
        },
        async $listFilter (params) {
          await this.skeleton(params)
        },
        async $createOrUpdate (params) {
          await this.skeleton(params)
        },
        async $remove (params) {
          await this.skeleton(params)
        }
      }
    })
  }
}
export default BaseVuex
