<template>
    <div class="container-fluid bg-light p-4 fs-6 text-center">
        <h2 class="pb-2">User Data</h2>
        <div v-for="(data, index) in displayList" :key="index" class="display-6 fs-3 text-primary">
            <p class="m-0">{{ data.userID }} &nbsp; {{ data.userName }} &nbsp; {{ data.Gender }} &nbsp; {{ data.Designation }} &nbsp; {{ data.PanNumber }}</p>
        </div>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            userDetails: [
                {
                    "userID": 1,
                    "userName": "Roy",
                    "Gender": "Male",
                    "Designation": "Developer",
                    "PanNumber":"335454"
                },
                {
                    "userID": 2,
                    "userName": "Rohit", 
                    "Gender": "Male",
                    "Designation": "Junior Developer",
                    "PanNumber": "abcd"
                }
            ], 
        }
    },
    computed: {
        inpID: function() {
            return parseInt(this.$route.params.id);
        },
        displayList: function () {
            return this.userDetails.filter(data => {
                return data.userID == this.inpID;
            });
        }
    }
}
</script>