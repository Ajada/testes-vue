<template>
  <div>
    <div class="container-sm p-4 bg-light">
      <h3 class="font-weight-light">{{title}}</h3>
    </div>
    <div class="mt-2 d-flex justify-content-center form-group">
        <input @keyup="searchRegister" type="search" class="w-50 form-control" placeholder="Buscar" :value="$route.query.name">
      </div>
    <div class="d-flex justify-content-center">
      <table class="w-75 table table-striped" v-if="filterRegister.length > 0">
        <thead>
          <tr>
            <th scope="col">TAG</th>
            <th scope="col">Nome</th>
            <th scope="col">Status</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          <ContactListIten v-for="users in filterRegister" :key="users.id" :dataUsers="users"/>
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
import events from '@/Event'

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
      user: []
    }
  },
  computed: {
    filterRegister () {
      const query = this.$route.query.name
      return !query ? this.user : this.user.filter(u => u.name.toLowerCase().includes(query.toLowerCase()))
    }
  },
  created () {
    this.user = events.arrUser
  },
  methods: {
    returnPage () {
      this.$router.back()
    },
    searchRegister (event) {
      this.$router.push({
        path: '/contact',
        query: { name: event.target.value }
      })
    }
  }
}
</script>
