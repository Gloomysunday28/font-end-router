<template>
  <div class="c-router__link">
    <a :href="toPath">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'RouterLink',
  props: {
    to: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    toPath() {
      const mode = this.$root.$options.mode
      return mode === 'hash' ? '/#' + this.to : this.to
    }
  },
}
</script>

<style>

</style>
