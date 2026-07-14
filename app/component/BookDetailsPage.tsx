'use client';
import { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import { Book } from "../explore/[id]/page";
// import { Book } from "../book-details-page-path-or-same-file"; // আপনার প্রজেক্ট অনুযায়ী Book টাইপ ইম্পোর্ট করুন অথবা নিচে নতুন করে ডিফাইন করে নিন।

interface BookDetailsPageProps {
  book: Book;             // 👈 কোলন (:) দিয়ে টাইপ বলে দিতে হবে
  relatedBooks?: Book[];  // 👈 কোলন (:) দিয়ে টাইপ বলে দিতে হবে
}

const BookDetailsPage = ({ book, relatedBooks = [] }: BookDetailsPageProps) => {
    const [mainImage, setMainImage] = useState<string>(book.image);

    return (
        <section className="max-w-7xl mx-auto px-5 py-16">
            <div className="grid gap-10 lg:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* Left Side: Images Section */}
                <div className="p-8 flex flex-col gap-4 bg-gray-50/50">
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-md bg-white">
                        <Image
                            src={mainImage}
                            alt={book.title}
                            fill
                            className="object-cover transition-all duration-300"
                            priority
                        />
                    </div>

                    {book.images && book.images.length > 0 && (
                        <div className="flex gap-3 overflow-x-auto py-2">
                            <div 
                                className={`relative h-20 w-20 flex-shrink-0 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${mainImage === book.image ? 'border-blue-600 scale-95' : 'border-transparent'}`}
                                onClick={() => setMainImage(book.image)}
                            >
                                <Image src={book.image} alt="thumb" fill className="object-cover" />
                            </div>
                            
                            {book.images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`relative h-20 w-20 flex-shrink-0 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${mainImage === img ? 'border-blue-600 scale-95' : 'border-transparent'}`}
                                    onClick={() => setMainImage(img)}
                                >
                                    <Image
                                        src={img}
                                        alt={`view-${index}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Side: Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block w-fit rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                        {book.category}
                    </span>

                    <h1 className="text-4xl font-bold mt-4">
                        {book.title}
                    </h1>

                    <p className="text-gray-500 mt-2 text-lg">
                        By {book.author}
                    </p>

                    <p className="mt-6 leading-8 text-gray-700">
                        {book.description}
                    </p>

                    <div className="grid grid-cols-2 gap-5 mt-8">
                        <div className="rounded-xl border p-4 bg-white shadow-sm">
                            <p className="text-sm text-gray-500">Language</p>
                            <h3 className="font-semibold">{book.language}</h3>
                        </div>

                        <div className="rounded-xl border p-4 bg-white shadow-sm">
                            <p className="text-sm text-gray-500">Pages</p>
                            <h3 className="font-semibold">{book.pageCount}</h3>
                        </div>

                        <div className="rounded-xl border p-4 bg-white shadow-sm">
                            <p className="text-sm text-gray-500">Likes</p>
                            <h3 className="font-semibold">❤️ {book.likesCount}</h3>
                        </div>

                        <div className="rounded-xl border p-4 bg-white shadow-sm">
                            <p className="text-sm text-gray-500">Favorites</p>
                            <h3 className="font-semibold">⭐ {book.favoritesCount}</h3>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="font-semibold text-lg">Uploaded By</h3>
                        <p className="text-gray-600">{book.userName || "Unknown"}</p>
                        <p className="text-gray-500 text-sm">{book.userEmail || "No Email"}</p>
                    </div>

                    <div className="flex gap-4 mt-10">
                        {/* <Button color="primary" className="px-10 font-medium shadow-lg shadow-blue-500/20">
                            Borrow Book
                        </Button> */}
                        {/* <Link href="/books" passHref>
                            <Button variant="bordered">
                                Back
                            </Button>
                        </Link> */}
                    </div>
                </div>
            </div>

            {/* Related Items Section */}
            {relatedBooks.length > 0 && (
                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-8 text-gray-800">Related Books You May Like</h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {relatedBooks.map((relBook) => (
                            <div key={relBook._id} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col justify-between">
                                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                                    <Image src={relBook.image} alt={relBook.title} fill className="object-cover" />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{relBook.category}</span>
                                    <h4 className="font-bold mt-2 text-gray-900 line-clamp-1">{relBook.title}</h4>
                                    <p className="text-sm text-gray-500 mt-1">By {relBook.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default BookDetailsPage;