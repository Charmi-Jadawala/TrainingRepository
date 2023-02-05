import { useState } from 'react';
import './App.css';
import ProfileComponent from './ProfileComponent';

function App() {
    const [message, setMessage] = useState("");
    function Display(data) {
        setMessage(data);
    }
    return (
        <div>
            <ProfileComponent getValue = { Display }></ProfileComponent>
            <h1 className="my-3 text-center display-5 text-success">Welcome { message }</h1>
        </div>
    );
}

export default App;
