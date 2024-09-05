// components/MegaMenu.tsx
import React from 'react';
import './MegaMenu.css'; // Import the CSS file

const MegaMenu: React.FC = () => {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <div className="dropdown">
        <button className="dropbtn">Electronics
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <div className="row">
            <div className="column">
              <h3>Laptops</h3>
              <a href="#">Tablets</a>
              <a href="#"> Mobile Phones</a>
            </div>
            <div className="column">
              <h3>Macbooks</h3>
              <a href="#">Macbook pro</a>
              <a href="#">Macbook x</a>
              <a href="#">Macbook y</a>
            </div>
            <div className="column">
              <h3>Samsung</h3>
              <a href="#">Note</a>
              <a href="#">Ultra</a>
              <a href="#">Max</a>
            </div>
            <div className="column">
              <h3>Samsung</h3>
              <a href="#">Note</a>
              <a href="#">Ultra</a>
              <a href="#">Max</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
