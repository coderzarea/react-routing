import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Features", path: "/features" },
  ]
  return (
    <header className="border-1 max-w-xl mx-auto px-8 py-4 text-xl shadow-[0_500px_150px_rgba(0,0,255,0.4)] flex justify-center items-center mb-10 rounded-lg">
      <nav className="w-full flex justify-center items-center gap-12">
        {navItems.map((item, index) => (
          <NavLink key={index} to={item.path} className={({isActive}) => `${isActive ? "text-red-400" : ""} underline`}>{item.title}</NavLink>
        ))}

        {/* <NavLink to="/" className={({isActive}) => `${isActive ? "text-red-400" : ""}`}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/features">Features</NavLink> */}
      </nav>
    </header>
  );
}

export default Header;
