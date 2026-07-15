"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  FaArrowRight,
  FaBookOpen,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

interface BookSlide {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
}

const slides: BookSlide[] = [
  {
    title: "Discover Your Next Great Read",
    subtitle: "Explore Thousands of Premium Books",
    desc: "Dive into an extensive collection of fiction, tech, biography, and self-growth books. Find the perfect story that inspires your mind today.",
    img: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
  },
  {
    title: "Build Your Personal Library",
    subtitle: "Exclusive Deals on Best Sellers",
    desc: "Get your hands on international best-selling books at the lowest prices. Enjoy secure payment and fast home delivery across the country.",
    img: "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg",
  },
  {
    title: "Learn from the Tech Masters",
    subtitle: "Upgrade Your Coding & Business Skills",
    desc: "Boost your career with our specialized collection of software development, web design, and programming books written by industry experts.",
    img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
  },
];

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-emerald-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="pb-10"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid lg:grid-cols-2 items-center gap-16 pb-8">
                {/* Left Content */}
                <div>
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-5">
                    ✨ Learn • Share • Grow
                  </span>

                  <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight">
                    {slide.title}
                  </h1>

                  <h2 className="text-xl lg:text-2xl text-blue-600 font-bold mt-4">
                    {slide.subtitle}
                  </h2>

                  <p className="text-gray-600 mt-6 text-base lg:text-lg leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link href="/explore">
                      <span className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer">
                        Explore Lessons <FaArrowRight className="text-sm" />
                      </span>
                    </Link>

                    {/* ✅ FIXED: "add-item" কে "/add-item" করা হয়েছে */}
                    <Link href="/add-item">
                      <span className="inline-flex items-center bg-white border-2 border-blue-600 hover:bg-blue-50 text-blue-600 font-bold px-8 py-3 rounded-full shadow-sm transition-all cursor-pointer">
                        Share Lesson
                      </span>
                    </Link>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-12">
                    <div className="bg-white rounded-2xl shadow-md p-4 text-center border border-gray-100">
                      <FaBookOpen className="text-2xl lg:text-3xl text-blue-600 mx-auto mb-2" />
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-950">500+</h3>
                      <p className="text-gray-500 text-xs font-semibold">Lessons</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-4 text-center border border-gray-100">
                      <FaUsers className="text-2xl lg:text-3xl text-blue-600 mx-auto mb-2" />
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-950">2K+</h3>
                      <p className="text-gray-500 text-xs font-semibold">Users</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-4 text-center border border-gray-100">
                      <FaLightbulb className="text-2xl lg:text-3xl text-yellow-500 mx-auto mb-2" />
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-950">100%</h3>
                      <p className="text-gray-500 text-xs font-semibold">Growth</p>
                    </div>
                  </div>
                </div>

                {/* Right Image Container */}
                <div className="relative flex justify-center">
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-40"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

                  <div className="relative bg-white/60 backdrop-blur-xl rounded-[40px] shadow-2xl p-6 max-w-md lg:max-w-full">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full max-h-[400px] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;