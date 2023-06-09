/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { convertCurrency } from '../utils//convertCurrency';


const Product = ({ product, onAddToCart }) => {
  const refQuantity = useRef(1);
  const { currency } = useCurrency();

  function handleAdd() {
    const itemQty = refQuantity.current.value;
    if (itemQty < 1) return;

    const addedProduct = {
      ...product,
      quantity: parseInt(itemQty),
      id: Math.random(),
    };
    onAddToCart(addedProduct);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
      <h3>{product.name}</h3>
      <span>{convertCurrency(product.price, currency)}</span>
      <input
        defaultValue={1}
        min={1}
        ref={refQuantity}
        style={{ width: '6rem' }}
        type="number"></input>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default Product;
