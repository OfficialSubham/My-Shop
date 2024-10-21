import React from "react";

const Navbar = () => {
  const handleMenuButton = () => {
    document.documentElement.toggleAttribute("menu-open");
  };
  return (
    <nav className="w-full h-16 flex items-center p-2 justify-between px-3">
      <div className="w-auto h-full flex items-center">
        <div className={`hidden sm:flex items-center space-x-4`}>
          <div>Cart</div>
          <div>Liked</div>
        </div>

        <div className="sm:hidden flex items-center justify-center">
          <div className="three-dot" onClick={handleMenuButton}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="w-auto h-full flex items-center text-xl font-black sm:text-3xl border rounded-lg px-3 border-navC">
        My-Shop
      </div>

      <div className="w-20 sm:w-32 md:w-44 lg:w-52 xl:w-auto  h-full flex items-center px-1 border border-navC rounded-lg">
        <input
          type="text"
          className="h-4/5 w-full rounded-l-lg outline-none border-navC border border-r-0 text-navC pl-2"
        />
        <button className="w-10 bg-navC border text-white border-l-0 border-navC h-4/5 rounded-r-lg">
          S
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
