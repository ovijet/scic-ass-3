"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Books That Will Change Your Perspective on Life",
    excerpt:
      "Discover life-altering literature that challenges your thinking and expands your horizons. From philosophy to fiction...",
    category: "Reading Lists",
    date: "July 12, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=800",
    author: "Ahsan Habib",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Building a Daily Reading Habit",
    excerpt:
      "Struggling to finish a single book? Here are 5 practical and science-backed tips to cultivate a sustainable reading routine...",
    category: "Self-Improvement",
    date: "July 08, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    author: "Sultana Rahman",
  },
  {
    id: 3,
    title: "Why Physical Books Still Rule in the Digital Era",
    excerpt:
      "Despite the rise of Kindles and audiobooks, physical book sales are booming. We dive deep into the psychology of paper...",
    category: "Book Culture",
    date: "June 28, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    author: "Tanvir Ahmed",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-gray-50/60 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sm font-bold text-purple-600 uppercase tracking-widest">
              Our Notebook
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
              From the Bookstore Blog
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-xl">
              Explore book reviews, reading tips, author interviews, and
              literary news curated just for bookworms.
            </p>
          </div>

          <div>
            <div>
              <Link href="/explore" className="inline-block">
                <Button className="bg-white border border-gray-200 text-gray-700 hover:text-purple-600 font-semibold text-sm px-6 py-5 rounded-xl shadow-sm transition-all whitespace-nowrap">
                  View All Articles ↗
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group bg-white border border-gray-100 rounded-2xl shadow-md shadow-gray-100/30 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300"
            >
              {/* Post Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-purple-700 font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Post Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta info */}
                <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors mb-3 leading-snug">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Footer / Author */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {/* Placeholder Avatar */}
                    <div className="w-7 h-7 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold uppercase">
                      {post.author[0]}
                    </div>
                    <span className="text-xs font-semibold text-gray-700">
                      By {post.author}
                    </span>
                  </div>

                  {/* <Link 
                    href={`/blog/${post.id}`}
                    className="text-xs font-bold text-purple-600 group-hover:text-indigo-600 transition-colors flex items-center gap-1"
                  >
                    Read More <span>→</span>
                  </Link> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
