"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const navItems = [
    { name: "Users", path: "/users" },
    { name: "Admin", path: "/admin" },
  ];

  const { status, data: session } = useSession();

  const NavItemStyle =
    "text-white hover:text-gray-400 transition-colors duration-150 ease-in-out";

  return (
    <nav className="bg-gray-800 p-4 flex">
      <a href="/" className={`${NavItemStyle} mr-16`}>
        Project Tracker
      </a>
      <ul className="flex list-none m-0 p-0">
        {navItems.map(({ name, path }, index) => (
          <li key={index} className="mr-4">
            <a href={path} className={NavItemStyle}>
              {name}
            </a>
          </li>
        ))}
      </ul>
      {status === "loading" && <div className={NavItemStyle}>Loading...</div>}
      {status === "authenticated" && (
        <div className={`${NavItemStyle} cursor-pointer`}>
          {session.user!.name}
          <Link href="/api/auth/signout" className={`${NavItemStyle} ml-4`}>
            Signout
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <a href="/api/auth/signin" className={NavItemStyle}>
          Signin
        </a>
      )}
    </nav>
  );
};

export default NavBar;
