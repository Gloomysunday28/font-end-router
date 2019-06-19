<template>
  <div class="c-router__view">
    <component :is="routerview"></component>
  </div>
</template>

<script>
import routes from './routes'

export default {
  name: 'RouterView',
  data() {
    return {
      routerview: null,
      changeEvent: this.$root.$options.mode === 'hash' ? 'hashchange' : 'popstate'
    }
  },
  created() {
    window.addEventListener(this.changeEvent, this.routerChange)
    this.routerChange()
  },
  beforeDestroy() {
    window.removeEventListener(this.changeEvent, this.routerChange)
  },
  methods: {
    routerChange() {
      const path = window.location[this.mode === 'hash' ? 'hash' : 'pathname'].replace('#', '')
      const route = routes.find(r => r.path === path)
      if (route) {
        this.routerview = route.component
      } else {
        this.routerview = null
      }
    },
    routerCache(key, component) {
      const routes = {}
      this.routerCache = (key, component) => {
        if (!routes[key]) {
          routes[key] = component
        }
        return routes[key] || null
      }

      return this.routerCache(key, component)
    }
  }
}
</script>
