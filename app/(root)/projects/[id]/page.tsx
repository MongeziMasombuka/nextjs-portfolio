import { getProjectById } from "@/app/actions/project.actions";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const ProjectDetailsPage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await props.params;

  const project = await getProjectById(id);
  if (!project) notFound();
  return (
    <>
      <Link
        href="/projects"
        className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition"
      >
        <FaArrowLeft className="mr-2" /> Back To Projects
      </Link>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <Image
            src={project.image}
            alt={project.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-4">
            {project.title}
          </h1>
          <p className="text-black dark:text-gray-300 text-sm mb-4">
            {/* {new Date(project.date).toLocaleDateString()}*/}
            <a
              href={project.url}
              target="_blank"
              className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 mr-2 rounded transition"
            >
              View Live Site →
            </a>
            •{"  "}
            {project.category}
          </p>
          <p className="text-black dark:text-gray-200 mb-6">
            {project.description}
          </p>
          <h3 className="text-xl font-semibold text-blue-500 dark:text-white my-2">
            Programming Languages
          </h3>
          <ul className="flex flex-wrap gap-4 text-sm text-white dark:text-gray-300">
            {project.programmingLanguages.map((language) => (
              <li
                key={language}
                className="bg-blue-700 dark:bg-gray-700 px-3 py-1 rounded-md"
              >
                {language}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-blue-500 dark:text-white my-2">
            Frameworks and Libraries
          </h3>
          <ul className="flex flex-wrap gap-4 text-sm text-white dark:text-gray-300">
            {project.frameworksAndLibraries.map((framework) => (
              <li
                key={framework}
                className="bg-blue-700 dark:bg-gray-700  px-3 py-1 rounded-md"
              >
                {framework}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-blue-500 dark:text-white my-2">
            Database Technologies
          </h3>
          <ul className="flex flex-wrap gap-4 text-sm text-white dark:text-gray-300">
            {project.databaseTechnologies.map((database) => (
              <li
                key={database}
                className="bg-blue-700 dark:bg-gray-700 px-3 py-1 rounded-md"
              >
                {database}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
