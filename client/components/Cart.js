import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  return (
    <div className="cart">
      <h1>Produits dans votre panier</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SOUS-TOTAL</span>
        <span>123€</span>
      </div>
      <button>Voir mon panier</button>
      <span className="reset">Vider le panier</span>
    </div>
  );
};

export default Cart;
