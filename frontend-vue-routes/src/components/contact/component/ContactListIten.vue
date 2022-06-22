<template>
  <tr>
    <th scope="col">
      <span class="btn font-weight-bold">{{ dataUsers.id }}</span>
    </th>
    <th>
      <span class="btn font-weight-bold">{{ dataUsers.name }}</span>
    </th>
    <th class="bg-success rounded" v-if="dataUsers.status == 'não locado'">
      <span
        class="text-white font-weight-bold btn p-2 bg-success rounded">
          {{ dataUsers.status }}
      </span>
    </th>
    <th class="bg-warning rounded" v-else-if="dataUsers.status == 'locado'">
      <span
        class="text-white font-weight-bold btn p-2 bg-warning rounded">
          {{ dataUsers.status }}
      </span>
    </th>
    <th class="bg-secondary rounded" v-else-if="dataUsers.status == 'perdido'">
      <span
        class="text-white font-weight-bold btn p-2 bg-secondary rounded">
          {{ dataUsers.status }}
      </span>
    </th>
    <th class="bg-danger rounded" v-else>
      <span
        class="text-white font-weight-bold btn p-2 bg-danger rounded">
          {{ dataUsers.status }}
      </span>
    </th>
    <th>
      <router-link
        class="text-white  btn btn-primary rounded "
        :to="{ name: 'contact-details', params: { id: dataUsers.id } }">
          Histórico
      </router-link>
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
