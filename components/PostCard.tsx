import type { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="bg-white border  dark:border-gray-700 border-gray-300  dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-2xl font-semibold text-blue-500">{post.title}</h3>
      {/* <p className="text-sm text-gray-400 mb-2">
        {new Date(post.date).toDateString()}
      </p> */}
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <p className="text-black dark:text-gray-300 mb-4">{post.excerpt}</p>
      <Link
        href={`/posts/${post.slug}`}
        className="text-blue-400 text-sm hover:underline"
      >
        Read More →
      </Link>
    </article>
  );
};

export default PostCard;
