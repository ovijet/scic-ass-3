'use client';
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

const BookDetailsPage = ({book}) => {
    return (
          <section className="max-w-7xl mx-auto px-5 py-16">
      <div className="grid gap-10 lg:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Image */}
        <div className="relative h-[600px] w-full">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
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

            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-500">
                Language
              </p>
              <h3 className="font-semibold">
                {book.language}
              </h3>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-500">
                Pages
              </p>
              <h3 className="font-semibold">
                {book.pageCount}
              </h3>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-500">
                Likes
              </p>
              <h3 className="font-semibold">
                ❤️ {book.likesCount}
              </h3>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-500">
                Favorites
              </p>
              <h3 className="font-semibold">
                ⭐ {book.favoritesCount}
              </h3>
            </div>

          </div>

          <div className="mt-8">

            <h3 className="font-semibold text-lg">
              Uploaded By
            </h3>

            <p className="text-gray-600">
              {book.userName}
            </p>

            <p className="text-gray-500 text-sm">
              {book.userEmail}
            </p>

          </div>

          <div className="flex gap-4 mt-10">

            <Button
              color="primary"
              className="px-10"
            >
              Borrow Book
            </Button>

            <Button
              as={Link}
              href="/books"
              variant="bordered"
            >
              Back
            </Button>

          </div>

        </div>
      </div>
    </section>
    );
};

export default BookDetailsPage;