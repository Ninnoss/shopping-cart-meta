/* eslint-disable react/prop-types */
import CartItem from './CartItem';

const CartItems = ({ cartItems, onDeleteFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
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
          <span>Total Price: $ {totalPrice.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default CartItems;
