'use client';

import React from "react";
import navbarLinks from "@/app/data/navbar";

export default function Navbar() {
    return (
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center bg-[#0F172A]" aria-label="Main Navigation">
    <a href="#" className="text-xl font-bold text-[#6552D0]">🍊</a>

    <button aria-label="Open menu" type="button" id="menu-button" className="md:hidden text-white text-2xl focus:outline-none">
      <i className="fa-solid fa-bars"></i>
    </button>

    <ul id="navLinks" className="flex flex-col md:flex-row gap-6 justify-center transition-all duration-500 overflow-hidden max-h-0 md:max-h-full md:flex text-white">
    {navbarLinks.map((link, index) => (
        <li key={index}>
            <a href={link.href} className="hover:text-[#6552D0] transition">{link.label}</a>
        </li>
    ))}
    </ul>
  </nav>
    );
}




