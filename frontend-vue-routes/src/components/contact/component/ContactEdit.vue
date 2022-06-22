<template>
    <div class="container-sm p-4">
        <h1 class="text-wight-light">Editar</h1>
        <span>ID: {{ $route.params.id }}</span> <br>
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
