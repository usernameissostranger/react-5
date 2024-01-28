import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Details from './pages/Details/Details';
import Header from './components/Header/Header';
import './style.css';
import './components/Header/header.css';
import { useState } from 'react';
import Category from './pages/Category/Category';


function App() {
    const [cartData, setCartData] = useState ([]);
    const [sign, setSign] = useState('');
    const addCart = (product) => {
      const idx = cartData.findIndex(item => {
        return item.id === product.id
      });
      if(idx < 0) {
        setCartData([
          {
            ...product,
            count: 1
          },
          ...cartData
        ])
      }else {
        cartData[idx].count++;
        setCartData([...cartData]);
      }
    }
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home addCart={addCart} />} />
      <Route path='/cart' element={<Cart 
        cartData={cartData}
        setCartData={setCartData}
        addCart={addCart}
      />} />
      <Route path='/product/:id' element={<Details addCart={addCart} />} />
      <Route path='/category/:category' element={<Category  addCart={addCart} />}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
