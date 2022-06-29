<template>
  <div class="mt-4"><hr>
    <div class="about bg-light p-4">
      <h2 class="font-weight-light">Nova Tarefa</h2>
    </div>
    <form @submit.prevent="newTask" class="container">
      <div class="row">
        <div :class="classeColuna">
          <div class="group-form">
            <label class="mt-2 p-2 fs-5"> Titulo: </label>
            <input
              class="form-control text-center fs-5"
              type="text"
              name="title"
              v-model="tarefaLocal.title"
              placeholder="Programar, comer, dormir, repetir">
          </div>
        </div>
        <div class="col-sm-2" v-if="tarefa">
          <div class="group-form">
            <label>Tarefa Concluida ? </label>
            <button class="btn btn-secondary btn-sm d-block">
              Check
            </button>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-2">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    tarefa: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
      tarefaLocal: Object.assign(
        {},
        { title: '', status: false },
        this.tarefas
      )
    }
  },
  computed: {
    classeColuna () {
      return this.tarefas ? 'col-sm-10' : 'col-sm12'
    }
  },
  methods: {
    newTask () {
      this.$emit('newTask', this.tarefaLocal)
      this.tarefaLocal = { title: '', status: false }
    }
  }
}
</script>

<style>

</style>
