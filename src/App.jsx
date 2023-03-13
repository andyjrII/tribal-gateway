import './App.css';
import Form from './components/Form';
import Image from './assets/nav-img.png';

function App() {
  return (
    <div className="App">
      <>
        <nav className="container">
          <div className="row">
            <div className="row g-3 shadow p-3 mb-5 bg-body-tertiary rounded bg-dark">
              <div className="col-md-3">
                <img src={Image} alt="Logo" width="150" height="120"/>
              </div>
              <div className='col-md-9 title'>
                <h1>TRIBAL GATEWAY</h1>
                <h3>AIRPORT CONCEIGE SERVICES</h3>
              </div>
            </div>
          </div>
         </nav>
         <div>
          <div className='center-div shadow p-3 mb-5 bg-body-tertiary rounded'>
            <h3>Hello from Nigeria!</h3>
            <p>So excited that you will be visiting Nigeria soon! Our goal is to make your journey as smooth as 
                possible.
            </p>
          </div>
        </div>
        <Form/>
      </>
    </div>
  );
}

export default App;
