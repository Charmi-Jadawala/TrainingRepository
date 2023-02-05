<template lang="en">
    <div>
        <h1 class="display-5 text-primary text-center">Login with Validation</h1>
        <div class="container mx-auto mt-2">
            <form action="">
                <label for="username" class="form-label fs-5">Username: </label>
                <input type="text" v-model="username" name="username" id="username" class="form-control-sm mx-2 text-primary mb-3" /><br />
                <label for="password" class="form-label fs-5">Password:</label>
                <input type="password" v-model="password" name="password" id="password" class="form-control-sm mx-2 text-primary mb-4" /><br />
                <button type="button" @click="validate" class="btn btn-outline-primary ms-0 mx-2">Login</button>
                <button @click="clear" class="btn btn-outline-primary">Clear</button>
            </form>
            <h3 class="display-6 mt-3 mb-3 fs-3">Status: {{ result }}</h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            username: "",
            password: "",
            result: "" 
        }
    },
    methods: {
        validate() {
            if(this.username == "admin" && this.password == "admin"){
            this.result = "Valid User";
            }
            else{
            this.result = "Invalid User";
            }
        },

        clear() {
            this.username = "";
            this.password = "";
            this.result = "";
        }
    },
}
</script>
<style scoped></style>