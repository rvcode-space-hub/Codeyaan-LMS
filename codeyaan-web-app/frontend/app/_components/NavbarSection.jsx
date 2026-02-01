'use client'
import React, { useEffect, useState } from 'react'
import { Code2, X } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import AuthForm from './AuthForm'

export default function NavbarSection() {

    const [showForm, setShowForm] = useState(false);
    const [formMode, setFormMode] = useState('login'); // 'login' or 'signup'
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const openForm = (mode) => {
        // Logic to open login or signup form
        setFormMode(mode);
        setShowForm(true);
        setIsMenuOpen(false);
    };




    return (
        <nav
            className={` fixed top-0 left-0 w-full z-40 py-4 px-8 flex items-center
  transition-all duration-300
        ${scrolled
                    ? 'bg-white/70 shadow-2xl backdrop-blur-md'
                    : 'bg-white shadow-2xl  border-gray-200'
                }`}
        >

            {/* Logo */}

            <div className="flex items-center space-x-3">

                <motion.div
                    initial={{ scale: 0.6, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 12
                    }}
                    className="bg-linear-to-r from-cyan-400 to-purple-600 p-3 rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
                >
                    <Code2 className="text-white w-8 h-8 md:w-10 md:h-10" />
                </motion.div>

                <motion.h1
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-cyan-600 via-blue-800 to-purple-700 bg-clip-text text-transparent cursor-pointer"
                >
                    Codeyaan
                </motion.h1>
            </div>

            {/* Navigation Links */}

            <div className='md:flex space-x-12 ml-auto  text-gray-700 font-medium text-xl '>
                {links.map((link) => (
                    <Link
                        key={link.name} href={link.href}
                        className="hover:text-blue-600 hover:scale-105 transition-colors transition-all duration-100"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* buttons Link */}

            <div className="ml-8 md:flex space-x-6 font-medium ">
                <button
                    onClick={() => openForm('login')}
                    className=' w-25 border-2 border-blue-400 text-gray-800 px-4 py-2 rounded-2xl shadow-lg hover:font-bold hover:scale-105 transition'
                >
                    Login
                </button>
                <button
                    onClick={() => openForm('signup')}
                    className="w-25 bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-4 rounded-2xl shadow-lg hover:font-bold hover:scale-105 transition"
                >
                    Sign Up
                </button>
            </div>


            {/* Mobile Menu Button */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-blue-500 shadow-lg z-50">
                    <div className="flex flex-col space-y-4 p-6">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 font-medium text-lg hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className='flex flex-col space-x-3 pt-4 border-t'>
                            <button
                                onClick={() => openForm('login')}
                                className=' w-25 border-2 border-blue-400 text-gray-800 px-4 py-2 rounded-2xl shadow-lg hover:font-bold hover:scale-105 transition mb-2'
                            >
                                Login
                            </button>
                            <button
                                onClick={() => openForm('signup')}
                                className="w-25 bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-3xl shadow-lg hover:font-bold hover:scale-105 transition mb-2"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )};

            {/* Auth Form Modal */}

            {showForm && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                    <div className="relative bg-white rounded-4xl shadow-2xl max-w-3xl w-full  p-6">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-3 right-3 text-gray-500"
                        >
                            <X />
                        </button>
                        <AuthForm initialMode={formMode} />
                    </div>
                </div>
            )}
        </nav>
    )
}
