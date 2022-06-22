<template>
  <div class="jumbotron">
    <h1 class="font-weight-light">About Page</h1>
    <button @click="returnPage" class="btn btn-primary">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    returnPage () {
      this.$router.back()
    }
  }
}
</script>
