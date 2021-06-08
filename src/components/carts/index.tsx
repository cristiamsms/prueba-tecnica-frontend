import React from "react";
import "./style.css";
function Carts({ price, list, description, title }:any) {
  return (
    <div className="cart">
      <h3>{title}</h3>
      <h5>{description}</h5>
      <h1>
        ${price} <span>usd</span>
      </h1>
      <div className="cart-body">
        <h5>Tu diagnostico incluye: </h5>
        <ul>{list.map((element:any) => element && <li>✔ {element}</li>)}</ul>
        <button>Quiero empezar </button>
      </div>
    </div>
  );
}
export default Carts;
