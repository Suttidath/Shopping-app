import React from "react";
import { MyCartContext } from "../management/context";

const HeaderCard = () => {
  const { amount } = MyCartContext();
  return (
    <div>
      <button className="button">
        <span>ตะกร้าสินค้า</span>
        <span className="badge">{amount}</span>
      </button>
    </div>
  );
};

export default HeaderCard;
