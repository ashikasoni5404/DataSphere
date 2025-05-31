"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Sun,
  Moon,
  Database,
  BarChart2,
  BrainCircuit,
  User
} from "lucide-react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/app/firebase"
const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleSignin = () => {
    setShowPopup(true); // open modal
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleGoogleLogin = async () => {
    if (isSigningIn) return; // block repeat attempts
    setIsSigningIn(true);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Signed in user------:", result.user);
      // console.log("accessToken------:", result.user.displayName);
      if (result?.user?.displayName) {
        localStorage.setItem("name", result.user.displayName);
      } else {
        localStorage.setItem("name", "Guest");
      }

      alert(`Successfully login ${result.user.displayName}`);

      setShowPopup(false);
    } catch (error) {
      console.error("Google sign-in error:", error);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <BarChart2 className="h-6 w-6 text-blue-500 dark:text-blue-300" />
                <BrainCircuit className="h-6 w-6 text-blue-400 dark:text-blue-200" />
              </div>
              <span className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">
                DataSphere
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={handleSignin}
              className="ml-2"
            >
              <User className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="ml-2"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mr-2"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}


      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-[90%] max-w-sm shadow-xl text-center">
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Sign in to DataSphere
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
              Sign in to sync your data and access premium features.
            </p>
            <Button
              onClick={handleGoogleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSigningIn}
            >
              {isSigningIn ? "Signing in..." : "Continue with Google"}
            </Button>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-3 text-sm text-gray-500 dark:text-gray-400 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}