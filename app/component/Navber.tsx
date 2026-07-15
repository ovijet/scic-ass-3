"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Avatar } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown, BiLogOut, BiUser, BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const role = (user as any)?.role || "user";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
          >
            {isMobileOpen ? <BiX className="text-2xl" /> : <BiMenu className="text-2xl" />}
          </button>

          <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 hover:opacity-90 transition">
            BookStore<span className="text-blue-600">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          ) : !user ? (
            <div className="flex items-center gap-2">
              <Link href="/login" className="text-sm font-semibold text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition">
                Login
              </Link>
              <Link href="/signup" className="text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-full transition shadow-sm">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 border border-gray-200 rounded-full p-1 pr-2.5 sm:pr-3 hover:bg-gray-50 transition-all duration-200"
              >
                <Avatar size="sm" className="w-7 h-7 ring-2 ring-gray-50 flex-shrink-0">
                  <Avatar.Image src={user?.image ?? undefined} referrerPolicy="no-referrer" />
                  <Avatar.Fallback className="bg-orange-100 text-orange-600 font-bold text-xs">
                    {user?.name?.charAt(0).toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>
                <span className="text-xs font-semibold text-gray-700 max-w-[70px] sm:max-w-[90px] truncate hidden xs:inline-block">
                  {user?.name?.split(" ")[0]}
                </span>
                <BiChevronDown className={`text-gray-400 text-base transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Desktop Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 overflow-hidden"
                    >
                      <div className="p-4 bg-gray-50/50 border-b border-gray-100">
                        <p className="font-semibold text-gray-900 text-sm truncate">{user?.name}</p>
                        <p className="text-xs text-gray-400 truncate mt-0.5">{user?.email}</p>
                        <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          role === "admin" ? "bg-rose-50 text-rose-600 border border-rose-100" : "bg-blue-50 text-blue-600 border border-blue-100"
                        }`}>
                          {role}
                        </span>
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
      </div>

      {/* ✅ FIXED: 📱 Mobile Drawer with Profile & Logout controls */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-xl z-40 flex flex-col gap-1 lg:hidden mx-4 rounded-2xl mt-1"
            >
              {/* মোবাইল ন্যাভ লিংকসমূহ */}
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* মোবাইল ভিউতে ইউজার লগইন থাকলে তার কার্ড এবং লগআউট বাটন */}
              {user && (
                <div className="mt-4 pt-4 border-t border-gray-100 px-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar size="sm" className="w-10 h-10">
                      <Avatar.Image src={user?.image ?? undefined} referrerPolicy="no-referrer" />
                    </Avatar>
                    <div className="truncate">
                      <p className="font-bold text-gray-950 text-sm">{user?.name}</p>
                      <p className="text-xs text-gray-400">{user?.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsMobileOpen(false);
                      handleSignOut();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-xl text-sm font-bold transition-all"
                  >
                    <BiLogOut className="text-lg" /> Logout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;