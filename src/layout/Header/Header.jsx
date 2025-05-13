import { useState } from "react";
import "./Header.scss";
import { MdClear } from "react-icons/md";
import { BiCart, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";

function Header() {
   const totalCount = useSelector(state => state.cart.count);
  const [isFragmentVisible, setIsFragmentVisible] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const navigate = useNavigate();

  const handleClearClick = () => {
    setIsFragmentVisible(false);
  };

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

   const handleCartClick = () => {
    navigate('/cart');
  }

  return (
    <header>
      {isFragmentVisible && (
        <div className="header-top">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <a href="#">Sign Up Now</a>
          </p>
          <MdClear className="clear-btn" onClick={handleClearClick} />
        </div>
      )}
      <div className="container">
        <div className="navbar-wrapper">
          <div className="burger-icon" onClick={toggleBurger}>
            <FiMenu />
          </div>

          <h3>
            <Link to="/">SHOP.CO</Link>
          </h3>

          <div className={`content-ul ${isBurgerOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/allproducts">On Sale</Link>
              </li>
              <li>
                <Link to="/newproducts">New Arrivals</Link>
              </li>
              <li>
                <Link to="/allproducts">Brands</Link>
              </li>
            </ul>
          </div>

          <div className="search-input desktop-search">
            <BiSearch />
            <input type="text" placeholder="Search for products..." />
          </div>

          <div className="card-and-profile-icons">
            <BiSearch className="mobile-search-icon" />
            <div className="cart-icon-container">
              <BiCart onClick={handleCartClick} className="cart-icon" />
              {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
            </div>
            <CgProfile />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
