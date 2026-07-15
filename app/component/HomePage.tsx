"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BiShieldQuarter, 
  BiSupport, 
  BiGitCompare, 
  BiCompass, 
  BiChevronDown, 
  BiStar 
} from "react-icons/bi";
import { FaArrowRight, FaPaperPlane } from "react-icons/fa";



const categories = [
  { name: "Tech & Coding", count: "120+ Books", icon: "💻", color: "bg-blue-50 text-blue-600 border-blue-100" },
  { name: "Fiction & Novels", count: "85+ Books", icon: "✨", color: "bg-purple-50 text-purple-600 border-purple-100" },
  { name: "Self Growth", count: "90+ Books", icon: "🌱", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { name: "Academic", count: "150+ Books", icon: "📚", color: "bg-amber-50 text-amber-600 border-amber-100" },
];


const trendingBooks = [
  {
    id: "1",
    title: "Next.js 15 Deep Dive",
    author: "Zonayed Ahmed",
    desc: "Master server actions, middleware, and advanced routing patterns in Next.js.",
    category: "Tech & Coding",
    rating: 4.9,
    price: "$29.00",
    img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    id: "2",
    title: "The Art of Clean Code",
    author: "Robert C. Martin",
    desc: "A handbook of agile software craftsmanship for writing highly maintainable systems.",
    category: "Tech & Coding",
    rating: 4.8,
    price: "$24.50",
    img: "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg"
  },
  {
    id: "3",
    title: "Atomic Habits",
    author: "James Clear",
    desc: "An easy and proven way to build good habits and break bad ones.",
    category: "Self Growth",
    rating: 5.0,
    price: "$18.00",
    img: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
  }
];



const faqs = [
  { q: "How can I share or add a new book?", a: "To share a book, register/login first. Then go to 'Add items' from navigation, fill the form with title, description, category, pages and submit!" },
  { q: "Are the resources on this platform free?", a: "Yes! Most of our community-shared books, notes, and learning resources are completely free to read and download." },
  { q: "Can I edit or delete my shared books?", a: "Yes, you can easily manage, view, or delete all of your uploaded books from the 'Manage items' page." }
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gray-50/50 font-sans overflow-x-hidden">
      
      {/* 1. HERO/BANNER SECTION
      <Banner /> */}

      {/* 2. CORE FEATURES SECTION */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-950 mt-3 tracking-tight">
            Designed for Passionate Readers
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
            Experience the ultimate digital library with features built specifically for code, community, and growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50/40 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-6">
                <BiShieldQuarter />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Verified Resources</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                All community books are manually reviewed by moderators to ensure premium quality.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50/40 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mb-6">
                <BiGitCompare />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Interactive Filtering</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Filter by categories, page count, and languages seamlessly on our explore page.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50/40 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-6">
                <BiSupport />
              </div>
              <h3 className="text-lg font-bold text-gray-900">24/7 Fast Support</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Facing issues with downloading or uploading? Contact our responsive helpdesk anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE CATEGORIES */}
      <section className="py-20 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-center md:text-left">
            <div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                Genres
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-950 mt-3 tracking-tight">
                Top Book Categories
              </h2>
            </div>
            <Link href="/explore">
              <span className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline transition mt-4 md:mt-0 cursor-pointer">
                Browse All Genres <FaArrowRight className="text-xs" />
              </span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white border border-gray-150/70 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 cursor-pointer"
              >
                <div className="text-3xl p-3 bg-gray-50 rounded-xl group-hover:scale-105 transition-transform">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Popular Now
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-950 mt-3 tracking-tight">
              Trending Community Picks
            </h2>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingBooks.map((book) => (
              <div
                key={book.id}
                className="group bg-white rounded-2xl border border-gray-150/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[6/5] bg-gray-100 overflow-hidden">
                    <img
                      src={book.img}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-blue-600 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
                      {book.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-lg font-bold text-gray-950 line-clamp-1 group-hover:text-blue-600 transition">
                        {book.title}
                      </h3>
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-500 flex-shrink-0">
                        <BiStar className="text-sm fill-amber-500" /> {book.rating}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-400">by {book.author}</p>
                    <p className="text-sm text-gray-500 line-clamp-3 mt-3 leading-relaxed">
                      {book.desc}
                    </p>
                  </div>
                </div>

                {/* <div className="p-5 pt-0">
                  <Link
                    href={`/explore/${book.id}`}
                    className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 text-center shadow-sm"
                  >
                    View Details
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY HIGHLIGHTS / STATS  */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-blue-300 bg-blue-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Our Platform Stats
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-4 tracking-tight">
            The Largest Peer-to-Peer Book Platform
          </h2>
          <p className="text-blue-200/70 mt-2 text-sm max-w-lg mx-auto">
            We connect thousands of active readers, students, and book enthusiasts daily.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="p-4">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-white">5K+</h3>
              <p className="text-blue-200/60 text-xs font-bold uppercase tracking-widest mt-2">Active Users</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-white">1.2K+</h3>
              <p className="text-blue-200/60 text-xs font-bold uppercase tracking-widest mt-2">Books Shared</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-white">99%</h3>
              <p className="text-blue-200/60 text-xs font-bold uppercase tracking-widest mt-2">Satisfied Readers</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-white">24/7</h3>
              <p className="text-blue-200/60 text-xs font-bold uppercase tracking-widest mt-2">Helpdesk Active</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* 7. FAQ ACCORDION SECTION */}
      <section className="py-20 bg-gray-50/30 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Have Questions?
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-950 mt-3 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-150/70 overflow-hidden transition"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-gray-900 hover:bg-gray-50 transition"
                >
                  <span>{faq.q}</span>
                  <BiChevronDown
                    className={`text-gray-400 text-xl transition-transform ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER / CALL TO ACTION  */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100/50 text-center">
            <span className="text-xs font-bold text-blue-600 bg-blue-100/60 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Newsletter
            </span>
            <h2 className="text-3xl font-extrabold text-gray-950 mt-4 tracking-tight">
              Get Weekly Book Recommendations
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto">
              Subscribe to get reviews, community highlights, and update alerts straight to your inbox.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email address..."
                required
                className="flex-grow bg-white border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition"
              >
                Subscribe <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}