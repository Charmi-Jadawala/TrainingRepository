import { useState } from "react";

function SignUp() {
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [PanNumber, setPanNumber] = useState("");

    return (
        <div>
            <h1 class="display-5 text-primary text-center">Sign Up</h1>
            <div class="container mx-auto mt-2 mb-5 pb-5">
                <form action="">
                    <label for="Name" class="form-label fs-5">Enter your Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} name="Name" id="Name" class="form-control-sm mx-2 text-primary mb-3" /><br />
                    <label for="Address" class="form-label fs-5">Enter your Address:</label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)} name="Address" id="Address" class="form-control-sm mx-2 text-primary mb-3" /><br />
                    <label for="PanNumber" class="form-label fs-5">Enter your PAN Number:</label>
                    <input type="text" onChange={(e) => setPanNumber(e.target.value)} name="PanNumber" id="PanNumber" class="form-control-sm mx-2 text-primary mb-4" /><br />
                    <button type="submit" class="btn btn-outline-primary ml-0 mx-2">Sign Up</button>
                </form>
                <p class="display-6 mt-3 mb-3 fs-3">Name: { Name } &nbsp;&nbsp;&nbsp;&nbsp; 
                    Address: { Address } &nbsp;&nbsp;&nbsp;&nbsp; 
                    PAN Number: { PanNumber }
                </p>
            </div>
    </div>
    );
}
  
export default SignUp;