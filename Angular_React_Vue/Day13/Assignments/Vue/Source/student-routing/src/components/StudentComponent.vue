<template>
    <div class="container-fluid p-0">
        <div>
            <h2 class="pb-2 text-primary display-6 mt-4 text-center">Students</h2>
            <div class="container mx-auto">
                <div class="row text-center">
                    <div class="col-4" v-for="student in studentList" :key="student.Id">
                        <div class="card fs-4 m-3 p-0">
                            <div class="card-header text-primary">{{ student.Id }}</div>
                            <div class="card-body">{{ student.Name }}</div> 
                            <div class="card-footer">
                                <router-link :to="`/${student.Id}`" class="btn btn-primary">See Profile</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StudentComponent',
    data() {
        return {
            studentList: [
                {
                    "Id": 1,
                    "Name": "Charmi Jadawala",
                },
                {
                    "Id": 2,
                    "Name": "Disha Bhatt",
                },
                {
                    "Id": 3,
                    "Name": "John Doe",
                },
                {
                    "Id": 4,
                    "Name": "Susan Mathew",
                },
                {
                    "Id": 5,
                    "Name": "Willam Smith",
                },
                {
                    "Id": 6,
                    "Name": "Gopi Jadawala",
                }
            ]
        }
    },
}
</script>

<style scoped></style>
