<template>
  <div class="container-fluid px-5 mb-5 mx-auto">
    <h1 class="mb-3 display-3 text-primary text-center">Users</h1>
    <table class="table table-striped table-hover text-primary">
      <caption></caption>
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in userData" :key="i" >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "App",
  components: {},
  data() {
    return {
      userData: []
    }
  },
  async created() {
    let getData = await axios.get("https://gorest.co.in/public/v2/users");
    console.log(getData.data);
    this.userData = getData.data;
  },
};
</script>

<style></style>
