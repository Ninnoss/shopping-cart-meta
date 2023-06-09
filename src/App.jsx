import { useState } from 'react';

import './App.css';
import ProductsList from './ProductsList';
import data from '../data';
import CartItems from './CartItems';

function App() {
  const [cart, setCart] = useState([]);

  function onAddToCart(product) {
    const existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }
  }

  function onDeleteFromCart(ID) {
    const filtered = cart.filter((item) => item.id !== ID);
    setCart(filtered);
  }

  return (
    <>
      <ProductsList
        products={data}
        onAddToCart={onAddToCart}
      />
      <CartItems
        cartItems={cart}
        onDeleteFromCart={onDeleteFromCart}
      />
    </>
  );
}

export default App;
