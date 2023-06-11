/* eslint-disable react/prop-types */
import { useCurrency } from '../context/CurrencyContext';
import { convertCurrency } from '../utils//convertCurrency';

const CartItem = ({ cartItem, onDeleteFromCart }) => {
  const { currency } = useCurrency();

  function handleDelete() {
    onDeleteFromCart(cartItem.id);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
      <h3>{cartItem.name}</h3>
      <span>{convertCurrency((cartItem.price * cartItem.quantity).toFixed(2), currency)}</span>
      <span>quantity: {cartItem.quantity}</span>
      <button onClick={handleDelete}>Remove From Cart</button>
    </div>
  );
};

export default CartItem;
