import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = async ({
  projects,
  count = 4,
}: FeaturedProjectsProps) => {
  if (projects.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-blue-500 dark:text-gray-200">
        Featured Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link
        href="/projects"
        className="flex items-center text-blue-400 dark:text-gray-200 hover:text-blue-500 mt-6 transition"
      >
        <FaArrowRight className="mr-2" /> To Projects
      </Link>
    </section>
  );
};

export default FeaturedProjects;
