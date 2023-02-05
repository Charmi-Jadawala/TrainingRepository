import { useState } from "react";

function RectangleArea() {
    const [rLength, setRLength] = useState(0);
    const [rBreadth, setRbreadth] = useState(0);
    const [area, setArea] = useState();

  
    return (
        <div>
            <h1 class="display-5 text-primary text-center">Area of a Rectangle</h1>
            <div class="container mx-auto mt-2">
                <form action="">
                    <label for="length" class="form-label fs-5">Enter Length of the Rectangle: </label>
                    <input type="number" onChange={(e) => setRLength(e.target.value)} name="length" id="length" class="form-control-sm mx-2 text-primary mb-3" /><br />
                    <label for="breadth" class="form-label fs-5">Enter Breadth of the Rectangle:</label>
                    <input type="number" onChange={(e) => setRbreadth(e.target.value)} name="breadth" id="breadth" class="form-control-sm mx-2 text-primary mb-4" /><br />
                    <button type="button" onClick={() => setArea(parseInt(rLength) * parseInt(rBreadth))} class="btn btn-outline-primary ml-0 mx-2">Calculate Area</button>
                    <button type="reset" onClick={() => setArea()} class="btn btn-outline-primary">Clear</button>
                </form>
                <h3 class="display-6 mt-3 mb-3 fs-3">Area of Rectangle: { area }</h3>
            </div> 
        </div>
    );
}
  
export default  RectangleArea;