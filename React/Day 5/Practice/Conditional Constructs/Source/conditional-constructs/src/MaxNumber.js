import { useState } from "react";

function MaxNumber() {
    const [Num1, setNum1] = useState(0);
    const [Num2, setNum2] = useState(0);

    return (
        <div>
            <h1 class="display-5 text-primary text-center m-1 mb-2">Maximum of two numbers</h1>
            <div class="container mx-auto">
                <form action="">
                    <label for="num1" class="form-label fs-5">Enter first No.:</label>
                    <input type="number" onChange={(e) => setNum1(e.target.value)} name="num1" id="num1" class="form-control-sm mx-2 text-primary mb-3" /><br />
                    <label for="num2" class="form-label fs-5">Enter second No.:</label>
                    <input type="number" onChange={(e) => setNum2(e.target.value)}  name="num2" id="num1" class="form-control-sm mx-2 text-primary mb-3" /><br />
                </form>
                <h3 class="display-6 mt-1 fs-3">Maximum of { Num1 } and { Num2 }: {Num1 > Num2 ? <p>{ Num1 }</p> : <p>{ Num2 }</p>}
                </h3>
            </div> 
        </div>
    );
}

export default MaxNumber;