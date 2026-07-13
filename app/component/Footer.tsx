import React from "react";
import { FaBookOpen } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">

      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        {/* Logo + About */}
        <aside className="space-y-4">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#422AD5] flex items-center justify-center shadow-md">
              <FaBookOpen className="text-white" />
            </div>

            <h3 className="font-bold text-2xl text-gray-900">
              BookStore
            </h3>
          </div>

          <p className="text-sm text-gray-500 leading-6">
            Quiet study rooms, booked by the hour. Built for students,
            scholars, and lifelong learners.
          </p>

        </aside>

        {/* Contact */}
        <nav className="space-y-3">
          <h6 className="font-semibold text-lg text-gray-900">
            Contact Info
          </h6>

          <p className="text-sm text-gray-500 hover:text-blue-500 transition cursor-pointer">
            Email: info@suncart.com
          </p>

          <p className="text-sm text-gray-500 hover:text-blue-500 transition cursor-pointer">
            Phone: +880 1234-567890
          </p>

          <p className="text-sm text-gray-500">
            Address: Dhaka, Bangladesh
          </p>
        </nav>

        {/* Links */}
        <nav className="space-y-3">
          <h6 className="font-semibold text-lg text-gray-900">
            Quick Links
          </h6>

          <p className="text-sm text-gray-500 hover:text-blue-500 transition cursor-pointer">
            Terms of Service
          </p>

          <p className="text-sm text-gray-500 hover:text-blue-500 transition cursor-pointer">
            Privacy Policy
          </p>

          <p className="text-sm text-gray-500 hover:text-blue-500 transition cursor-pointer">
            Cookie Policy
          </p>

          <p className="text-sm text-gray-500 hover:text-blue-500 transition cursor-pointer">
            Press Kit
          </p>
        </nav>

        {/* Social */}
        <nav className="space-y-3">
          <h6 className="font-semibold text-lg text-gray-900">
            Social Links
          </h6>

          <div className="flex gap-4 text-2xl">

            <a href="#" className="text-gray-500 hover:text-blue-600 transition">
              <FaFacebook />
            </a>

            <a href="#" className="text-gray-500 hover:text-sky-500 transition">
              <FaTwitter />
            </a>

            <a href="#" className="text-gray-500 hover:text-pink-500 transition">
              <FaInstagram />
            </a>

            <a href="#" className="text-gray-500 hover:text-blue-700 transition">
              <FaLinkedin />
            </a>

          </div>
        </nav>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BookStore. All rights reserved.
          </p>

          <p className="text-sm text-gray-400">
            Built with ❤️ for students
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;