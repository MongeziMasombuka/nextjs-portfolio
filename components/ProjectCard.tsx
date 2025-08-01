"use client";
//import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { useRouter } from "next/navigation";

const ProjectCard = ({ project }: { project: Project }) => {
  const router = useRouter();
  return (
    <div
      className="block transform transition duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      <div className="bg-white dark:bg-gray-800 border border-gray-300  dark:border-gray-700 rounded-lg overflow-hidden shadow-md transition hover:shadow-md">
        <Image
          src={project.image}
          alt={project.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-40 object-cover"
        />
        <div className="p-5">
          <h3 className="text-3xl font-semibold text-blue-400 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-black dark:text-gray-300 mb-2">
            {project.description}
          </p>
          <span>{project.category}</span>
          <div className="flex justify-between items-center text-sm text-blue-400 dark:text-gray-400 mt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-400 hover:text-blue-400 transition"
            >
              View GitHub Repo →
            </a>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-400 hover:text-blue-400 transition"
              >
                View Live Site →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
