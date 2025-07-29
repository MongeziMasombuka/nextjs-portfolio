"use server";

import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Project from "@/models/Project";
import type {
  Project as ProjectType,
  ProjectDB,
  ProjectDBFetch,
} from "@/types";
import mongoose from "mongoose";

// CREATE
export const addProject = async (formData: FormData) => {
  await connectDB();
  const getString = (key: string) => formData.get(key) as string;
  const getStrings = (key: string) => formData.getAll(key) as string[];

  const userId = new mongoose.Types.ObjectId("64e123abc456def789012345");

  const imageFile = formData.get("image");

  if (!(imageFile instanceof File)) {
    throw new Error("No valid image file provided.");
  }

  const imageBuffer = await imageFile.arrayBuffer();
  const imageArray = Array.from(new Uint8Array(imageBuffer));
  const imageData = Buffer.from(imageArray);
  const imageBase64 = imageData.toString("base64");

  const uploadResult = await cloudinary.uploader.upload(
    `data:image/png;base64,${imageBase64}`,
    {
      folder: "portfolio",
    }
  );

  const projectData: ProjectDB = {
    owner: userId,
    category: getString("type"),
    title: getString("title"),
    url: getString("url"),
    github: getString("github"),
    description: getString("description"),
    programmingLanguages: getStrings("programming_languages"),
    frameworksAndLibraries: getStrings("frameworks_and_libraries"),
    databaseTechnologies: getStrings("database_technologies"),
    featured: getString("featured") === "on",
    image: uploadResult.secure_url,
  };

  const newProject = new Project(projectData);
  await newProject.save();
};
// READ ALL
export const getAllProjects = async () => {
  await connectDB();
  const rawProjects = await Project.find().lean<ProjectDB[]>();

  const projects = rawProjects.map((p) => ({
    id: p._id!.toString(),
    owner: p.owner.toString(),
    title: p.title,
    description: p.description,
    category: p.category,
    programmingLanguages: p.programmingLanguages,
    frameworksAndLibraries: p.frameworksAndLibraries,
    databaseTechnologies: p.databaseTechnologies,
    image: p.image,
    url: p.url,
    github: p.github,

    featured: p.featured,
  }));

  return projects;
};

export const getFeaturedProjects = async () => {
  await connectDB();
  const featuredProjects = await Project.find({ featured: true }).lean<
    ProjectDB[]
  >();
  const projects = featuredProjects.map((p) => ({
    id: p._id!.toString(),
    owner: p.owner.toString(),
    title: p.title,
    description: p.description,
    category: p.category,
    programmingLanguages: p.programmingLanguages,
    frameworksAndLibraries: p.frameworksAndLibraries,
    databaseTechnologies: p.databaseTechnologies,
    image: p.image,
    url: p.url,
    github: p.github,
    featured: p.featured,
  }));

  return projects;
};

//READ RECENT
export const getRecentProjects = async () => {
  await connectDB();
  return await Project.find().sort({ created: -1 }).limit(3).lean();
};

// READ ONE
export const getProjectById = async (id: string) => {
  await connectDB();
  const rawProject = await Project.findById(id).lean<ProjectDBFetch>();

  if (!rawProject) {
    throw new Error(`Project with ID ${id} not found`);
  }

  const project: ProjectType = {
    id: rawProject._id.toString(),
    owner: rawProject.owner.toString(),
    category: rawProject.category,
    title: rawProject.title,
    url: rawProject.url,
    github: rawProject.github,
    description: rawProject.description,
    programmingLanguages: rawProject.programmingLanguages,
    frameworksAndLibraries: rawProject.frameworksAndLibraries,
    databaseTechnologies: rawProject.databaseTechnologies,
    featured: rawProject.featured,
    image: rawProject.image,
  };

  return project;
};

// UPDATE
export const updateProject = async (
  id: string,
  updates: Partial<{
    title: string;
    description: string;
    image: string;
    url: string;
    date: string;
    category: string;
    featured: boolean;
  }>
) => {
  await connectDB();
  return await Project.findByIdAndUpdate(id, updates, { new: true });
};

// DELETE
export const deleteProject = async (id: string) => {
  await connectDB();
  return await Project.findByIdAndDelete(id);
};
