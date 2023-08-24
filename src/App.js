
import './App.css';
import imagePerfume from "./images/image-product-desktop.jpg"
import iconCart from "./images/icon-cart.svg"

function App() {
  return (
        <div className='Supercenter'>
          <div className='cardProduct'>
            <div className='imgContainer'>
              <img src = {imagePerfume} alt ="perfume product"/>
            </div>
           
            <div className='textContainer'>
              <h3 className='NormalFont PerfumeFont'>PERFUME</h3>
              <h2 className='FancyFont'>Gabrielle Essence Eau De Parfum</h2>
              <p className='NormalFont'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
              
              <div className='priceContainer'>
                  <h1 className='FancyFont priceFont1'>$149.99</h1>
                  <p className='NormalFont priceFont2'>$169.99</p>
              </div>

              <div className='cartContainer'>
                <img src={iconCart} alt = "shopping cart"/>
                <p className='cartFont'> Add to cart</p>
              </div>
                
            </div>
          </div>
        </div>
  );
}

export default App;
