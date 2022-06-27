import Vue from 'vue'

const event = new Vue({
  data: {
    auth: false,
    msg: '',
    arrUser: [
      { id: 1, name: 'MD Técnica', status: 'não locado', desc: 'descrição exemplo para preencher a lacuna da tabela' },
      { id: 2, name: 'DDeus', status: 'locado', desc: 'descrição exemplo para preencher a lacuna da tabela' },
      { id: 3, name: 'DDeus', status: 'perdido', desc: 'descrição exemplo para preencher a lacuna da tabela' },
      { id: 4, name: 'Engeman', status: 'vencido', desc: 'descrição exemplo para preencher a lacuna da tabela' }
    ]
  },
  methods: {
    filterIten (id) {
      return Object.assign({}, this.arrUser.find(user => user.id === id))
    },
    editIten (newUser) {
      const indice = this.arrUser.findIndex(user => user.id === newUser.id)
      this.arrUser.splice(indice, 1, newUser)
    }
  },
  created () {
    this.$on('login', logedOn => {
      this.auth = logedOn
    })
  }
})

export default event
