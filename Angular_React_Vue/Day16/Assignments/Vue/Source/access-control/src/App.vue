<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid px-3 fs-5">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Admin" class="nav-link text-white"
              >Admin</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/User" class="nav-link text-white"
              >User</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
