import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

export const FeaturedBooks = async () => {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addBook`, {
    cache: "no-store",
  });
  const allBooks = await res.json();

 
  const featuredBooks = allBooks?.slice(0, 4) || [];

  return (
    <div className="bg-[#FBFBFA] py-16 px-4 sm:px-6 lg:px-8 font-sans text-[#1E3326]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-purple-600 uppercase tracking-[0.2em] block mb-1">
              Curated Collection
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#11311F] tracking-tight">
              Featured Books
            </h2>
          </div>

          
          <Link href="/explore">
            <Button className="bg-white border border-gray-200 text-gray-700 hover:text-purple-600 font-semibold text-sm px-6 py-5 rounded-xl shadow-sm transition-all whitespace-nowrap">
              View All Books ↗
            </Button>
          </Link>
        </div>

        {/* 4 Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book: any) => (
            <div
              key={book._id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-md shadow-gray-200/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden p-4 justify-between"
            >
              <div>
                {/* Book Cover Image */}
                <div className="relative w-full aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden mb-4 shadow-sm">
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-200">
                      <span className="text-3xl">📚</span>
                      <span className="text-xs mt-1">No Cover</span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-purple-700 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {book.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="space-y-1 px-1">
                  <h3
                    className="font-serif font-bold text-base text-[#11311F] line-clamp-1 group-hover:text-purple-600 transition-colors"
                    title={book.title}
                  >
                    {book.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-400">
                    by <span className="text-gray-600">{book.author}</span>
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-2 pt-1 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>

              {/* Card Footer & Action Button */}
              <div className="pt-4 mt-4 border-t border-gray-50 flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>📄 {book.pageCount} Pages</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 capitalize">
                    {book.language}
                  </span>
                </div>

                <Link href={`/explore/${book._id}`}>
                  <Button className="w-full bg-[#202cb4] text-white font-bold text-xs py-5 rounded-xl hover:bg-[#5373a4] transition-all shadow-md shadow-[#2A4D38]/10">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {featuredBooks.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-2xl bg-white">
            <p className="text-gray-400 text-sm">
              No books found on the shelf.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedBooks;
