/* eslint-disable react/prop-types */
import Product from './Product';

const ProductsList = ({ products }) => {
  return (
    <div>
      <h1>Products List</h1>
      {products.map((product) => (
        <Product 
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsList;
