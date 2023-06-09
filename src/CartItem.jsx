/* eslint-disable react/prop-types */

const CartItem = ({ cartItem, onDeleteFromCart }) => {
  function handleDelete() {
    onDeleteFromCart(cartItem.id);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
      <h3>{cartItem.name}</h3>
      <span>{(cartItem.price * cartItem.quantity).toFixed(2)} USD</span>
      <span>quantity: {cartItem.quantity}</span>
      <button onClick={handleDelete}>Remove From Cart</button>
    </div>
  );
};

export default CartItem;
