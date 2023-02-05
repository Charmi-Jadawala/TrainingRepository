<template lang="en">
    <div>
        <h1 class="display-5 text-primary text-center m-1 mb-2">Employee Form</h1>
        <div class="container mx-auto mt-3">

            <form action="">
                <label for="id" class="form-label fs-5">Employee ID:</label>
                <input type="text" v-model="id" name="id" id="id" class="form-control-sm mx-2 text-primary mb-3" /><br />

                <label for="Name" class="form-label fs-5">Name:</label>
                <input type="text" v-model="Name" name="Name" id="Name" class="form-control-sm mx-2 text-primary mb-3" /><br />

                <label for="Address" class="form-label fs-5">Address:</label>
                <input type="text" v-model="Address" name="Address" id="Address" class="form-control-sm mx-2 text-primary mb-3" /><br />

                <label for="Gender" class="form-label fs-5">Gender:</label>
                <input type="radio" v-model="Gender" id="Male" name="Gender" class="m-1 ms-2" value="Male" />
                <label for="Male" class="form-label fs-5">Male</label>
                <input type="radio" v-model="Gender" id="Female" name="Gender" class="m-1 ms-2" value="Female" />
                <label for="Female" class="form-label fs-5">Female</label>
                <input type="radio" v-model="Gender" id="Other" name="Gender" class="m-1 ms-2" value="Other" />
                <label for="Other" class="form-label fs-5">Other</label><br />

                <label for="Doj" class="form-label fs-5">Date of Joining:</label>
                <input type="date" v-model="Doj" name="Doj" id="Doj" class="form-control-sm mx-2 text-primary mb-3" /><br />

                <label for="Hobbies" class="form-label fs-5">Hobbies:</label>
                <input type="text" v-model="Hobbies" name="Hobbies" id="Hobbies" class="form-control-sm mx-2 text-primary mb-4" /><br />
                
                <button type="button" @click="addData()" class="btn btn-outline-primary me-2">Store Data</button>
                <button type="button" @click="filterData()" class="btn btn-outline-primary mx-2">Filter Data</button>
                <button type="button" @click="sortedData()" class="btn btn-outline-primary mx-2">Sort Data</button>
                <button type="reset" class="btn btn-outline-primary mx-2">Reset</button>
            </form>


            <table v-if="showData" class="table table-striped my-4">
                <caption></caption>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Date of Joining</th>
                        <th>Hobbies</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee, index) in employeeArray" :key="employee.EmployeeID">
                        <td>{{ employee.EmployeeID }}</td>
                        <td>{{ employee.Name }}</td>
                        <td>{{ employee.Address }}</td>
                        <td>{{ employee.Gender }}</td>
                        <td>{{ employee.DOJ }}</td>
                        <td>{{ employee.Hobbies }}</td>
                    </tr>
                </tbody>
            </table>


            <h3 v-if="filterStatus" class="display-6 fs-3 mb-2">List of Employees who have joined in the current month: 
                <p v-for="(filteredEmp, index) in filteredArray" :key="filteredEmp.Name" class="text-primary my-1 fs-4">
                    {{ filteredEmp.Name }}
                </p>
            </h3>

        </div>
    </div>
</template>
<script>
export default {
    name: 'EmployeeForm',
    data() {
        return {
            id: "",
            Name: "",
            Address: "",
            Gender: "",
            Doj: "",
            Hobbies: "",
            employeeArray: [],
            showData: false,

            month: new Date().getMonth(),
            filteredArray: [],

            filterStatus: false,
            sortStatus: false
        }
    },
    methods: {
        addData(){
            this.showData = true;
            this.employeeArray.push({
                EmployeeID: this.id,
                Name: this.Name,
                Address: this.Address,
                Gender: this.Gender,
                DOJ: this.Doj,
                Hobbies: this.Hobbies
            });
        },

        filterData(){
            this.filterStatus = true;
            for(let employee of this.employeeArray){
                let empMonth = employee.DOJ.split("-");
                let currentMonth = (this.month + 1).toString();
                if(currentMonth.length == 1){
                currentMonth = currentMonth.padStart(2, "0");
                }
                if(empMonth[1] == (currentMonth)){
                    this.filteredArray.push(employee);   
                } 
            }
        },

        sortedData(){
            this.sortStatus = true;
            this.employeeArray.sort((a, b) => {
                let fa = a.Name.toLowerCase();
                let fb = b.Name.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }
    },
}
</script>
<style scoped></style>