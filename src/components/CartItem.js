// แสดงรายการสินค้าแต่ละรายการ

import React from "react";
import Plus from "../image/plus.svg";
import Minus from "../image/minus.svg";
import Delete from "../image/delete-icn.svg";
import { MyCartContext } from "../management/context";

const CartItem = ({ id, name, image_url, price, quantity }) => {
  const { removeItem, toggleQuantity, formatNumber } = MyCartContext();
  return (
    <div className="item">
      <div className="product_image">
        <img src={image_url} alt={name} />
      </div>
      <div className="description">
        <span>{name}</span>
        <span>ราคา {formatNumber(price)} บาท</span>
      </div>
      <div className="quantity">
        <button
          className="plus-btn"
          onClick={() => toggleQuantity(id, "increment")}
        >
          <img src={Plus} alt="" />
        </button>
        <input type="text" value={quantity} disabled />
        <button
          className="minus-btn"
          onClick={() => toggleQuantity(id, "decrement")}
        >
          <img src={Minus} alt="" />
        </button>
      </div>
      <div className="total-price">{formatNumber(quantity * price)}</div>
      <div className="remove" onClick={() => removeItem(id)}>
        <img src={Delete} alt="" />
      </div>
    </div>
  );
};

export default CartItem;
