import type { Post, PostMeta } from "@/types";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type LatestPostsProps = {
  posts: PostMeta[];
  limit?: number;
};

const LatestPosts = ({ posts, limit = 3 }: LatestPostsProps) => {
  const sorted = [...posts].sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const latest = sorted.slice(0, limit);
  if (latest.length === 0) return null;
  return (
    <section className="max-w-6xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-blue-500 dark:text-white">
        {" "}
        Latest Posts
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white  dark:bg-gray-800 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-1">
              {post.title}
            </h3>

            <p className="text-sm text-black dark:text-gray-300">
              {post.excerpt}
            </p>

            <span className="block mt-3 text-xs text-gray-400">
              {new Date(post.date).toDateString()}
            </span>
          </Link>
        ))}
      </div>
      <Link
        href="/posts"
        className="flex items-center text-blue-400 dark:text-gray-200 hover:text-blue-500 mt-6 transition"
      >
        <FaArrowRight className="mr-2" /> To Posts
      </Link>
    </section>
  );
};

export default LatestPosts;
