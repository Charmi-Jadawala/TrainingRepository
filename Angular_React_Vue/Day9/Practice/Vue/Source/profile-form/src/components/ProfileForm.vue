<template lang="en">
    <div class="my-4">
        <div class="container w-50 mx-auto bg-light p-3">
            <h1 class="display-6 text-primary text-center mb-4">Profile Form</h1>
            <form>
                <div class="input-group m-2">
                    <span class="input-group-text">ID:</span>
                    <input type="number" v-model="id" class="form-control" id="id" placeholder="Enter your ID" />
                </div>

                <div class="input-group m-2">
                    <span class="input-group-text">Name:</span>
                    <input type="text" v-model="name" class="form-control" id="name" placeholder="Enter your Name" />
                </div>

                <div class="input-group m-2">
                    <span class="input-group-text">Address:</span>
                    <textarea v-model="address" class="form-control" id="address" placeholder="Enter your Address"></textarea>
                </div>

                <div class="m-2 mt-4">
                    <button type="button" class="btn btn-primary" @click="addData()" >Submit</button>
                    <button type="reset" class="btn btn-primary ms-3">Clear</button>
                </div>
                <h1 v-if="showStatus" class="display-6 fs-3 text-warning text-center mb-2">{{ status }}</h1>
            </form>  
        </div>
        <div v-if="showData" class="my-4 w-50 mx-auto">
            <h1 class="display-6 text-primary text-center mb-2">Form Data</h1>
            <table class="table table-striped table-hover">
                <caption></caption>
                <thead class="table-dark text-primary">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody v-for="(data, index) in dataList" :key="index">
                    <tr>
                        <td> {{ data.id }} </td>
                        <td> {{ data.name }} </td>
                        <td> {{ data.address }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
    
export default {
    name: 'ProfileForm',
    setup () {
        return { 
            v$: useVuelidate() 
        }
    },
    data() {
        return {
            id: null,
            name: null,
            address: null,
            showData: false,
            showStatus: false,
            dataList: [],
            status: ""
        }
    },
    methods: {
        addData() {
            this.v$.$validate();
            if(!this.v$.$error) {
                this.status = "Valid Form Data";
                this.showStatus = true;
                    this.dataList.push({
                    id: this.id,
                    name: this.name,
                    address: this.address
                });
                this.showData = true;        
            }
            else {
                this.status = "Invalid Form Data";
                this.showStatus = true;
            }
        }
    },
    validations() {
        return {
            id: { required },
            name: { required },
            address: { required }
        }
    }
}
</script>
<style scoped></style>