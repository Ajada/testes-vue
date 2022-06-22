<template>
    <div>
      <ContactList />
      <router-view name="component-edit"></router-view>
      <router-view></router-view>
    </div>
</template>

<script>
import ContactList from '@/components/contact/ContactList.vue'

export default {
  components: {
    ContactList
  },
  methods: {
    returnPage () {
      this.$router.back()
    }
  }
}
</script>
