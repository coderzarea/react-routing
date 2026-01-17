import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Profile", path: "/profile" }
  ];
  return (
    <header className="max-w-md w-fit h-12 rounded-full border border-neutral-500 bg-neutral-500/50 backdrop-blur-sm mx-auto fixed">
      <nav className="w-full h-full flex justify-center items-center gap-4 px-3">
        {navItems.map((item) => (
          <NavLink to={item.path} key={item.title} className={"hover:bg-black px-3 py-1 rounded-full"}>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
