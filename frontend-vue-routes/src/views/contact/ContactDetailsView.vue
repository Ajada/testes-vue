<template>
  <div class="jumbotron">
    <h1 class="font-height-light">Historico de locação</h1>
    <p>ID: {{ id }}</p>
    <button @click="returnPage" class="btn btn-primary">Voltar</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    next()
  },
  methods: {
    returnPage () {
      this.$router.back()
    }
  }
}
</script>
