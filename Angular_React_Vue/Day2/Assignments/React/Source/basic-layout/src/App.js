import './App.css';
import HeaderComponent from './Header';
import HomeComponent from './Home';
import AboutComponent from './About';
import FooterComponent from './Footer';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <HomeComponent></HomeComponent>
      <AboutComponent></AboutComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
