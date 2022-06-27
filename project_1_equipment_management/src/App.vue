<template>
  <div id="app">
    <HeaderMenu/>
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/_partials/MenuPartials.vue'

export default {
  components: {
    HeaderMenu
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
