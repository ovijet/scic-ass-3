import React from "react";
import Link from "next/link";
import { DeleteModal } from "../component/DeleteModal";

// FIXED: Define Book interface for proper TypeScript validation
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
  // Fetching data from API
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addBook`, {
    cache: "no-store",
  });
  
  // FIXED: Explicitly typecast the array of books
  const books: Book[] = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Items</h1>
        <p className="text-gray-500 font-medium">
          Total Books: {books?.length || 0}
        </p>
      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-gray-100">
        <table className="table w-full text-left border-collapse">
          {/* Table Head */}
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="p-4 font-semibold">Book Title</th>
              <th className="p-4 font-semibold">Author</th>
              <th className="p-4 font-semibold hidden md:table-cell">
                Category
              </th>
              <th className="p-4 font-semibold hidden sm:table-cell">
                Uploader
              </th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-50 text-gray-700">
            {books?.map((book) => (
              <tr
                key={book._id}
                className="hover:bg-gray-50/80 transition-colors"
              >
                {/* Title & Image */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12 relative bg-gray-100">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 line-clamp-1">
                        {book.title}
                      </div>
                      <div className="text-xs text-gray-400 sm:hidden">
                        By {book.author}
                      </div>
                    </div>
                  </div>
                  {/* FIXED: Removed the accidental 'ui' text from here */}
                </td>

                {/* Author */}
                <td className="p-4 font-medium text-gray-600">{book.author}</td>

                {/* Category */}
                <td className="p-4 hidden md:table-cell">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600">
                    {book.category}
                  </span>
                </td>

                {/* Uploader info */}
                <td className="p-4 hidden sm:table-cell">
                  <div className="text-sm font-medium">{book.userName}</div>
                  <div className="text-xs text-gray-400">{book.userEmail}</div>
                </td>

                {/* Edit / Delete Action Buttons */}
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2">
                    {/* View Button */}
                    <Link
                      href={`/explore/${book._id}`}
                      className="btn btn-sm bg-blue-50 hover:bg-blue-100 border-none text-blue-600 font-medium normal-case px-4 rounded-xl"
                    >
                      View
                    </Link>
                    {/* Edit Button */}
                    {/* <Link
                      href={`/manage-items/edit/${book._id}`}
                      className="btn btn-sm bg-amber-50 hover:bg-amber-100 border-none text-amber-700 font-medium normal-case px-4 rounded-xl"
                    >
                      Edit
                    </Link> */}

                    {/* Delete Button */}
                    <DeleteModal book={book} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;