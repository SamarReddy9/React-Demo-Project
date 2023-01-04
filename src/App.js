import React, { useState } from 'react';
import './style.css';
import AllProducts from './AllProducts';
import NavList from './NavList';
import { Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import AddProducts from './AddProducts';

export default function App() {
  //pass data 
  const [cart, setCart] = useState([]);

  const Handilar = (ele) => {
    setCart([...cart, { ...ele, Quantity: 1 }]);
  };

  //count
  const ChangeHandilar = (ele, incdec) => {
    const Arr = cart;
    const ind = cart.indexOf(ele);

    Arr[ind].Quantity += incdec;
    setCart([...Arr]);

    if (Arr[ind].Quantity === 0) Arr[ind].Quantity = 1;
  };

  return (
    <div>
     
      <NavList />
      <Routes>
        <Route path=":id" element={<AllProducts Handilar={Handilar} />} />
        <Route
          path="/Cart"
          element={<Cart data={cart} Change={ChangeHandilar} />}
        />

        <Route path="/AddProducts" element={<AddProducts />} />
      </Routes>
    </div>
  );
}
