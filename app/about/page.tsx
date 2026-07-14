"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FiBookOpen, FiGlobe, FiAward, FiArrowRight } from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] py-16 px-4 sm:px-6 lg:px-8 font-sans text-[#123ec3]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-[0.2em] block">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1244cd] tracking-tight">
            About Book Store
          </h1>
          <div className="h-1 w-20 bg-[#1734c8] mx-auto rounded-full my-4" />
          <p className="text-base text-gray-500 leading-relaxed">
            Welcome to Book Store, your trusted online destination for
            discovering and purchasing books across various genres. Whether
            you're looking for fiction, technology, self-development, or
            academic books, we aim to make reading accessible and enjoyable for
            everyone.
          </p>
        </div>

        {/* 3-Column Modern Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Our Mission */}
          <div className="bg-white border border-gray-100 rounded-[30px] p-8 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#1b24d2] flex items-center justify-center mb-6 shadow-inner">
                <FiBookOpen size={22} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#1b27ad] mb-4">
                Our Mission
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                To connect readers with quality books and encourage a lifelong
                love of learning, imagination, and continuous reading.
              </p>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="bg-white border border-gray-100 rounded-[30px] p-8 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 shadow-inner">
                <FiGlobe size={22} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#1b2bb9] mb-4">
                Our Vision
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                To become a trusted global online bookstore that serves readers
                with an extensive collection, seamless accessibility, and an
                excellent shopping experience.
              </p>
            </div>
          </div>

          {/* Card 3: What We Offer */}
          <div className="bg-white border border-gray-100 rounded-[30px] p-8 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 shadow-inner">
                <FiAward size={22} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#140fad] mb-4">
                What We Offer
              </h2>
              <ul className="space-y-3">
                {[
                  "Wide range of books",
                  "Easy search & filtering",
                  "Secure authentication",
                  "Fast and simple ordering",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2.5 text-sm text-gray-500 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2A4D38]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#534997] to-[#4839a7] rounded-[35px] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-serif font-bold tracking-tight">
              Ready to find your next great read?
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Explore thousands of books curated by readers for readers. Start
              building your perfect library today.
            </p>
            <div className="pt-4">
              <Link href="/explore" className="inline-block">
                <Button className="bg-white text-[#2A4D38] hover:bg-gray-50 font-bold text-sm px-8 py-6 rounded-xl shadow-lg transition-all tracking-wider">
                  EXPLORE BOOKS <FiArrowRight className="inline-block ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
