import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-gray-200">
        <div className="container flex items-center justify-between py-4  max-w-7xl mx-auto">
          <h1 className="logo">ShopEasy</h1>
          <ul className="nav-links flex items-center gap-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
