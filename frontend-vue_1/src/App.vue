<template>
  <div id="app">
  
    <img alt="Vue logo" src="./assets/logo.png"> <br>
    
    <h1>URL env variable: {{ url }} </h1>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      url: process.env.VUE_APP_URL,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
