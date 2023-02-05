import React from 'react'

export default function EmployeeForm() {
    return (
        <div class="content">
            <header>
                <h1>Assignment-1</h1>
                <h2>EMPLOYEE DETAILS FORM</h2>
            </header> 

            <form id="empdetails">
                <fieldset>
                    <legend>Basic Employee Details:</legend>
                    <br />
                    <label for="Fname">First Name:</label>
                    <input type="text" id="Fname" required placeholder="First name" title="Enter your first name here" />
                    <br />
                    <br />
                    <label for="Lname">Last Name:</label>
                    <input type="text" id="Lname" required placeholder="Last name" title="Enter your last name here" />
                    <br />
                    <br />
                    <label for="Age">Age:</label>
                    <input type="number" id="Age" required placeholder="Age" />
                    <br />
                    <br />
                    <label for="Gender">Gender:</label>
                    <input type="radio" id="Male" name="gender"/>
                    <label for="Male">Male</label>
                    <input type="radio" id="Female" name="gender" checked />
                    <label for="Female">Female</label>
                    <br />
                    <br />
                    <label for="Designation">Designation:</label>
                    <input type="text" id="Designation" list="designationlist" required placeholder="Designation" />
                    <datalist id="designationlist">
                        <option value=".NET Developer"></option>
                        <option value="PHP Developer"></option>
                        <option value="Android Developer"></option>
                        <option value="QA Tester"></option>
                        <option value="Node/React Developer"></option>
                        <option value="Other"></option>
                    </datalist>
                    <br />
                    <br />
                    <label for="DOJ">Joining Date:</label>
                    <input type="date" id="DOJ" required placeholder="Date of Joining" />
                    <br />
                    <br />
                    <label for="Email">Email ID:</label>
                    <input type="email" id="Email" required placeholder="email id" />
                    <br />
                    <br />
                    <label for="ContactNo">Contact No.:</label>
                    <input type="tel" id="ContactNo" required pattern="[0-9]{10}" placeholder="Contact Number" />
                    <br />
                    <br />
                    <label for="Salary">Salary:</label>
                    <input type="number" id="Salary" required placeholder="Enter your salary" />
                    <br />
                    <br />
                    <label for="Location">Location:</label>
                    <select id="Location" required>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Surat">Surat</option>
                        <option value="Rajkot">Rajkot</option>
                    </select>
                    <br />
                    <br />
                    <input type="reset" value="RESET" />
                    <input type="submit" value="SUBMIT" />
                </fieldset>
            </form>  
        </div> 
    )
}
