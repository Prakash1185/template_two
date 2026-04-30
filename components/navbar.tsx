"use client";

import { useState } from "react";
import Image from "next/image";
import { PrimaryButton, GhostButton } from "./buttons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50  backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LEFT SIDE (Logo + Links) */}
          <div className="flex items-center gap-10">
            {/* LOGO */}
            <div className="flex items-center gap-2 font-semibold text-lg sm:text-xl ">
              <Image
                src="/logo.png"
                alt="Finteck Logo"
                width={35}
                height={35}
                className="rounded-md"
              />
              Finteck
            </div>

            {/* LINKS */}
            <nav className="hidden md:flex items-center gap-8 text-sm sm:text-base font-semibold ">
              <a href="#" className="hover:text-black transition">
                Products
              </a>
              <a href="#" className="hover:text-black transition">
                Customers
              </a>
              <a href="#" className="hover:text-black transition">
                Pricing
              </a>
              <a href="#" className="hover:text-black transition">
                Learn
              </a>
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-3">
            <GhostButton>Login</GhostButton>
            <PrimaryButton>Sign Up</PrimaryButton>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-4 h-[2px] bg-black"></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col px-6 py-6">
          {/* TOP */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Image
                src="/logo.png"
                alt="logo"
                width={38}
                height={38}
                className="rounded-md"
              />
              Finteck
            </div>

            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-6 text-lg">
            <a href="#">Products</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Learn</a>
          </div>

          {/* BUTTONS */}
          <div className="mt-auto flex flex-col gap-3">
            <GhostButton>Login</GhostButton>
            <PrimaryButton>Sign Up</PrimaryButton>
          </div>
        </div>
      )}
    </>
  );
}
