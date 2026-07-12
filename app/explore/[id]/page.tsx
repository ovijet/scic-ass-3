
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

  return (
    <BookDetailsPage book={book}/>
  );
};

export default BookDetails;