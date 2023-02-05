import React, { useState } from 'react';

export default function ControlledForm() {

    const [person, setPerson] = useState({
        Name: "",
        Address: "",
        Country: "",
    });

    let [showData, setShowData] = useState(false);

    const setData = (e) => {
        let key = e.target.name;
        let val = e.target.value;
        setPerson({ ...person, [key]: val });   
    }

    const onSubmit = () => {
        setShowData(true);
        //console.log(person);
    }

    return (
        <div className="my-4">
            <div className="container w-50 mx-auto bg-light p-3">
                <h1 className="display-6 text-primary text-center mb-4">Basic Form</h1>
                <form>
                    <div className="input-group m-2">
                        <span className="input-group-text text-primary">Name:</span>
                        <input type="text" name="Name" value={ person.Name } onChange={(e) => setData(e) } className="form-control" placeholder="Name" />
                    </div>

                    <div className="input-group m-2">
                        <span className="input-group-text text-primary">Address:</span>
                        <textarea name="Address" value={ person.Address } onChange={(e) => setData(e) } className="form-control" placeholder="Address"></textarea>
                    </div>

                    <div className="input-group m-2">
                        <span className="input-group-text text-primary" for="Country">Country:</span>

                        <select name="Country" value={ person.Country } onChange={(e) => setData(e) } className="form-select">
                            <option selected>Select your Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="France">France</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>

                    <div className="m-2 ml-3 mt-3 text-center">
                        <button type="button" onClick={ onSubmit } className="btn btn-primary" >Submit</button>
                        <button type="reset" className="btn btn-primary ml-3">Clear</button>
                    </div>
                </form>  
                { showData && (
                    <div className='text-center mt-3'>
                        <p className='display-6 fs-4 text-secondary'>{ JSON.stringify(person) }</p>
                    </div>
                    )
                }
            </div>
        </div>
    )
}
