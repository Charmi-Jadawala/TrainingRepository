import { useState } from "react";

function EmployeeForm() {
    const [empData, setEmpData] = useState({
        id: "",
        Name: "",
        Address: "",
        Gender: "",
        Doj: "",
        Hobbies: ""
    });
    const [employeeArray, setEmployeeArray] = useState([]);
    let [showData, setShowData] = useState(false);

    const [showFilteredData, setShowFilteredData] = useState(false);

    function getData(e) {
        const name = e.target.name;
        const value = e.target.value;
        setEmpData({...empData, [name]: value});
    }

    function addData() {
        setShowData(true);
        setEmployeeArray([...employeeArray, empData]);
    }

    var filteredArray = employeeArray.filter((value) => {
        return new Date(value.Doj).getMonth() == new Date().getMonth();
    });
    function filterData() {
        setShowFilteredData(true);
    }
 
    employeeArray.sort((a, b) => 
        a.Name.localeCompare(b.Name)
    );

    return (
        <div>
            <h1 className="display-5 text-primary text-center m-1 mb-2">Employee Form</h1>
            <div className="container mx-auto my-3">

                <form action="">
                    <label for="id" className="form-label fs-5">Employee ID:</label>
                    <input type="text" name="id" value={empData.id} onChange={getData} id="id" className="form-control-sm mx-2 text-primary mb-3" /><br />

                    <label for="Name" className="form-label fs-5">Name:</label>
                    <input type="text" name="Name" value={empData.Name} onChange={getData} id="Name" className="form-control-sm mx-2 text-primary mb-3" /><br />

                    <label for="Address" className="form-label fs-5">Address:</label>
                    <input type="text" name="Address" value={empData.Address} onChange={getData} id="Address" className="form-control-sm mx-2 text-primary mb-3" /><br />

                    <label for="Gender" className="form-label fs-5">Gender:</label>
                    <input type="radio" name="Gender" value="Male" onChange={getData} id="Male" className="m-1 ms-2" />
                    <label for="Male" className="form-label fs-5">Male</label>
                    <input type="radio" name="Gender" value="Female" onChange={getData} id="Female" className="m-1 ms-2" />
                    <label for="Female" className="form-label fs-5">Female</label>
                    <input type="radio" name="Gender" value="Other" onChange={getData} id="Other" className="m-1 ms-2" />
                    <label for="Other" className="form-label fs-5">Other</label><br />

                    <label for="Doj" className="form-label fs-5">Date of Joining:</label>
                    <input type="date" name="Doj" value={empData.Doj} onChange={getData} id="Doj" className="form-control-sm mx-2 text-primary mb-3" /><br />

                    <label for="Hobbies" className="form-label fs-5">Hobbies:</label>
                    <input type="text" name="Hobbies" value={empData.Hobbies} onChange={getData} id="Hobbies" className="form-control-sm mx-2 text-primary mb-4" /><br />

                    <button type="button" onClick={ addData } className="btn btn-outline-primary mr-2">Store Data</button>
                    <button type="button" onClick={ filterData } className="btn btn-outline-primary mx-2">Filter Data</button>
                </form>
                                   
                <div>
                    {showData && 
                    (
                        <table className="table table-striped my-4">
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
                                { employeeArray.map((emp) => ( 
                                    <tr>
                                        <td>{ emp.id }</td>
                                        <td>{ emp.Name }</td>
                                        <td>{ emp.Address }</td>
                                        <td>{ emp.Gender }</td>
                                        <td>{ emp.Doj }</td>
                                        <td>{ emp.Hobbies }</td>
                                    </tr>
                                )) }
                            </tbody>
                        </table> 
                    )}   
                </div> 

                {showFilteredData && 
                (
                    <h3 className="display-6 fs-3 mb-2">List of Employees who have joined in the current month: 
                        { filteredArray.map(( filteredEmp ) => ( 
                            <p className="text-primary my-1 fs-4">{ filteredEmp.Name }</p>
                        )) }
                    </h3>  
                )}
            </div>    
        </div>
    );
}

export default EmployeeForm;