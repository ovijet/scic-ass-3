import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";  

// TypeScript interface definitions
interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  image?: string;
  category: string;
  language: string;
  pageCount: number;
}

interface ExploreProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    language?: string;
    sort?: string;
    page?: string;
  }>;
}

export const Explore = async ({ searchParams }: ExploreProps) => {
 
  const params = await searchParams;
  const search = params.search || "";
  const category = params.category || "";
  const language = params.language || "";
  const sort = params.sort || "";
  const page = parseInt(params.page || "1", 10);
  const limit = 6; 

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addBook`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    return <div className="text-center py-12 text-red-500">Failed to load books.</div>;
  }

  let books: Book[] = await res.json();

 
  if (search) {
    books = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (category) {
    books = books.filter((book) => book.category.toLowerCase() === category.toLowerCase());
  }
  if (language) {
    books = books.filter((book) => book.language.toLowerCase() === language.toLowerCase());
  }


  if (sort === "pages-asc") {
    books.sort((a, b) => a.pageCount - b.pageCount);
  } else if (sort === "pages-desc") {
    books.sort((a, b) => b.pageCount - a.pageCount);
  }

  
  const totalBooks = books.length;
  const totalPages = Math.ceil(totalBooks / limit);
  const startIndex = (page - 1) * limit;
  const paginatedBooks = books.slice(startIndex, startIndex + limit);

  
  const allCategories = Array.from(new Set(books.map((b) => b.category)));
  const allLanguages = Array.from(new Set(books.map((b) => b.language)));

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Explore Books 📚
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Discover amazing books, novels, and resources shared by our community.
          </p>
        </div>

        
        <form method="GET" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
         
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700">Search</label>
            <input
              type="text"
              name="search"
              defaultValue={search}
              placeholder="Title or Author..."
              className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-purple-500 text-gray-800"
            />
          </div>

         
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700">Category</label>
            <select
              name="category"
              defaultValue={category}
              className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-purple-500 text-gray-800 capitalize"
            >
              <option value="">All Categories</option>
              {allCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700">Language</label>
            <select
              name="language"
              defaultValue={language}
              className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-purple-500 text-gray-800 capitalize"
            >
              <option value="">All Languages</option>
              {allLanguages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

        
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700">Sort By</label>
            <select
              name="sort"
              defaultValue={sort}
              className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-purple-500 text-gray-800"
            >
              <option value="">Default</option>
              <option value="pages-asc">Pages: Low to High</option>
              <option value="pages-desc">Pages: High to Low</option>
            </select>
          </div>

      
          <div className="flex gap-2">
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-sm h-[38px]">
              Apply
            </Button>
            <Link href="/explore" className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl text-sm flex items-center justify-center h-[38px] text-center">
              Clear
            </Link>
          </div>
        </form>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {paginatedBooks?.map((book: Book) => (
            <div
              key={book._id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden justify-between"
            >
              <div>
               
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

                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-purple-700 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm border border-purple-100/50">
                    {book.category}
                  </span>
                </div>

               
                <div className="p-5 flex flex-col flex-grow">
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

                  <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
                    {book.description}
                  </p>

                  <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span>📄 {book.pageCount} Pages</span>
                    </div>
                    <div className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 capitalize">
                      {book.language}
                    </div>
                  </div>
                </div>
              </div>

            
              <div className="p-5 pt-0">
                <Link
                  href={`/explore/${book._id}`}
                  aria-label={`View details of ${book.title}`}
                  className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {(!paginatedBooks || paginatedBooks.length === 0) && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-lg">
              No books found matching your criteria.
            </p>
          </div>
        )}

       
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <Link
              href={{
                query: { ...params, page: Math.max(page - 1, 1) },
              }}
              className={`px-4 py-2 text-sm font-semibold border rounded-xl transition-all ${
                page === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Previous
            </Link>
            
            <span className="text-sm font-medium text-gray-600">
              Page {page} of {totalPages}
            </span>

            <Link
              href={{
                query: { ...params, page: Math.min(page + 1, totalPages) },
              }}
              className={`px-4 py-2 text-sm font-semibold border rounded-xl transition-all ${
                page === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Next
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;