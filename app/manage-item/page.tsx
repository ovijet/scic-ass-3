import React from "react";
import Link from "next/link";
import { DeleteModal } from "../component/DeleteModal";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  userName: string;
  userEmail: string;
}

const ManageItem = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addBook`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    return <div className="text-center py-12 text-red-500 font-semibold">Failed to load data.</div>;
  }

  const books: Book[] = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      
      {/* হেডার অংশ */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Manage Items</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Manage and organize all the uploaded books.</p>
        </div>
        <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-gray-200">
          Total Books: {books?.length || 0}
        </div>
      </div>

      {/* 💻 ডেস্কটপ এবং বড় স্ক্রিনের জন্য টেবিল ভিউ (Hidden on Mobile, Visible on LG screens) */}
      <div className="hidden lg:block overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 text-sm uppercase tracking-wider">
            <tr>
              <th className="p-4 font-bold">Book Info</th>
              <th className="p-4 font-bold">Author</th>
              <th className="p-4 font-bold">Category</th>
              <th className="p-4 font-bold">Uploader</th>
              <th className="p-4 font-bold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-150 text-gray-700 text-sm">
            {books?.map((book) => (
              <tr key={book._id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={book.image || "https://placehold.co/100x100?text=📚"}
                      alt={book.title}
                      className="object-cover w-12 h-12 rounded-xl border border-gray-100 flex-shrink-0"
                    />
                    <div className="max-w-[280px] truncate font-bold text-gray-950" title={book.title}>
                      {book.title}
                    </div>
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-650">{book.author}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-50 text-blue-600 border border-blue-100/50 capitalize">
                    {book.category}
                  </span>
                </td>
                <td className="p-4">
                  <div className="font-semibold text-gray-800">{book.userName}</div>
                  <div className="text-xs text-gray-400">{book.userEmail}</div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href={`/explore/${book._id}`}
                      className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-100 transition-all"
                    >
                      View
                    </Link>
                    <DeleteModal book={book} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📱 মোবাইল ও ট্যাবলেটের জন্য রেসপনসিভ কার্ড লেআউট (Visible on Mobile, Hidden on LG screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        {books?.map((book) => (
          <div 
            key={book._id} 
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
          >
            {/* বইয়ের মেইন ইনফো */}
            <div className="flex gap-4">
              <img
                src={book.image || "https://placehold.co/100x100?text=📚"}
                alt={book.title}
                className="w-16 h-20 object-cover rounded-xl border border-gray-100 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base text-gray-900 truncate" title={book.title}>
                  {book.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">By {book.author}</p>
                <div className="mt-2">
                  <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-blue-50 text-blue-600 border border-blue-100 capitalize inline-block">
                    {book.category}
                  </span>
                </div>
              </div>
            </div>

            {/* আপলোডার ইনফো */}
            <div className="bg-gray-50 p-3 rounded-xl text-xs border border-gray-100">
              <div className="text-gray-400 font-medium">Uploaded By:</div>
              <div className="font-semibold text-gray-800 truncate mt-0.5">{book.userName}</div>
              <div className="text-gray-500 truncate">{book.userEmail}</div>
            </div>

            {/* অ্যাকশন বাটনসমূহ */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
              <Link
                href={`/explore/${book._id}`}
                className="w-full py-2.5 text-xs font-bold text-center rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-100 transition-colors"
              >
                View Details
              </Link>
              <div className="w-full flex justify-end">
                {/* DeleteModal বাটনটি যাতে কার্ডের পুরো জায়গা ব্লক না করে */}
                <div className="w-full [&>button]:w-full text-center">
                  <DeleteModal book={book} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      {(!books || books.length === 0) && (
        <div className="text-center py-16 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <span className="text-4xl">📥</span>
          <p className="text-gray-500 text-base mt-2 font-medium">
            No items found in your store database.
          </p>
        </div>
      )}

    </div>
  );
};

export default ManageItem;