import Vue from 'vue'

const event = new Vue({
  data: {
    authenticate: false,
    msg: ''
  },
  created () {
    this.$on('login', logged => {
      this.authenticate = logged
    })
  }
})

export default event
