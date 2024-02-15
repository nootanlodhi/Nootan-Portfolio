"use client";
import Image from "next/image";
import React from "react";
import LOGO from "../assets/images/nootan-logo.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="navbar-container">
      <Image
        src={LOGO}
        alt="LOGO"
        width={80}
        height={80}
        className="logo-img"
      />

      <div className="nav-text-container">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Home
        </Link>
        <Link
          className={`link ${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          About Me
        </Link>
        <Link
          className={`link ${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          Contact me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
