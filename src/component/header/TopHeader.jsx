import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'

function TopHeader() {
  return (
    <div className="top_header">
      <div className="container">
       <Link to="/" className="logo"><img src={Logo} alt="logo" /></Link>

        <form action="" className="search_box">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search For Products"
          />
          <button type="submit">
            <IoMdSearch />
          </button>
        </form>

        <div className="header_icons">
          <div className="icon">
            <FaRegHeart />
            <span className="count">0</span>
          </div>
          <div className="icon">
            <TiShoppingCart />
            <span className="count">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
