<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid px-3 fs-5">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link text-white">Home</router-link> 
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link text-white">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link text-white">Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/users" class="nav-link text-white">Users</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    .router-link-active {
        color: #1266F1 !important;
    }
</style>