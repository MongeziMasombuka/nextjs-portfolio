"use server";

import connectDB from "@/config/database";
import Post from "@/models/Post";
import { PostMeta } from "@/types";
import path from "path";
import fs from "fs/promises";

// CREATE
export const createPost = async (data: {
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  date: string;
  image: string;
}) => {
  await connectDB();
  const post = await Post.create(data);
  return post;
};

// READ ALL
export const getPosts = async () => {
  const filePath = path.join(process.cwd(), "public", "posts-meta.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const posts = JSON.parse(fileContents);
  return posts;
};

// READ ONE
export const getPostBySlug = async (slug: string) => {
  // Read posts-meta.json directly from file system
  const indexPath = path.join(process.cwd(), "public", "posts-meta.json");
  const indexContent = await fs.readFile(indexPath, "utf8");
  const index: PostMeta[] = JSON.parse(indexContent);

  const postMeta = index.find((post) => post.slug === slug);

  if (!postMeta) throw new Error(`Post with slug "${slug}" not found`);

  // Read markdown file for the post
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const markdown = await fs.readFile(filePath, "utf8");

  return { postMeta, markdown };
};

// UPDATE
export const updatePost = async (
  slug: string,
  updates: Partial<{
    title: string;
    body: string;
    excerpt: string;
    date: string;
    image: string;
  }>
) => {
  await connectDB();
  return await Post.findOneAndUpdate({ slug }, updates, { new: true });
};

// DELETE
export const deletePost = async (slug: string) => {
  await connectDB();
  return await Post.findOneAndDelete({ slug });
};
