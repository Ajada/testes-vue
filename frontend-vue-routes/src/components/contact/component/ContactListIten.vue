<template>
  <tr>
    <th scope="col"><span>{{ dataUsers.id }}</span></th>
    <th><span>{{ dataUsers.name }}</span></th>
    <th><span>{{ dataUsers.email }}</span></th>
    <th>
      <router-link class="btn btn-primary text-white" :to="`/contact/${dataUsers.id}`">Histórico</router-link>
    </th>
    <!-- <th><span>{{ dataUsers.desc }}</span></th> -->
  </tr>
</template>

<script>
export default {
  name: 'ContactListIten',
  props: {
    dataUsers: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>
