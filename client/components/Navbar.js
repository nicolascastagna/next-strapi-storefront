import React, { useState } from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "./Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img className="left-img" src="/images/fr.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>EUR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" href="/products/1">
              Femme
            </Link>
          </div>
          <div className="item">
            <Link className="link" href="/products/2">
              Homme
            </Link>
          </div>
          <div className="item">
            <Link className="link" href="/products/7">
              Enfants
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" href="/">
            My Store
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" href="/">
              Accueil
            </Link>
          </div>
          <div className="item">
            <Link className="link" href="/about">
              A propos
            </Link>
          </div>
          <div className="item">
            <Link className="link" href="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" href="/">
              Magasin
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
