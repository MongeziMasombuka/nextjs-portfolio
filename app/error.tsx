"use client";
import { FaExclamationCircle } from "react-icons/fa";
import Link from "next/link";

const ErrorPage = ({ error }: { error: Error }) => {
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-[70vh]">
      <div className="flex justify-center">
        <FaExclamationCircle className="text-blue-400 text-8xl fa-5x" />
      </div>
      <h2 className="text-2xl font-semibold text-black dark:text-gray-100 mb-2">
        Something Went Wrong
      </h2>
      <p className="text-gray-400 mb-6 max-w-md">{error.toString()}</p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
