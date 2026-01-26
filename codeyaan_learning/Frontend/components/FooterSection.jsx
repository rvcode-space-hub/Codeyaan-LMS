'use client';
import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-linear-to-r from-blue-900 via-sky-900 to-indigo-900 text-white mt-16"
    >
      {/* 🔹 Main Footer */}
      <div className="max-w-7xl text-2xl md:text-3xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-3">Codeyaan</h1>
          <p className="text-sm md:text-base text-purple-200 leading-relaxed">
            Codeyaan is a modern tech platform focused on backend development,
            full-stack learning, real-world projects, and career-oriented
            guidance for developers.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base md:text-lg px-10 font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm md:text-base px-10 text-purple-200">
            {["Home", "About Us", "Courses", "Projects", "Contact"].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 6 }}
                  className="hover:text-purple-400 hover:font-bold cursor-pointer"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base md:text-lg font-semibold mb-4">
            What We Offer
          </h2>

          <ul className="space-y-3 text-sm md:text-base">
            {[ "Backend Development","Node.js & Spring Boot","Full-Stack Projects", "LMS & SaaS Solutions","Career Mentorship",].map(
             (item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 6 }}
                  className="hover:text-purple-400 hover:font-bold cursor-pointer text-purple-200"
                >
                  {item}
                </motion.li>
              )
            )}  
          </ul>
        </motion.div>


        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base md:text-lg font-semibold mb-4">Contact Us</h2>
          <div className="space-y-3 text-sm md:text-base text-purple-200">

            <p className="flex items-center gap-2 hover:text-purple-400 cursor-pointer hover:font-bold">
              <Mail size={16} /> infowebserive@gmail.com
            </p>
            <p className="flex items-center gap-2 hover:text-purple-400 cursor-pointer hover:font-bold">
              <Phone size={16} /> +91 9871585013
            </p>              
            <p className="flex items-center gap-2 hover:text-purple-400 cursor-pointer hover:font-bold">
              <MapPin size={16} /> India
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-purple-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🔹 Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-purple-800 text-center py-4 text-sm text-purple-300"
      >
        © {new Date().getFullYear()} Codeyaan. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
