"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-[#0c0d15]/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-gray-300" />
          <span className="font-heading text-xl font-bold text-gray-300">VS Academy</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
          <Link href="/instructor" className="text-gray-300 hover:text-white transition-colors">Instructor</Link>
          <Link href="/learner" className="text-gray-300 hover:text-white transition-colors">Learner</Link>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Sign in
        </Button>
      </div>
    </header>
  );
};

export default Header;