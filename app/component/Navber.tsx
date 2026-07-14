'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Avatar } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown, BiLogOut, BiUser } from "react-icons/bi";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Auth Client state management
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  
  // FIXED: Safely access role if it exists on your user object, defaulting to "user"
  const role = (user as any)?.role || "user";

  // Navigation Setup
  const baseLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Blog", href: "/blog" },
  ];

  const userLinks = user
    ? [
        { name: "Add items", href: "/add-item" },
        { name: "Manage items", href: "/manage-item" },
        { name: "My Profile", href: "/profile" },
      ]
    : [];

  const navLinks = [...baseLinks, ...userLinks];

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error) {
      console.error(error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-200 shadow-sm select-none navbar">
      <div className="navbar-start">
        {/* Mobile Hamburger Menu */}
        <div className="dropdown lg:hidden">
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)} 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"}
              />
            </svg>
          </button>

          {/* Mobile Dropdown List */}
          <AnimatePresence>
            {isMobileOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-base-200"
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileOpen(false)}
                      className={pathname === link.href ? "active bg-primary text-white" : ""}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        
        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tight">
          BookStore
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-content shadow-sm"
                      : "hover:bg-base-200"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Navbar End - Auth Actions / User Controls */}
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-primary"></span>
        ) : !user ? (
          // Unauthenticated State
          <div className="flex items-center gap-2">
            <Link href="/login" className="btn btn-primary btn-sm md:btn-md rounded-full px-5">
              Login
            </Link>
            <Link href="/signup" className="btn btn-secondary btn-sm md:btn-md rounded-full px-5">
              Sign Up
            </Link>
          </div>
        ) : (
          // Authenticated State (Avatar & Dropdown Menu)
          <div className="relative">
            {/* Avatar Control */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 border border-gray-200/80 rounded-full p-1 pr-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <Avatar size="sm" className="w-7 h-7 ring-2 ring-gray-100 flex-shrink-0">
                {/* FIXED: Turn null values into undefined to pass TS validation */}
                <Avatar.Image src={user?.image ?? undefined} referrerPolicy="no-referrer" />
                <Avatar.Fallback className="bg-orange-100 text-orange-600 font-bold text-xs">
                  {user?.name?.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
              <span className="text-xs font-semibold text-gray-700 max-w-[80px] truncate hidden sm:inline-block">
                {user?.name?.split(" ")[0]}
              </span>
              <BiChevronDown
                className={`text-gray-400 text-base transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu Box */}
            <AnimatePresence>
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2.5 w-60 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50/50 border-b border-gray-100">
                      <p className="font-semibold text-gray-900 text-sm truncate">{user?.name}</p>
                      <p className="text-xs text-gray-400 truncate mt-0.5">{user?.email}</p>
                      
                      <div className="flex items-center gap-2 mt-2.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          role === "admin" ? "bg-rose-50 text-rose-600 border border-rose-100" : "bg-blue-50 text-blue-600 border border-blue-100"
                        }`}>
                          {role}
                        </span>
                      </div>
                    </div>

                    <div className="p-1.5 space-y-0.5">
                      <Link
                        href={role === "admin" ? "/dashboard/admin/profile" : "/dashboard/user/profile"}
                        className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <BiUser className="text-lg text-gray-400" /> Profile
                      </Link>

                      <hr className="border-gray-100 my-1" />

                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          handleSignOut();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-rose-600 hover:bg-rose-50/60 rounded-xl transition font-semibold"
                      >
                        <BiLogOut className="text-lg" /> Logout
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;