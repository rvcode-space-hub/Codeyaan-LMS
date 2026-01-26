"use client";
import React, { useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import SignForm from "./SignForm";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("login"); // "login" or "signup"

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openForm = (mode) => {
    setFormMode(mode);
    setShowForm(true);
    setIsMenuOpen(false);
  };
  const closeForm = () => setShowForm(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-2xl py-5 px-6 flex items-center justify-around">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 p-2 rounded-lg">
            <Code2 className="text-white w-8 h-8 md:w-10 md:h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-500 via-blue-600 to-purple-700 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            Codeyaan
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-14 ml-auto text-gray-700 font-medium sm:text-lg md:text-xl">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 hover:scale-105 transition-transform duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-7 ml-7 sm:text-lg md:text-xl font-medium">
          <button
            onClick={() => openForm("login")}
            className="shadow-lg text-gray-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
          <button
            onClick={() => openForm("signup")}
            className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 mt-4 pb-4 left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden pt-4 z-50">
          <div className="flex flex-col space-y-4 p-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100 items-center">
              <button
                onClick={() => openForm("login")}
                className="shadow-md text-gray-700 px-4 py-2 text-sm rounded-lg hover:scale-105 transition-transform duration-300 w-32"
              >
                Login
              </button>
              <button
                onClick={() => openForm("signup")}
                className="shadow-md bg-linear-to-r from-sky-500 to-purple-800 text-white px-3 py-1.5 text-sm rounded-lg hover:scale-105 transition-transform duration-300 w-32"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-4 sm:px-6">
          <div className="relative w-full max-w-sm sm:max-w-sm md:max-w-3xl bg-white p-6 sm:p-4 rounded-2xl shadow-2xl overflow-y-auto max-h-[80vh]">
            {/* Close button */}
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Form Component */}
            <SignForm initialMode={formMode} />
          </div>
        </div>
      )}
    </>
  );
}
