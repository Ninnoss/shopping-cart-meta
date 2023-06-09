import { useState } from 'react';

import './App.css';
import ProductsList from './ProductsList';
import data from '../data';

function App() {
  const [productsList, setProductsList] = useState(data);
  // cont[(cart, setCart)] = useState([]);

  return <ProductsList products={productsList} />;
}

export default App;
