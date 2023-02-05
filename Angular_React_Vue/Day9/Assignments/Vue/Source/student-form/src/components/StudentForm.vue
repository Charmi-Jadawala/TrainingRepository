<template lang="en">
    <div class="container mx-auto p-3 mt-3 mb-5">
        <div class="bg-light p-3">
            <form>
                <h1 class="display-6 text-center text-primary">Student Form</h1>
                <div class="mt-2 mb-4">
                    <h2 class="display-6 fs-3 text-primary">Student Details</h2>

                    <div>
                        <div class="input-group m-2">
                            <span class="input-group-text">First Name:</span>
                            <input type="text" v-model="student.Name.FirstName" class="form-control" id="FirstName" placeholder="First Name" />
                        </div>
                        <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Name.FirstName.$errors" :key="error.$uid">
                                <strong>{{ error.$message }}</strong>
                        </div>
                    </div>

                    <div>
                        <div class="input-group m-2">
                            <span class="input-group-text">Middle Name:</span>
                            <input type="text" v-model="student.Name.MiddleName" class="form-control" id="MiddleName" placeholder="Middle Name" />
                        </div>
                        <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Name.MiddleName.$errors" :key="error.$uid">
                            <strong>{{ error.$message }}</strong>
                        </div>
                    </div>

                    <div>
                        <div class="input-group m-2">
                            <span class="input-group-text">Last Name:</span>
                            <input type="text" v-model="student.Name.LastName" class="form-control" id="LastName" placeholder="Last Name" />
                        </div>
                        <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Name.LastName.$errors" :key="error.$uid">
                            <strong>{{ error.$message }}</strong>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="input-group m-2">
                        <span class="input-group-text">Date of Birth:</span>
                        <input type="date" v-model="student.dob" class="form-control" id="dob" placeholder="Date of Birth" />
                    </div>
                    <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.dob.$errors" :key="error.$uid">
                        <strong>{{ error.$message }}</strong>
                    </div>
                </div>

                <div class="input-group m-2">
                    <span class="input-group-text">Place of Birth:</span>
                    <input type="text" v-model="student.pob" class="form-control" id="pob" placeholder="Place of Birth" />
                    </div>

                <div class="input-group m-2">
                    <span class="input-group-text">First Language:</span>
                    <input type="text" v-model="student.FLang" class="form-control" id="FLang" placeholder="First Language" />
                </div>

                <div class="my-4">
                    <h2 class="display-6 fs-3 text-primary">Address</h2>

                    <div class="input-group m-2">
                        <span class="input-group-text">City:</span>
                        <input type="text" v-model="student.Address.City" class="form-control" id="City" placeholder="City" />
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">State:</span>
                        <input type="text" v-model="student.Address.State" class="form-control" id="State" placeholder="State" />
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">Country:</span>
                        <input type="text" v-model="student.Address.Country" class="form-control" id="Country" placeholder="Country" />
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">Pincode:</span>
                        <input type="number" v-model="student.Address.Pincode" class="form-control" id="Pincode" placeholder="Pincode" />
                    </div>
                </div>

                <div class="my-4">
                    <h2 class="display-6 fs-2 text-primary">Father's Details</h2>
                    <div class="mt-2 mb-4">
        
                        <div>
                            <div class="input-group m-2">
                                <span class="input-group-text">First Name:</span>
                                <input type="text" v-model="student.Father.Name.FirstName" class="form-control" id="FirstName" placeholder="Father's First Name" />
                            </div>
                            <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Father.Name.FirstName.$errors" :key="error.$uid">
                                <strong>{{ error.$message }}</strong>
                            </div>
                        </div>

                        <div>
                            <div class="input-group m-2">
                                <span class="input-group-text">Middle Name:</span>
                                <input type="text" v-model="student.Father.Name.MiddleName" class="form-control" id="MiddleName" placeholder="Father's Middle Name" />
                            </div>
                            <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Father.Name.MiddleName.$errors" :key="error.$uid">
                                <strong>{{ error.$message }}</strong>
                            </div>
                        </div>

                        <div>
                            <div class="input-group m-2">
                                <span class="input-group-text">Last Name:</span>
                                <input type="text" v-model="student.Father.Name.LastName" class="form-control" id="LastName" placeholder="Father's Last Name" />
                            </div>
                            <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Father.Name.LastName.$errors" :key="error.$uid">
                                <strong>{{ error.$message }}</strong>
                            </div>
                        </div>
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">Email:</span>
                        <input type="email" v-model="student.Father.Email" class="form-control" id="Email" placeholder="Father's Email" />
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">Educational Qualification:</span>
                        <input type="text" v-model="student.Father.EduQua" class="form-control" id="EduQua" placeholder="Father's Educational Qualification" />
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">Profession:</span>
                        <input type="text" v-model="student.Father.Profession" class="form-control" id="Profession" placeholder="Father's Profession" />
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">Designation:</span>
                        <input type="text" v-model="student.Father.Desg" class="form-control" id="Desg" placeholder="Father's Designation" />
                    </div>

                    <div>
                        <div class="input-group m-2">
                            <span class="input-group-text">Contact No.:</span>
                            <input type="tel" v-model="student.Father.Phone" class="form-control" id="Phone" placeholder="Father's Contact No." />
                        </div>
                        <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Father.Phone.$errors" :key="error.$uid">
                            <strong>{{ error.$message }}</strong>
                        </div>
                    </div>
                </div>

                <div class="my-4">
                    <h2 class="display-6 fs-2 text-primary">Mother's Details</h2>
                    <div formGroupName="Name" class="mt-2 mb-4">
                        
                        <div>
                            <div class="input-group m-2">
                                <span class="input-group-text">First Name:</span>
                                <input type="text" v-model="student.Mother.Name.FirstName" class="form-control" id="FirstName" placeholder="Mother's First Name" />
                            </div>
                            <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Mother.Name.FirstName.$errors" :key="error.$uid">
                                <strong>{{ error.$message }}</strong>
                            </div>
                        </div>

                        <div>
                            <div class="input-group m-2">
                                <span class="input-group-text">Middle Name:</span>
                                <input type="text" v-model="student.Mother.Name.MiddleName" class="form-control" id="MiddleName" placeholder="Mother's Middle Name" />
                            </div>
                            <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Mother.Name.MiddleName.$errors" :key="error.$uid">
                                <strong>{{ error.$message }}</strong>
                            </div>
                        </div>

                        <div>
                            <div class="input-group m-2">
                                <span class="input-group-text">Last Name:</span>
                                <input type="text" v-model="student.Mother.Name.LastName" class="form-control" id="LastName" placeholder="Mother's Last Name" />
                            </div>
                            <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Mother.Name.LastName.$errors" :key="error.$uid">
                                <strong>{{ error.$message }}</strong>
                            </div>
                        </div>
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">Email:</span>
                        <input type="email" v-model="student.Mother.Email" class="form-control" id="Email" placeholder="Mother's Email" />
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">Educational Qualification:</span>
                        <input type="text" v-model="student.Mother.EduQua" class="form-control" id="EduQua" placeholder="Mother's Educational Qualification" />
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">Profession:</span>
                        <input type="text" v-model="student.Mother.Profession" class="form-control" id="Profession" placeholder="Mother's Profession" />
                    </div>

                    <div class="input-group m-2">
                        <span class="input-group-text">Designation:</span>
                        <input type="text" v-model="student.Mother.Desg" class="form-control" id="Desg" placeholder="Mother's Designation" />
                    </div>

                    <div>
                        <div class="input-group m-2">
                            <span class="input-group-text">Contact No.:</span>
                            <input type="tel" v-model="student.Mother.Phone" class="form-control" id="Phone" placeholder="Mother's Contact No." />
                        </div>
                        <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Mother.Phone.$errors" :key="error.$uid">
                            <strong>{{ error.$message }}</strong>
                        </div>
                    </div>
                </div>

                <div class="mt-2 mb-4">
                    <h2 class="display-6 fs-3 text-primary">Emergency Contact Details</h2>

                    <div>
                        <div>
                            <div>
                                <div class="input-group m-2">
                                    <span class="input-group-text">Name:</span>
                                    <input type="text" v-model="student.Emergency.Name" class="form-control" id="Name" placeholder="Emergency contact person name" />
                                </div>
                                <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Emergency.Name.$errors" :key="error.$uid">
                                    <strong>{{ error.$message }}</strong>
                                </div>
                            </div>

                            <div class="input-group m-2">
                                <span class="input-group-text">Relation:</span>
                                <input type="text" v-model="student.Emergency.Relation" class="form-control" id="Relation" placeholder="Relation" />
                            </div>

                            <div>
                                <div class="input-group m-2">
                                    <span class="input-group-text">Contact No.:</span>
                                    <input type="tel" v-model="student.Emergency.Phone" class="form-control" id="Phone" placeholder="Contact No." />
                                </div>
                                <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Emergency.Phone.$errors" :key="error.$uid">
                                    <strong>{{ error.$message }}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-4">
                    <h2 class="display-6 fs-3 text-primary">Reference Details</h2>

                    <div >
                        <div>
                            <div class="input-group m-2">
                                <span class="input-group-text">Reference Details:</span>
                                <input type="text" v-model="student.Reference.Details" class="form-control" id="Details" placeholder="Reference Details" />
                            </div>

                            <div class="input-group m-2">
                                <span class="input-group-text">Reference through:</span>
                                <input type="text" v-model="student.Reference.Through" class="form-control" id="Through" placeholder="Reference through" />
                            </div>

                            <div class="input-group m-2">
                                <span class="input-group-text">Address:</span>
                                <input type="address" v-model="student.Reference.Address" class="form-control" id="Address" placeholder="Address" />
                            </div>

                            <div>
                                <div class="input-group m-2">
                                    <span class="input-group-text">Contact No.:</span>
                                    <input type="tel" v-model="student.Reference.Phone" class="form-control" id="Phone" placeholder="Contact No." />
                                </div>
                                <div class="alert alert-danger mt-1 ms-2" v-for="error of v$.student.Reference.Phone.$errors" :key="error.$uid">
                                    <strong>{{ error.$message }}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 v-if="showStatus" class="display-6 fs-3 my-4 text-center text-black">Form Status: {{ status }}</h1>

                <button type="button" class="btn btn-primary" @click="addData()">Submit</button>
                <button type="reset" class="btn btn-primary ms-3">Clear</button>
                <button type="button" class="btn btn-primary ms-3" @click="showDataList()">Show Data</button>
            </form>  
        </div>
        <div v-if="showData" class="my-4">
            <h1 class="display-6 text-primary text-center mb-2">Form Data</h1>
            <table  class="table table-striped table-hover">
                <caption></caption>
                <thead class="table-dark text-primary">
                    <tr>
                        <th>Student Name</th>
                        <th>DOB</th>
                        <th>Birth Place</th>
                        <th>First Language</th>
                        <th>Address</th>
                        <th>Father's Name</th>
                        <th>Mother's Name</th>
                    </tr>
                </thead>
                <tbody v-for="(student, index) in studentList" :key="index">
                    <tr>
                        <td>{{ student.Name.FirstName }}  {{ student.Name.MiddleName }}  {{ student.Name.LastName }}</td>
                        <td>{{ student.dob }}</td>
                        <td>{{ student.pob }}</td>
                        <td>{{ student.FLang }}</td>
                        <td>{{ student.Address.City }}  {{ student.Address.State }}  {{ student.Address.Country }}  {{ student.Address.Pincode }}</td>
                        <td>{{ student.Father.Name.FirstName }}  {{ student.Father.Name.MiddleName }}  {{ student.Father.Name.LastName }}</td>
                        <td>{{ student.Mother.Name.FirstName }}  {{ student.Mother.Name.MiddleName }}  {{ student.Mother.Name.LastName }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";

const validNumber = helpers.regex(/[0-9]{10}/)

export default {
    name: 'StudentForm',
    setup () {
        return { 
            v$: useVuelidate() 
        }
    },
    data() {
        return {
            student: {
                "Name": {
                    "FirstName": "",
                    "MiddleName": "",
                    "LastName": ""
                },
                "dob": null,
                "pob": "",
                "FLang": "",
                "Address": {
                    "City": "",
                    "State": "",
                    "Country": "",
                    "Pincode": null
                },
                "Father": {
                    "Name": {
                        "FirstName": "",
                        "MiddleName": "",
                        "LastName": ""
                    },
                    "Email": "",
                    "EduQua": "",
                    "Profession": "",
                    "Desg": "",
                    "Phone": null
                },
                "Mother": {
                    "Name": {
                        "FirstName": "",
                        "MiddleName": "",
                        "LastName": ""
                    },
                    "Email": "",
                    "EduQua": "",
                    "Profession": "",
                    "Desg": "",
                    "Phone": null
                },
                "Emergency": {
                    "Name": "",
                    "Relation": "",
                    "Phone": null
                },
                "Reference": {
                    "Details": "",
                    "Through": "",
                    "Address": "",
                    "Phone": null
                }
            },
            status: "",
            studentList: [],
            showStatus: false,
            showData: false
        }
    },
    methods: {
        addData() {
            //console.log(this.student);
            this.v$.$validate();
            if(!this.v$.$error) {
                this.status = "Valid Form Data";
                this.showStatus = true;
                this.studentList.push({
                    Name: { 
                        FirstName: this.student.Name.FirstName, 
                        MiddleName: this.student.Name.MiddleName, 
                        LastName: this.student.Name.LastName
                    },
                    dob: this.student.dob,
                    pob: this.student.pob,
                    FLang: this.student.FLang,
                    Address: { 
                        City: this.student.Address.City, 
                        State: this.student.Address.State, 
                        Country: this.student.Address.Country, 
                        Pincode: this.student.Address.Pincode 
                    }, 
                    Father: { 
                        Name: { 
                            FirstName: this.student.Father.Name.FirstName, 
                            MiddleName: this.student.Father.Name.MiddleName, 
                            LastName: this.student.Father.Name.LastName
                        }, 
                        Email: this.student.Father.Email, 
                        EduQua: this.student.Father.EduQua, 
                        Profession: this.student.Father.Profession, 
                        Desg: this.student.Father.Desg, 
                        Phone: this.student.Father.Phone 
                    },
                    Mother: { 
                        Name: { 
                            FirstName: this.student.Mother.Name.FirstName, 
                            MiddleName: this.student.Mother.Name.MiddleName, 
                            LastName: this.student.Mother.Name.LastName
                        }, 
                        Email: this.student.Mother.Email, 
                        EduQua: this.student.Mother.EduQua, 
                        Profession: this.student.Mother.Profession, 
                        Desg: this.student.Mother.Desg, 
                        Phone: this.student.Mother.Phone 
                    },
                    Emergency: { 
                        Name: this.student.Emergency.Name, 
                        Relation: this.student.Emergency.Relation, 
                        Phone: this.student.Emergency.Phone
                    }, 
                    Reference: {
                        Details: this.student.Reference.Details, 
                        Through: this.student.Reference.Through, 
                        Address: this.student.Reference.Address, 
                        Phone: this.student.Reference.Phone 
                    }        
                });       
            }
            else {
                this.status = "Invalid Form Data";
                this.showStatus = true;
            }
        },
        showDataList() {
            this.showData = true;
        }
    },
    validations() {
        return {
            student: {
                Name: {
                    FirstName: { required },
                    MiddleName: { required },
                    LastName: { required } 
                },
                dob: { required },
                Father: {
                    Name: {
                    FirstName: { required },
                    MiddleName: { required },
                    LastName: { required } 
                    },
                    Phone: { required, validNumber: helpers.withMessage('Phone Number should be of 10 digits', validNumber)}
                },
                Mother: {
                    Name: {
                    FirstName: { required },
                    MiddleName: { required },
                    LastName: { required } 
                    },
                    Phone: { required, validNumber: helpers.withMessage('Phone Number should be of 10 digits', validNumber)}
                },
                Emergency: {
                    Name: { required },
                    Phone: { required, validNumber: helpers.withMessage('Phone Number should be of 10 digits', validNumber)}
                },
                Reference: {
                    Phone: { required, validNumber: helpers.withMessage('Phone Number should be of 10 digits', validNumber)} 
                }
            },          
        }
    }
}
</script>
<style scoped></style>