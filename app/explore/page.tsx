import React from "react";
import { Button, Link } from "@heroui/react";

export const Explore = async () => {
  // ডাটা ফেচিং (সার্ভার সাইড)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addBook`, {
    cache: "no-store", // প্রতিবার নতুন ডাটা পাওয়ার জন্য
  });
  const books = await res.json();

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* হেডার সেকশন */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Explore Books 📚
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Discover amazing books, novels, and resources shared by our
            community.
          </p>
        </div>

        {/* গ্রিড লেআউট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {books?.map((book: any) => (
            <div
              key={book._id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* বুক কভার ইমেজ - ফিক্সড সাইজ এবং অ্যাসপেক্ট রেশিও */}
              <div className="relative w-full aspect-[6/5] bg-gray-100 overflow-hidden">
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

                {/* ক্যাটাগরি ব্যাজ */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-purple-700 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm border border-purple-100/50">
                  {book.category}
                </span>
              </div>

              {/* কার্ড কন্টেন্ট */}
              <div className="p-5 flex flex-col flex-grow">
                {/* টাইটেল ও লেখক */}
                <div className="mb-3">
                  <h2
                    className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-purple-600 transition-colors"
                    title={book.title}
                  >
                    {book.title}
                  </h2>
                  <p className="text-xs font-medium text-gray-500 mt-0.5">
                    by <span className="text-gray-700">{book.author}</span>
                  </p>
                </div>

                {/* শর্ট ডেসক্রিপশন */}
                <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
                  {book.description}
                </p>

                {/* ফুটার বা অতিরিক্ত ইনফো */}
                <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span>📄 {book.pageCount} Pages</span>
                  </div>
                  <div className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 capitalize">
                    {book.language}
                  </div>
                </div>
              </div>
               <Link
                  href={`/explore/${book._id}`}
                  aria-label={`View details of ${book.title}`}
                  className="flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                >
                  View Details
                </Link>
            </div>
          ))}
        </div>

        {/* যদি কোনো বই না থাকে */}
        {(!books || books.length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No books found. Be the first to add one!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
