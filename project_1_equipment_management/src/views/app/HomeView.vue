<template>
  <div class="home">
    <h1 class="text-dark p-2">Inicio</h1>
    <div class="container-sm bg-light p-3">
      <p>
        <ChartHome />
      </p>
    </div>
  </div>
</template>

<script>
import ChartHome from '@/components/home/ChartHome.vue'

export default {
  components: {
    ChartHome
  }
}
</script>
