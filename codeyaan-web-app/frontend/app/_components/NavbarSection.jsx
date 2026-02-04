"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import {Code2, X, Menu} from "lucide-react";
import {motion} from "motion/react";
import AuthForm from "./AuthForm";

export default function NavbarSection() {
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    {name: "Home", href: "/"},
    {name: "Courses", href: "/courses"},
    {name: "Blog", href: "/blog"},
    {name: "About", href: "/about"},
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openForm = (mode) => {
    setFormMode(mode);
    setShowForm(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 h-20 px-6 md:px-10
        flex items-center transition-all duration-300
        ${
          scrolled
            ? "bg-white/70 shadow-2xl backdrop-blur-md"
            : "bg-white shadow-2xl  border-gray-200"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <motion.div
            whileHover={{scale: 1.1, rotate: 8}}
            whileTap={{scale: 0.95}}
            className="bg-linear-to-r from-cyan-400 to-purple-600 p-3 rounded-xl shadow-md"
          >
            <Code2 className="text-white w-7 h-7" />
          </motion.div>

          <motion.h1
            whileHover={{scale: 1.05}}
            className="text-2xl md:text-3xl font-extrabold bg-linear-to-r
            from-cyan-600 via-blue-700 to-purple-700
            bg-clip-text text-transparent"
          >
            Codeyaan
          </motion.h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex ml-auto space-x-12 text-gray-700 font-medium text-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 hover:scale-105 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex ml-8 space-x-5">
          <button
            onClick={() => openForm("login")}
            className="border-2 border-blue-400 px-5 py-2 rounded-xl
            hover:bg-blue-50 transition font-medium"
          >
            Login
          </button>
          <button
            onClick={() => openForm("signup")}
            className="bg-linear-to-r from-blue-500 to-purple-600
            text-white px-5 py-2 rounded-xl shadow-md
            hover:scale-105 transition font-medium"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-auto text-gray-800"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 w-full bg-white shadow-xl z-50 md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t space-y-3">
              <button
                onClick={() => openForm("login")}
                className="w-full border-2 border-blue-400 py-2 rounded-xl"
              >
                Login
              </button>
              <button
                onClick={() => openForm("signup")}
                className="w-full bg-linear-to-r from-blue-500 to-purple-600
                text-white py-2 rounded-xl"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= AUTH MODAL ================= */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-6">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X />
            </button>
            <AuthForm initialMode={formMode} />
          </div>
        </div>
      )}
    </>
  );
}
