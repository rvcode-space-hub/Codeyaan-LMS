"use client";

import { useState, useEffect } from "react";
import { codeSnippets } from "../../lib/codepanel.js";
import { getTokenColor } from "@/lib/getTokenColor.js";

export default function CodePanel() {
  const [language, setLanguage] = useState("javascript");
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let currentCode = codeSnippets?.[language] || "";

    currentCode = currentCode.replace(/undefined/g, "");

    setDisplayedCode("");
    setIsTyping(true);

    const typingSpeed = 16; // smoother

    const interval = setInterval(() => {
      setDisplayedCode((prev) => {
        if (index >= currentCode.length) {
          clearInterval(interval);
          setIsTyping(false);
          return prev;
        }

        const next = prev + currentCode[index];
        index++;
        return next;
      });
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [language]);

  const lines = displayedCode.split("\n");

  return (
    <div className="w-full max-w-xl h-[420px] sm:h-[500px] md:h-[600px] rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-white/10 sticky top-0 z-10">

        {/* Left: file name */}
        <span className="text-xs text-gray-400">
          index.{language === "javascript" ? "js" : language}
        </span>

        {/* Right: language select */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-md border border-white/10 outline-none cursor-pointer hover:bg-gray-600 transition"
        >
          {Object.keys(codeSnippets).map((lang) => (
            <option key={lang} value={lang}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Code Area */}
      <div className="flex text-xs sm:text-sm font-mono h-[calc(100%-40px)] overflow-auto">

        {/* Line Numbers */}
        <div className="bg-[#161b22] text-gray-500 px-3 py-4 select-none text-right">
          {lines.map((_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code */}
        <pre className="flex-1 p-4 whitespace-pre leading-6">

          {displayedCode
            .split(/(\s+)/)
            .map((word, i) => (
              <span key={i} className={getTokenColor(word)}>
                {word}
              </span>
            ))}

          {/* ✨ Smooth Blinking Cursor */}
          {isTyping && (
            <span className="ml-1 inline-block w-[2px] h-4 bg-indigo-400 animate-blink" />
          )}
        </pre>
      </div>

      {/* 🔥 Bottom Gradient Glow */}
      <div className="h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-transparent animate-pulse" />
    </div>
  );
}