"use client";

import { Menu } from "lucide-react";

const Navbar = () => {
  return <div className="flex justify-between items-center w-full mb-7">
    {/* left side */}
    <div className="flex justify-between items-center gap-5">
      <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={() => {}}>
        <Menu className="w-4 h-4" />
      </button>
    </div>
    <div className="relative">
      <input type="search" placeholder="Search among groups & proucts" />
    </div>
    Navbar
    </div>;
};

export default Navbar;
