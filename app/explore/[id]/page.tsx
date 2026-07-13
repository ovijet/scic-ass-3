import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import BookDetailsPage from "@/app/component/BookDetailsPage";

const BookDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/addBook/${id}`,
    {
      cache: "no-store",
    }
  );
  const book = await res.json();

  
  let relatedBooks = [];
  try {
    const relatedRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/addBook?category=${book.category}`,
      {
        cache: "no-store",
      }
    );
    const allBooksOfCategory = await relatedRes.json();
    relatedBooks = allBooksOfCategory
      .filter((b) => b._id !== id)
      .slice(0, 4);
  } catch (error) {
    console.log("Related books fetch করতে সমস্যা হয়েছে:", error);
  }

  return (
    <BookDetailsPage book={book} relatedBooks={relatedBooks} />
  );
};

export default BookDetails;