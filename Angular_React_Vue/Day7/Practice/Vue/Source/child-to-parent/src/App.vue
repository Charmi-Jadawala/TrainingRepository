<template>
    <div>
        <ProfileComponent @getValue = "Display($event)"></ProfileComponent>
        <h1 class="my-3 text-center display-5 text-success">Welcome {{ message }}</h1>
    </div>
</template>

<script>
import ProfileComponent from './components/ProfileComponent.vue'

export default {
    name: 'App',
    components: {
        ProfileComponent
    },
    data() {
        return {
            message: ""
        }
    },
    methods: {
        Display(data) {
            this.message = data;
        }
    },
}
</script>

<style></style>
