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
        <div class="col-sm-2 " v-if="tarefa">
          <div class="group-form">
            <button
              type="button"
              class="btn btn-sm"
              :class="classBtn"
              @click="tarefaLocal.status = !tarefaLocal.status" >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
              </svg>
            </button>
            <label class="p-2">Tarefa Concluida ? </label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-2 mb-2">Salvar</button>
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
        this.tarefa
      )
    }
  },
  watch: {
    tarefa () {
      this.tarefaLocal = Object.assign({}, this.tarefa)
    }
  },
  computed: {
    classBtn () {
      return this.tarefa && this.tarefaLocal.status ? 'btn-success' : 'btn-secondary'
    },
    classeColuna () {
      return this.tarefas ? 'col-sm-10' : 'col-sm12'
    }
  },
  methods: {
    newTask () {
      const typeEvent = !this.tarefa ? 'newTask' : 'editTask'
      this.$emit(typeEvent, this.tarefaLocal)
      this.tarefaLocal = { title: '', status: false }
    }
  }
}
</script>

<style scoped>
.btn-success{
  background-color: rgb(1, 204, 1);
}
</style>
