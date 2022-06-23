<template>
    <div>
      <div class="container-sm p-4 bg-light">
        <h3 class="font-weight-light">Editar</h3>
      </div>
      <div class="container border p-4 mt-2 rounded">
        <span>ID: {{ id }}</span> <br>
      </div>
      <div class="container-sm p-4">
          <button @click="$router.back()" class="btn btn-primary">Voltar</button>
      </div>
    </div>
</template>

<script>
export default {
  props: [
    'id'
  ]
  // methods: {
  //   returnPage () {
  //     this.$router.back()
  //   }
  // }
}
</script>
