<template>
  <div>
    <div class="jumbotron">
      <h1 class="font-weight-light">{{title}}</h1>
    </div>
    <div class="container">
      <table class="table table-striped" v-if="user.length > 0">
        <thead>
          <tr>
            <th scope="col">TAG</th>
            <th scope="col">Nome</th>
            <th scope="col">Data de registro</th>
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

    <button @click="returnPage" class="btn btn-primary">Voltar</button>
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
        { id: 1, name: 'Plutão', email: 'plutão@gmail.com', desc: 'descrição exemplo para preencher a lacuna da tabela' },
        { id: 2, name: 'Jupiter', email: 'jup@gmail.com', desc: 'descrição exemplo para preencher a lacuna da tabela' },
        { id: 3, name: 'Saturno', email: 'saturno@gmail.com', desc: 'descrição exemplo para preencher a lacuna da tabela' },
        { id: 4, name: 'Netuno', email: 'ne@gmail.com', desc: 'descrição exemplo para preencher a lacuna da tabela' }
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

<style>

</style>
