"use client";

import React from "react";
import { motion } from "motion/react";

export default function CardSection({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl"
    >

      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-blue-800 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-800">
        {description}
      </p>
    </motion.div>
  );
}
