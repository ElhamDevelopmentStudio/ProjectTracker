import React from "react";

// NavBar component with TailwindCSS styling
const NavBar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex list-none m-0 p-0">
        {navItems.map(({ name, path }, index) => (
          <li key={index} className="mr-4">
            <a
              href={path}
              className="text-white hover:text-gray-400 transition-colors duration-150 ease-in-out"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
