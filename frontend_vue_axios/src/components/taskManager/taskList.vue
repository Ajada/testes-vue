<template>
  <div>
    <div class="bg-light p-4">
      <div class="container row">
        <div class="col-sm-10">
          <h1 class="font-weight-light">Lista de tarefas</h1>
        </div>
        <div class="col-sm-2">
          <button class="btn btn-primary float-right" @click="form = !form">
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
        v-for="tarefa in tarefas"
        :key="tarefa.id"
        :tarefa="tarefa"/>
    </ul>
    <p v-else>nenhuma tarefa criada</p>

    <TarefaSalvar
      v-if="form"
      @newTask="createNewTask"/>

  </div>
</template>

<script>
import axios from 'axios'

import TarefaSalvar from '@/components/taskManager/taskSave.vue'
import TarefaListaIten from '@/components/taskManager/taskIten.vue'
import config from '@/config/config'

export default {
  components: {
    TarefaSalvar,
    TarefaListaIten
  },
  data () {
    return {
      tarefas: [],
      form: false
    }
  },
  created () {
    axios.get(`${config.apiUrl}/tarefas`)
      .then((res) => {
        this.tarefas = res.data
      })
  },
  methods: {
    createNewTask (task) {
      axios.post(`${config.apiUrl}/tarefas`, task)
        .then(res => {
          this.tarefas = res.data
          this.form = false
        })
    }
  }
}
</script>

<style>

</style>
