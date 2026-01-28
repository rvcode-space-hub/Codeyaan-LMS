"use client";
import React, { useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import SignForm from "./SignForm";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("login");

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  const openForm = (mode) => {
    setFormMode(mode);
    setShowForm(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white border-b border-gray-200 shadow-xl px-6 py-4 flex items-center">

        {/* ===== Logo ===== */}
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="bg-linear-to-r from-cyan-400 to-purple-600 p-3 rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
          >
            <Code2 className="text-white w-8 h-8 md:w-10 md:h-10" />
          </motion.div>

          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-cyan-600 via-blue-800 to-purple-700 bg-clip-text text-transparent cursor-pointer"
          >
            Codeyaan
          </motion.h1>
        </div>

        {/* ===== Desktop Links ===== */}
        <div className="hidden md:flex space-x-12 ml-auto text-gray-700 font-medium text-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ===== Desktop Buttons ===== */}
        <div className="hidden md:flex space-x-6 ml-8 font-medium">
          <button
            onClick={() => openForm("login")}
            className="border-2 border-blue-400 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:font-bold hover:scale-105 transition"
          >
            Login
          </button>
          <button
            onClick={() => openForm("signup")}
            className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:font-bold hover:scale-105 transition"
          >
            Sign Up
          </button>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col space-y-4 p-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col space-y-3 pt-4 border-t">
              <button
                onClick={() => openForm("login")}
                className="border border-blue-400 py-2 rounded-lg"
              >
                Login
              </button>
              <button
                onClick={() => openForm("signup")}
                className="bg-linear-to-r from-sky-500 to-purple-600 text-white py-2 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= AUTH MODAL ================= */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              <X />
            </button>
            <SignForm initialMode={formMode} />
          </div>
        </div>
      )}
    </>
  );
}
