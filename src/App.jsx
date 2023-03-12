import './App.css';
import Form from './components/Form';
import Image from './assets/nav-img.png';

function App() {
  return (
    <div className="App">
      <>
        <nav className="Nav-bar">
          <ul className='Nav-image'>
            <img src={Image} alt="Logo" width="230" height="200"/>
            <div className='Right-nav'>
              <h1>TRIBAL GATEWAY</h1>
              <h3>AIRPORT CONCEIGE SERVICES</h3>
            </div>
          </ul>
         </nav>
         <header>
          <h1>Hello from Nigeria!</h1>
          <h2>So excited that you will be visiting Nigeria soon! Our goal is to make your journey as smooth as 
              possible.
          </h2>
          <h3>In order to process your application to receive your Fast Track Visa On Arrival (VOA), we need 
            the following information.
          </h3>
        </header>
        <Form/>
      </>
    </div>
  );
}

export default App;
