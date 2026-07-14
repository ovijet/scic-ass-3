import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import BookDetailsPage from "@/app/component/BookDetailsPage";

// ১. বুক অবজেক্টের ইন্টারফেস তৈরি
export interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  images?: string[];
  category: string;
  language: string;
  pageCount: number;
  likesCount: number;
  favoritesCount: number;
  userName?: string;
  userEmail?: string;
}

// ২. params এর টাইপ নির্দিষ্ট করা
interface PageProps {
  params: Promise<{ id: string }>;
}

const BookDetails = async ({ params }: PageProps) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/addBook/${id}`,
    {
      cache: "no-store",
    }
  );
  const book: Book = await res.json();

  let relatedBooks: Book[] = [];
  try {
    const relatedRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/addBook?category=${book.category}`,
      {
        cache: "no-store",
      }
    );
    const allBooksOfCategory: Book[] = await relatedRes.json();
    relatedBooks = allBooksOfCategory
      .filter((b) => b._id !== id)
      .slice(0, 4);
  } catch (error) {
    console.log("Related books fetch করতে সমস্যা হয়েছে:", error);
  }

  return (
    <BookDetailsPage book={book} relatedBooks={relatedBooks} />
  );
};

export default BookDetails;