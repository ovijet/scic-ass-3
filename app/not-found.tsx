'use client';
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl md:text-9xl font-extrabold text-white">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-300">
          The page youre looking for doesnt exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => history.back()}
            className="rounded-xl border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}