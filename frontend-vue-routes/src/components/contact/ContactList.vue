<template>
  <div>
    <div class="container-sm p-4 bg-light">
      <h3 class="font-weight-light">{{title}}</h3>
    </div>
    <div class="d-flex justify-content-center">
      <table class="w-75 table table-striped" v-if="user.length > 0">
        <thead>
          <tr>
            <th scope="col">TAG</th>
            <th scope="col">Nome</th>
            <th scope="col">Status</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          <ContactListIten
          v-for="users in user"
          :key="users.id"
          :dataUsers="users"/>
        </tbody>
      </table>
        <p v-else>nenhum registro cadastrado</p>
    </div>
    <div class="container-sm p-4">
      <button @click="returnPage" class="btn btn-primary">Voltar</button>
    </div>
  </div>
</template>

<script>
import ContactListIten from '@/components/contact/component/ContactListIten.vue'

export default {
  components: {
    ContactListIten
  },
  props: {
    title: {
      type: String,
      default: 'Meus Equipamentos'
    }
  },
  data () {
    return {
      user: [
        { id: 1, name: 'Plutão', status: 'não locado', desc: 'descrição exemplo para preencher a lacuna da tabela' },
        { id: 2, name: 'Jupiter', status: 'locado', desc: 'descrição exemplo para preencher a lacuna da tabela' },
        { id: 3, name: 'Saturno', status: 'perdido', desc: 'descrição exemplo para preencher a lacuna da tabela' },
        { id: 4, name: 'Netuno', status: 'vencido', desc: 'descrição exemplo para preencher a lacuna da tabela' }
      ]
    }
  },
  methods: {
    returnPage () {
      this.$router.back()
    }
  }
}
</script>
