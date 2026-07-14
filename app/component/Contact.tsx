"use client";

import { toast } from "react-toastify";
import { Button } from "@heroui/react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log(contactData);
    toast.success("Message sent successfully! 🚀");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50/60 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-100/40 p-8 sm:p-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-base text-gray-500 max-w-md mx-auto">
            Have questions or need help? We'd love to hear from you. Drop us a message!
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              required
              placeholder="Write your message..."
              className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none"
            />
          </div>

          {/* Form Action Button */}
          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm py-6 rounded-xl shadow-lg shadow-purple-500/10 transition-all tracking-wider"
            >
              SEND MESSAGE ✉️
            </Button>
          </div>
        </form>

        <hr className="my-12 border-gray-100" />

        {/* Info Grid */}
        <div className="grid sm:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
          <div className="p-4 rounded-xl hover:bg-gray-50/50 transition-colors">
            <div className="text-2xl mb-2">📧</div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Email</h3>
            <p className="text-sm text-gray-500 mt-1 font-medium">support@bookstore.com</p>
          </div>

          <div className="p-4 rounded-xl hover:bg-gray-50/50 transition-colors">
            <div className="text-2xl mb-2">📍</div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Address</h3>
            <p className="text-sm text-gray-500 mt-1 font-medium">Khulna, Bangladesh</p>
          </div>

          <div className="p-4 rounded-xl hover:bg-gray-50/50 transition-colors">
            <div className="text-2xl mb-2">📞</div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Phone</h3>
            <p className="text-sm text-gray-500 mt-1 font-medium">+880 1700-000000</p>
          </div>
        </div>

      </div>
    </div>
  );
}