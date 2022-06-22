<template>
  <div id="app">
    <nav class="nav justify-content-end light-blue p-2 d-flex">
      <ul class="mt-3">
        <router-link class="mr-2 p-3 text-white" to="/">Home</router-link>
        <router-link class="mr-2 p-3 text-white" to="/dashboard">Dashboard</router-link>
        <router-link class="mr-2 p-3 text-white" to="/contact">Coleção</router-link>
        <router-link class="mr-2 p-3 text-white" to="/about">About</router-link>
      </ul>
    </nav>
    <!-- <nav class="align-right"> </nav> -->
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.selected{
  color:#fff;
  font-weight: 700;
  text-shadow: 1px 1px 10px #fff;
}

.light-blue{
  background-color: rgb(79, 189, 225);
}

nav {
  padding: 30px;
  text-decoration: none;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #fff;

      // &.router-link-exact-active {
      // color:#fff;
      // font-weight: 700;
      // text-shadow: 1px 1px 10px #fff;
  }
}
</style>
