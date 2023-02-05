import { useState } from "react";

function UserLogin() {
    const [userName, setuserName] = useState("");
    const [pwd, setpwd] = useState("");
    const [status, setStatus] = useState("");

    function userStatus(){
        if(userName == "admin" && pwd == "admin")
        {
            setStatus("Valid User");
        }
        else{
            setStatus("Invalid User");
        }
    }

    return (
        <div>   
            <h1 class="display-5 text-primary text-center">Login with Validation</h1>
            <div class="container mx-auto mt-2">
                <form action="">
                    <label for="username" class="form-label fs-5">Username: </label>
                    <input type="text" onChange={(e) => setuserName(e.target.value)} name="username" id="username" class="form-control-sm mx-2 text-primary mb-3" /><br />
                    <label for="password" class="form-label fs-5">Password:</label>
                    <input type="password" onChange={(e) => setpwd(e.target.value)} name="password" id="password" class="form-control-sm mx-2 text-primary mb-4" /><br />
                    <button type="button" onClick={userStatus} class="btn btn-outline-primary ml-0 mx-2">Login</button>
                    <button type="reset" onClick={() => setStatus()} class="btn btn-outline-primary">Clear</button>
                </form>
                <h3 class="display-6 mt-3 mb-3 fs-3">Status: { status }</h3>
            </div>
    </div>
    );
}
  
export default UserLogin;