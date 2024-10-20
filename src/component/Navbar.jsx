import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const handleMenuButton = () => {
    document.documentElement.toggleAttribute("menu-open")
  }
  return (
    <nav className="w-full h-16 bg-navC flex items-center p-2 text-white justify-between px-3">
      <div className="w-auto h-full flex items-center">
        <div className={`hidden sm:flex items-center space-x-4`}>
          <div>Cart</div>
          <div>Liked</div>
        </div>

        <div className="sm:hidden">
          <div className="three-dot" onClick={handleMenuButton}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="w-auto h-full flex items-center text-xl font-black text-white sm:text-3xl">
        My-Shop
      </div>

      <div className="w-20 sm:w-32 md:w-44 lg:w-52 xl:w-auto  h-full flex items-center">
        <input
          type="text"
          className="h-4/5 w-full rounded-l-lg outline-none text-navC pl-2"
        />
        <button className="w-10 bg-7 h-4/5 rounded-r-lg">S</button>
      </div>
    </nav>
  );
};

export default Navbar;
