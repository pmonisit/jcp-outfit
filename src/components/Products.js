import React from "react";
import Products from "./pages/Products";

const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {Products.map((product, index) => (
          <li key={index}>
            <Products
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
