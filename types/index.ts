import mongoose from "mongoose";

export type ProjectDB = {
  _id?: mongoose.Types.ObjectId;
  owner: mongoose.Types.ObjectId;
  category: string;
  title: string;
  url: string;
  description: string;
  programmingLanguages: string[];
  frameworksAndLibraries: string[];
  databaseTechnologies: string[];
  featured: boolean;
  image: string;
};
export type ProjectDBFetch = {
  _id: mongoose.Types.ObjectId;
  owner: mongoose.Types.ObjectId;
  category: string;
  title: string;
  url: string;
  description: string;
  programmingLanguages: string[];
  frameworksAndLibraries: string[];
  databaseTechnologies: string[];
  featured: boolean;
  image: string;
};

export type Project = {
  id: string;
  owner: string;
  category: string;
  title: string;
  url: string;
  description: string;
  programmingLanguages: string[];
  frameworksAndLibraries: string[];
  databaseTechnologies: string[];
  featured: boolean;
  image: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  date: string;
  image?: string;
};

export type PostMeta = {
  id: string;
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  date: string;
  image?: string;
};
