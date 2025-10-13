import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    { element: "Home", path: "/" },
    { element: "About", path: "/about" },
    { element: "Features", path: "/features" },
  ];

  return (
    <header className="border-1 max-w-xl mx-auto px-8 py-4 text-xl shadow-[0_500px_150px_rgba(0,0,255,0.4)] flex justify-center items-center mb-10 rounded-lg">
      <nav className="w-full flex justify-center items-center gap-12">
        {navItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }) =>
              `${isActive ? "after:absolute" : "after:hidden"} relative pb-2 flex justify-center items-center transition-all duration-300 after:content-[""] after:h-1 after:w-1 after:bg-white after:rounded-full after:bottom-0 `
            }
          >
            {item.element}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
