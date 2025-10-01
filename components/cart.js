import React, { useState } from "react";

function Cart() {
  const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bài 4: Giỏ hàng</h2>
      <p>
        Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}đ
      </p>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          <p>{p.name}</p>
          <p>Giá: {p.price}đ</p>
          <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
