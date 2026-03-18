"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntegrationsSection() {
  const logos = [
    { src: "/onedrive.png", name: "OneDrive" },
    { src: "/dropbox.png", name: "Dropbox" },
    { src: "/google-drive.png", name: "Google Drive" },
    { src: "/teams.png", name: "Teams" },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* 🔵 Logos Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 place-items-center"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex items-center justify-center w-40 h-24"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={80}
                height={40}
                className="object-contain opacity-80 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 📝 Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest text-indigo-500 uppercase font-semibold">
            Integrations
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">
            200+ tools to supercharge your{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              learning experience
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Codeyaan integrates with modern tools and platforms to give you a
            seamless learning experience — from project building to collaboration
            and real-world workflows.
          </p>

          {/* CTA */}
          <button className="mt-8 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition">
            Explore Integrations →
          </button>
        </motion.div>
      </div>
    </section>
  );
}