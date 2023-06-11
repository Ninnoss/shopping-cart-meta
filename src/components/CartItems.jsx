/* eslint-disable react/prop-types */
import CartItem from './CartItem';
import { convertCurrency } from '../utils//convertCurrency';
import { useCurrency } from '../context/CurrencyContext';

const CartItems = ({ cartItems, onDeleteFromCart }) => {
  const { currency } = useCurrency();

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const currencySymbol = currency === 'USD' ? '$' : currency === 'Euro' ? '€' : currency === 'GBP' ? '£' : null;

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => {
        return (
          <CartItem
            cartItem={item}
            onDeleteFromCart={onDeleteFromCart}
            key={item.id}
          />
        );
      })}
      {cartItems.length > 0 && (
        <div style={{ textAlign: 'left', fontSize: '1.8rem', fontWeight: 900, marginTop: '2rem' }}>
          <span>
            Total Price: {currencySymbol} {convertCurrency(totalPrice.toFixed(2), currency)}
          </span>
        </div>
      )}
    </div>
  );
};

export default CartItems;
