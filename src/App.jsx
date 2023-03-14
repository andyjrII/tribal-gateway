import './App.css';
import Form from './components/Form';
import Image from './assets/tribal-ctn.jpg';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="bd-placeholder-img" src={Image} alt='Tribal CTN' width="100%" height="550"/>
          </div>
        </div>
      </div>
    <main className='container'> 
      <Form/>
    </main>
    <Footer/>
  </>
  );
}

export default App;
