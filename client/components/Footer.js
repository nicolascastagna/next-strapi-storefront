import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Catégories</h1>
          <span>Femme</span>
          <span>Homme</span>
          <span>Chaussures</span>
          <span>Accessoires</span>
          <span>Nouveaux arrivages</span>
        </div>
        <div className="item">
          <h1>Liens</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Magasins</span>
          <span>Comparer</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>A propos</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">My Store</span>
          <span className="copyright">
            © Copyright 2023. Tous droits réservés
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
