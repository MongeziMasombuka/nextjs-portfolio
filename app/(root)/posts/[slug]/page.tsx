import ReactMarkdown from "react-markdown";
import Link from "next/link";
//import Image from "next/image";
import { getPostBySlug } from "@/app/actions/post.actions";

const BlogPostDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const { postMeta: post, markdown } = await getPostBySlug(slug);
  //console.log(postMeta, markdown);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12  bg-white dark:bg-gray-900 shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-blue-400 mb-2">{post.title}</h1>
      {/* <p className="text sm text-gray-400 mb-6">
        {new Date(post.date).toDateString()}
      </p> */}

      {/* <Image
        src={post.image}
        alt={post.title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-64 object-cover mb-4 "
      /> */}

      <div className="prose dark:prose-invert max-w-none mb-12">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

      <Link
        href="/posts"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ← Back To Posts
      </Link>
    </div>
  );
};

export default BlogPostDetailsPage;
