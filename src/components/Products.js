import React from "react";
import Products from "./Products";

const Product = () => {
  return (
    <div>
      <ul className="products-container">
        {Products.map((product, index) => (
          <li key={index}>
            <Products
              _id={product._id}
              productName={product.productName}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
