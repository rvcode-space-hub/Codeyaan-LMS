import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* 🔥 SEO Metadata */
export const metadata = {
  title: "Codeyaan - Learning Platform",
  description:
    "Codeyaan is a modern skill-based learning platform to build real-world projects, master backend & full-stack development, and become job-ready.",
  
  keywords: [
    "Codeyaan",
    "Learning Platform",
    "Full Stack Development",
    "Backend Development",
    "Coding Courses",
    "MERN Stack",
  ],

  authors: [{ name: "Codeyaan Team" }],
  creator: "Codeyaan",

  openGraph: {
    title: "Codeyaan - Learning Platform",
    description:
      "Learn by building real-world projects and become job-ready with Codeyaan.",
    imageUrl: "https://res.cloudinary.com/dgmzre11v/image/upload/v1775496524/CodeYaan/images/image_1775496521998.jpg",
    siteName: "Codeyaan",
    images: [
      {
        imageUrl: "https://res.cloudinary.com/dgmzre11v/image/upload/v1775496524/CodeYaan/images/image_1775496521998.jpg",
 // public folder me image daalna
        width: 1200,
        height: 630,
        alt: "Codeyaan Learning Platform",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Codeyaan - Learning Platform",
    description:
      "Build real-world projects & become job-ready with Codeyaan.",
    imageUrl: "https://res.cloudinary.com/dgmzre11v/image/upload/v1775496524/CodeYaan/images/image_1775496521998.jpg",

  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}