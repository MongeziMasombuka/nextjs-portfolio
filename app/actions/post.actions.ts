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
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN!;
  const url = new URL("/posts-meta.json", baseUrl);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error("Failed to fetch data");

  const posts = await res.json();

  return posts;
};

// READ ONE
export const getPostBySlug = async (slug: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN!;
  const url = new URL("/posts-meta.json", baseUrl);

  const res = await fetch(url.href);

  if (!res.ok) throw new Error(`Failed to fetch post index: ${res.statusText}`);

  const index: PostMeta[] = await res.json();

  const postMeta = index.find((post) => post.slug === slug);

  if (!postMeta) throw new Error(`Post with slug "${slug}" not found`);

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
