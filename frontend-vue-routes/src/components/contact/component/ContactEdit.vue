<template>
    <div>
      <div class="container-sm p-4 bg-light">
        <h3 class="font-weight-light">Equipamento</h3>
      </div>
      <div class="container border p-4 mt-2 rounded">
        <span>ID: {{ $route.params.id }}</span> <br>
      </div>
      <div v-if="data"
        class="container border p-4 mt-2 rounded">
        <span>Name: {{ data.name }}</span> <hr>
        <span>Status: {{ data.status }}</span> <hr>
        <span>Description: {{ data.desc }}</span> <br>
      </div>
      <div class="container border rounded p-4 mt-2" v-if="data">
        <div class="container-sm p-4 bg-light">
          <h3 class="font-weight-light">Editar</h3>
        </div>
        <form @submit.prevent="saveNewObject">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" placeholder="new name" v-model="data.name">
          </div>
          <div class="form-group">
            <label>E-mail</label>
            <input type="text" class="form-control" placeholder="new status" v-model="data.status">
          </div>
          <button class="btn btn-success mt-2">Save</button>
        </form>
      </div>
      <div class="container-sm p-4">
        <button @click="$router.back()" class="btn btn-primary"> Back </button>
      </div>
    </div>
</template>

<script>
import events from '@/Event'

export default {
  props: [
    'id'
  ],
  data () {
    return {
      data: Object,
      confirmExit: true
    }
  },
  // created () {
  //   this.data = events.filterIten(+this.id)
  // },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.data = events.filterIten(+to.params.id)
    })
  },
  methods: {
    saveNewObject () {
      events.editIten(this.data)
      this.confirmExit = false
      return this.$router.push('/contact')
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.data = events.filterIten(+this.id)
    next()
  },
  beforeRouteLeave (to, from, next) {
    this.confirmExit ? next(window.confirm('Deseja realmente deixar essa pagina ?')) : next()
  }
}
</script>
