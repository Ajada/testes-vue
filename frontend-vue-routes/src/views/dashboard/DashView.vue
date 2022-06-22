<template>
  <div class="home">
    <img alt="Dashboard ico" src="https://h5p.org/sites/default/files/styles/medium-logo/public/logos/chart-icon-color.png"> <br>
    <h1>Controle de Equipamentos</h1>
    <button class="btn btn-primary" @click="returnPage()">Voltar</button>
  </div>
</template>

<script>

export default {
  name: 'DashView',
  methods: {
    returnPage () {
      this.$router.back()
    }
  }
}
</script>
