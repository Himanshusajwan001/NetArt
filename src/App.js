import Products from './components/Products.js'
import './App.css';
import Homepage from './components/Homepage.js'
import Footer from './components/Footer.js';
function App() {
  return (
    <>
    <div className = "main__page"> 
      <Homepage/>
      <Products/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
