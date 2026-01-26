import React from 'react'
import Image from "next/image";
import { motion } from "motion/react";
import { Video } from "lucide-react";

export default function HeroSection() {
    return (
        <>
        <div className=" w-full">
            <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-11 py-8 md:py-4">
                {/* Left Content */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col justify-center"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-indigo-900 text-4xl md:text-5xl font-bold  leading-tight">
                        <span className="text-blue-600">Learning</span> Made Smart with Codeyaan
                    </h1>

                    <p className="text-sm md:text-xl my-1 mb-5 text-gray-700 text-center md:text-left">
                        Codeyaan helps you learn, grow, and build your career in tech.
                        Log in to continue your journey or create a new account to get started!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 font-medium justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-linear-to-r from-blue-600 to-blue-900 text-white px-6 py-3 rounded-lg"
                        >
                            Get Started
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-900 border-2 border-blue-900 px-6 py-3 rounded-lg flex items-center justify-center gap-2"
                        >
                            <Video className="w-5 h-5" />
                            Watch how it works
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <Image
                        src="/student.svg"
                        width={600}
                        height={600}
                        alt="Student with books"
                        className="w-full max-w-sm md:max-w-md object-contain"
                        priority
                    />
                </motion.div>
            </section>
        </div>

        
        

        </>
    )
}
