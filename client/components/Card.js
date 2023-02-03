import Link from "next/link";
import React from "react";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const Card = ({ item }) => {
  return (
    <Link className="link" href="/product/[id]" as={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>Nouvelle saison</span>}
          <img
            src={
              publicRuntimeConfig.UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              publicRuntimeConfig.UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item.attributes.title}</h2>
        <div className="prices">
          <h3>{item?.oldPrice || item?.attributes.price + 20}€</h3>
          <h3>{item?.attributes.price}€</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
