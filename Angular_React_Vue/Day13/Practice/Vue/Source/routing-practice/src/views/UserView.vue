<template>
    <div>
        <div class="container-fluid p-4 fs-6 text-center">
            <h1 class="pb-2">Welcome to User List Page !!!</h1>

            <span v-for="(user, index) in userList" :key="index">
                <router-link :to="`/users/${user.userID}`" class="btn btn-primary m-2">{{ user.userName }}</router-link>
            </span>
        </div>
        <div>
            <router-view></router-view>  
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            userList: [
                {
                    "userID": 1,
                    "userName": "Roy"
                },
                {
                    "userID": 2,
                    "userName": "Rohit"
                }
            ]
        }
    },
}
</script>