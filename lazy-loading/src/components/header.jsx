import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", route: "/" },
  { name: "Profile", route: "/profile" }
];

function Header() {
  return (
    <header className="fixed top-4 mx-auto h-14 rounded-full bg-neutral-700/50 border border-neutral-600 backdrop-blur-sm flex items-center justify-center">
      <nav className="w-full h-full flex items-center justify-center px-6 gap-6">
        {navItems.map((item) => (
          <NavLink to={item.route} key={item.route} className="text-sm hover:text-blue-400 transition-colors duration-300">
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
