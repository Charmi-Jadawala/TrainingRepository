import './App.css';
import MyComponent from './HelloWorld';

var name = "Charmi Jadawala";

function App() {
  return (
    <div>
        <div className="App">
            <h3>Hello World</h3>

            <header>
                <h2>Greeting of the Day !!!</h2>
                <h1>Welcome { name }</h1>
            </header>

            <form action="">
                <label for="fname">Enter your Name: </label>
                <input type="text" name="fname" id="fname" />
            </form>  
        </div>
        <div className="MyComponent">
            <MyComponent></MyComponent>
        </div>
    </div>
  );
}

export default App;
