import RouterView from './RouterView'
import RouterLink from './RouterLink'

export default {
  install(Vue) {
    Vue.component(RouterView.name, RouterView)
    Vue.component(RouterLink.name, RouterLink)
  }
}
