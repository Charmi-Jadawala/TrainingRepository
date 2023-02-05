import React, { useState } from 'react'

export default function StudentForm() {

    const [student, setStudent] = useState({
        Name: "",
        Gender: "",
        Hobbies: [],
        City: "",
        State: ""
    });

    const [list, setList] = useState([]);

    let [showData, setShowData] = useState(false);

    const setData = (e) => {
        let key = e.target.name;
        let val = e.target.value;
        if(key === "Hobbies"){
            setStudent({ ...student, [key]: [...student.Hobbies, val] });
        }
        else{
            setStudent({ ...student, [key]: val });
        }    
    }

    const onSubmit = () => {
        setList([...list, student]);
        setShowData(true);
        //console.log(list);
    }

    return (
        <div className="my-4">
            <div className="container w-50 mx-auto bg-light p-3">
                <h1 className="display-6 text-primary text-center mb-4">Student Form</h1>
                <form>
                    <div className="input-group m-2">
                        <span className="input-group-text text-primary">Name:</span>
                        <input type="text" name="Name" value={ student.Name } onChange={(e) => setData(e) } className="form-control" placeholder="Name" />
                    </div>

                    <div className="m-2 ml-3 mt-3 text-left">
                        <label className="form-label text-primary" for="gender">Gender:</label>

                        <input type="radio" name="Gender" value="Male" onChange={(e) => setData(e) } className="ml-2 mr-1" id="male" />
                        <label className="form-label" for="male">Male</label>

                        <input type="radio" name="Gender" value="Female" onChange={(e) => setData(e) } className="ml-2 mr-1" id="female" />
                        <label className="form-label" for="female">Female</label>

                        <input type="radio" name="Gender" value="Other" onChange={(e) => setData(e) } className="ml-2 mr-1" id="other" />
                        <label className="form-label" for="other">Other</label>
                    </div>

                    <div className="m-2 ml-3 text-left">
                        <label className="form-label text-primary" for="hobbies">Hobbies:</label>

                        <input type="checkbox" name="Hobbies" value="Music" onChange={(e) => setData(e) } className="ml-2 mr-1" id="music" />
                        <label for="music">Music</label>
                        <input type="checkbox" name="Hobbies" value="Dance" onChange={(e) => setData(e) } className="ml-2 mr-1" id="dance" />
                        <label for="dance">Dance</label>
                        <input type="checkbox" name="Hobbies" value="Travelling" onChange={(e) => setData(e) } className="ml-2 mr-1" id="travelling" />
                        <label for="travelling">Travelling</label>
                    </div>

                    <div className="input-group m-2">
                        <span className="input-group-text text-primary">City:</span>
                        <input type="text" name="City" value={ student.City } onChange={(e) => setData(e) } className="form-control" placeholder="City" />
                    </div>

                    <div className="input-group m-2">
                        <span className="input-group-text text-primary">State:</span>
                        <input type="text" name="State" value={ student.State } onChange={(e) => setData(e) } className="form-control" placeholder="State" />
                    </div>


                    <div className="m-2 ml-2 mt-3 text-left">
                        <button type="button" onClick={ onSubmit } className="btn btn-primary" >Submit</button>
                        <button type="reset" className="btn btn-primary ml-3">Clear</button>
                    </div>
                </form>  
                <div>
                {showData && 
                (
                    <table className="table my-4 table-striped table-hover text-primary">
                        <caption></caption>
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Hobbies</th>
                                <th>City</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            { list.map((data) => (
                                <tr>
                                <td>{ data.Name }</td>
                                <td>{ data.Gender }</td>
                                <td>{ data.Hobbies.join(",")}</td>
                                <td>{ data.City }</td>
                                <td>{ data.State }</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                )}  
                </div>
            </div>
        </div>
    )
}
