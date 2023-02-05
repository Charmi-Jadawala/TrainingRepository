import DisplayComponent from './DisplayComponent';
import './App.css';
import { useState } from 'react';

function App() {
    const [Name, setName] = useState("");
    return (
        <div class="container mx-auto mt-3 text-center">
            <h1 class="display-6 fs-2 m-2">Passing Value from Parent to Child Compenent</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} class="form-control-sm m-3" />
            <DisplayComponent UserName = { Name }></DisplayComponent>
        </div>
    );
}

export default App;
