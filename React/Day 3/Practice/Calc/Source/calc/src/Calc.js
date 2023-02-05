import { useState } from "react";

function MyCalc() {
    const [Num1, setNum1] = useState(0);
    const [Num2, setNum2] = useState(0);
    const [result, setResult] = useState();

    return (
        <div>
            <h1 class="display-4 text-primary text-center">Calc</h1>
            <div class="container mx-auto">
                <form action="">
                    <label for="num1" class="form-label fs-5">Enter first No.:</label>
                    <input type="number" onChange={(e) => setNum1(e.target.value)} name="num1" id="num1" class="form-control-sm mx-2 text-primary mb-3" /><br />
                    <label for="num2" class="form-label fs-5">Enter second No.:</label>
                    <input type="number" onChange={(e) => setNum2(e.target.value)} name="num2" id="num1" class="form-control-sm mx-2 text-primary mb-4" /><br />
                    <button type="button" onClick={() => setResult(parseInt(Num1) + parseInt(Num2))} class="btn btn-outline-primary ml-0 mx-2">Addition</button>
                    <button type="button" onClick={() => setResult(parseInt(Num1) - parseInt(Num2))} class="btn btn-outline-primary mx-2">Subtraction</button>
                    <button type="button" onClick={() => setResult(parseInt(Num1) * parseInt(Num2))} class="btn btn-outline-primary mx-2">Multiplication</button>
                    <button type="button" onClick={() => setResult(parseInt(Num1) / parseInt(Num2))} class="btn btn-outline-primary mx-2">Division</button>
                    <button type="reset" onClick={() => setResult()} class="btn btn-outline-primary mx-2">Clear</button>
                </form>
                <h3 class="display-6 mt-4 mb-3">Result: {result} </h3> 
            </div>
        </div>
    );
}
  
export default MyCalc;