<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid px-3 fs-5">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link text-white"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/protected" class="nav-link text-white"
              >Protected</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="m-4 text-center">
        <h1 class="display-5 text-primary">Login with Validation</h1>
        <div class="container mx-auto mt-4">
            <form action="">
                <label for="username" class="form-label fs-5">Username: </label>
                <input type="text" v-model="username" name="username" id="username" class="form-control-sm mx-2 text-primary mb-3" /><br />
                <label for="password" class="form-label fs-5">Password:</label>
                <input type="password" v-model="password" name="password" id="password" class="form-control-sm mx-2 text-primary mb-4" /><br />
                <button type="button" @click="login()" class="btn btn-outline-primary ms-0 mx-2">Login</button>
                <button @click="logout()" class="btn btn-outline-primary">Logout</button>
            </form>
        </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.username == 'admin' && this.password == 'password') {
       localStorage.setItem("user", this.username);
      }
    },

    logout() {
      localStorage.removeItem("user");
    },
  },
};
</script>

<style scoped></style>
