<template>
  <div>
    <div v-if="msg" class="alert alert-success">
      <span class="font-weight-bold fs-5 p-2 text-success">{{ msg }}</span>
    </div>
    <div class="bg-light p-4">
      <div class="container row">
        <div class="col-sm-10">
          <h1 class="font-weight-light">Lista de tarefas</h1>
        </div>
        <div class="col-sm-2">
          <button class="btn btn-primary float-right" @click="clearFormToCreate">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
            <span>Criar</span>
          </button>
        </div>
      </div>
    </div>

    <ul class="list-group container mt-2" v-if="tarefas.length > 0">
      <TarefaListaIten
        v-for="tarefa in tarefaOrdenada"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editIten="selectItenToEdit"
        @deleteIten="selectItenToDelete"
        @finishim="editTask" />
    </ul>
    <p v-else>nenhuma tarefa criada</p>

    <TarefaSalvar
      v-if="form"
      @newTask="createNewTask"
      @editTask="editTask"
      :tarefa="taskSelected" />

  </div>
</template>

<script>
import axios from '@/axios'
import TarefaSalvar from '@/components/taskManager/taskSave.vue'
import TarefaListaIten from '@/components/taskManager/taskIten.vue'

export default {
  components: {
    TarefaSalvar,
    TarefaListaIten
  },
  data () {
    return {
      tarefas: [],
      form: false,
      taskSelected: undefined,
      msg: ''
    }
  },
  created () {
    axios.get('/tarefas')
      .then((res) => {
        this.tarefas = res.data
      }).catch(error => {
        if (error.response) { this.response('Servidor retornou o status de erro: ' + error.response.status) }
      })
  },
  computed: {
    tarefaOrdenada () {
      return this.tarefas.slice().sort((task1, task2) => {
        if (task1.status === task2.status) {
          return task1.title < task2.title
            ? -1
            : task1.title > task2.title ? 1 : 0
        }
        return task1.status - task2.status
      })
    }
  },
  methods: {
    createNewTask (task) {
      axios.request({
        method: 'post',
        url: '/tarefas',
        data: task
      }).then(res => {
        this.tarefas = res.data
        this.response('Nova tarefa adicionada com sucesso')
      })
      this.reset()
    },
    editTask (task) {
      axios.put('/tarefas/' + task.id, task)
        .then(res => {
          this.tarefas = res.data
          this.response('Tarefa ' + task.id + ' editada com sucesso')
        })
      this.form = false
    },
    deleteTask (task) {
      axios.delete(`/tarefas/${task.id}`)
        .then(res => {
          this.tarefas = res.data
          this.response('Tarefa deletada com sucesso')
        })
    },
    selectItenToDelete (task) {
      const confirm = window.confirm('Deseja realmente deletar essa tarefa ?')
      if (confirm) {
        this.deleteTask(this.taskSelected = task)
      }
    },
    selectItenToEdit (task) {
      this.taskSelected = task
      this.form = true
    },
    clearFormToCreate () {
      if (this.taskSelected) {
        this.taskSelected = undefined
        return
      }
      this.form = !this.form
    },
    reset () {
      this.taskSelected = undefined
      this.form = !this.form
    },
    response (msg) {
      this.msg = msg
      setTimeout(() => {
        this.msg = ''
      }, 4000)
    }
  }
}
</script>

<style scoped>
.text-success{
  color: green;
  font-weight: 700;
}
</style>
