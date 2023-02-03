import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();
  const { slug } = router.query;

  const { data, loading, error } = useFetch(`/products/${slug}?populate=*`);

  return (
    <>
      {loading ? (
        <span
          style={{ display: "flex", justifyContent: "center", margin: "30px" }}
        >
          Chargement...
        </span>
      ) : (
        <>
          <div className="product">
            <div className="left">
              <div className="images">
                <img
                  src={
                    publicRuntimeConfig.UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={
                    publicRuntimeConfig.UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>
              <div className="mainImg">
                <img
                  src={
                    publicRuntimeConfig.UPLOAD_URL +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">${data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>
              <div className="quantity">
                <button
                  onClick={(e) =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button
                  onClick={(e) =>
                    setQuantity((prev) => (prev === 99 ? 1 : prev + 1))
                  }
                >
                  +
                </button>
              </div>
              <button className="add">
                <AddShoppingCartIcon /> Ajouter au panier
              </button>
              <div className="links">
                <div className="item">
                  <FavoriteBorderIcon /> Ajouter à la liste d'envies
                </div>
                <div className="item">
                  <BalanceIcon /> Ajouter et comparé
                </div>
              </div>
              <div className="info">
                <span>Vendeur: Polo</span>
                <span>Produit Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>
              <hr />
              <div className="details">
                <span>Description</span>
                <hr />
                <span>Informations supplémentaires</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
