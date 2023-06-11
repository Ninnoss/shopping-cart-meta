/* eslint-disable react/prop-types */
import Product from './Product';

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <div>
      <h1>Products List</h1>
      {products.map((product) => (
        <Product
          onAddToCart={onAddToCart}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsList;
