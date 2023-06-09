/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
      <h3>{product.name}</h3>
      <span>{product.price} USD</span>
      <input style ={{width: '6rem'}} type="number"></input>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
