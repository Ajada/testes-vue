<template>
  <div>
    <div class="container-sm p-4 bg-light">
      <h3 class="font-height-light">Historico de locação</h3>
    </div>
    <div class="container-sm p-2">
      <div class="container p-4 border rounded">
        <p>ID: {{ id }}</p>
      </div>
    </div>
    <div class="container p-4">
      <router-link :to="`/contact/${id}/edit`" class="btn btn-primary">Editar</router-link>
    </div>
    <div>
      <button
        class="btn btn-primary mt-2"
        @click="$router.back()">
        Voltar
      </button>
    </div>
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
