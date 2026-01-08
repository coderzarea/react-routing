import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Profile", path: "/profile" },
  ];
  return (
    <header className="w-full fixed top-0 h-16 border-b border-gray-500">
      <nav className="w-full h-full flex justify-center items-center gap-28">
        {navItems.map((item, idx) => (
          <NavLink
            to={item.path}
            key={idx}
            className={({ isActive }) =>
              `${isActive ? "text-blue-400" : "text-white"} text-xl`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
