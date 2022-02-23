import React, { useEffect, useState } from "react";
import Header from "./Header";
import { data } from "./data";

const CartSection = () => {
  const [products, setProducts] = useState(data);
  const removeProduct = (productId) => {
    const newProducts = products.filter((product) => {
      return product.id !== productId;
    });
    setProducts(newProducts);
  };
  const increaseAmount = (productId) => {
    const newProduct = products.find((product) => {
      return product.id === productId;
    });
    newProduct.amount += 1;
    setProducts([...products]);
    console.log(products);
  };
  const decreaseAmount = (productId) => {
    const newProduct = products.find((product) => {
      return product.id === productId;
    });
    newProduct.amount -= 1;
    if (newProduct.amount <= 0) {
      removeProduct(newProduct.id);
    } else {
      setProducts([...products]);
    }
    console.log(products);
  };
  const removeAll = () => {
    setProducts([]);
  };
  const checkTotalAmount = () => {
    const totalAmount = products.reduce((a, b) => {
      return a + b.amount;
    }, 0);
    console.log(totalAmount);
    return totalAmount;
  };
  const totalPrice = () => {
    const totalPrice = products.reduce((a, b) => {
      return a + b.price;
    }, 0);
    return totalPrice;
  };
  useEffect(() => {
    checkTotalAmount();
  }, []);
  return (
    <>
      <div className="cartSection">
        <Header checkTotalAmount={checkTotalAmount} />
        <div className="mainSection">
          <h1>YOUR BAG</h1>
          {products.map((product) => {
            const { id, title, price, img, amount } = product;
            return (
              <div className="products" key={id}>
                <div className="info">
                  <img src={img} alt={title} />
                  <div className="description">
                    <span>{title}</span>
                    <span>$ {price * amount}</span>
                    <button onClick={() => removeProduct(id)}>remove</button>
                  </div>
                </div>
                <div className="quantity">
                  <span onClick={() => increaseAmount(id)}>
                    <i className="fa-solid fa-angle-up"></i>
                  </span>
                  <span>{amount}</span>
                  <span onClick={() => decreaseAmount(id)}>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </div>
            );
          })}
          <hr />
          <div className="summary">
            <span>Total</span>
            <span>$ {totalPrice()}</span>
          </div>
          <button onClick={removeAll}>Clear Cart</button>
        </div>
      </div>
    </>
  );
};

export default CartSection;
