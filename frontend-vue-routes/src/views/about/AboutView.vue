<template>
  <div>
    <div class="container-sm p-4 bg-light">
      <h3 class="font-weight-light">About Page</h3>
    </div>
    <div class="container-sm p-4">
      <button @click="returnPage" class="btn btn-primary">Voltar</button>
    </div>
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
