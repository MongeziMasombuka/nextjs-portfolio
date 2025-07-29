"use client";

import { addProject } from "@/app/actions/project.actions";

const ProjectAddForm = () => {
  const programmingLanguages = ["JavaScript", "TypeScript", "Java", "Python"];

  const frameworksAndLibraries = [
    "Nodejs",
    "Expressjs",
    "React",
    "Nextjs",
    "Mongoose",
    "Prisma",
  ];

  const databaseTechnologies = ["MongoDB", "PostgreSQL", "MySQL"];
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[./\s]+/g, "_")
      .replace(/[^\w_]/g, "");

  return (
    <form action={addProject}>
      <h2 className="text-3xl text-center font-semibold mb-6 text-blue-400 dark:text-white">
        Add Project
      </h2>

      <div className="mb-4">
        <label
          htmlFor="type"
          className="block text-black dark:text-gray-300 font-bold mb-2"
        >
          Project Type
        </label>
        <select
          id="type"
          name="type"
          className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full py-2 px-3"
          required
        >
          <option value="Fullsatck">Fullsatck</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-black dark:text-gray-300 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border  w-full py-2 px-3 mb-2  border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Project Name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-black dark:text-gray-300 font-bold mb-2">
          Url
        </label>
        <input
          type="text"
          id="url"
          name="url"
          className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full py-2 px-3 mb-2"
          placeholder="https://example.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black dark:text-gray-300 font-bold mb-2">
          Github
        </label>
        <input
          type="text"
          id="github"
          name="github"
          className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full py-2 px-3 mb-2"
          placeholder="https://github.com/janedoe/portfolio-site"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-black dark:text-gray-300 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full py-2 px-3"
          rows={4}
          placeholder="Add an optional description of your project"
        ></textarea>
      </div>

      {/* Programming Languages */}
      <div className="mb-4">
        <label className="block text-black dark:text-gray-300 font-bold mb-2">
          Programming Languages
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {programmingLanguages.map((lang) => {
            const id = `language_${slugify(lang)}`;
            return (
              <div key={lang}>
                <input
                  type="checkbox"
                  id={id}
                  name="programming_languages"
                  value={lang}
                  className="mr-2"
                />
                <label htmlFor={id}>{lang}</label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Frameworks and Libraries */}
      <div className="mb-4">
        <label className="block text-black dark:text-gray-300 font-bold mb-2">
          Frameworks and Libraries
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {frameworksAndLibraries.map((fw) => {
            const id = `framework_${slugify(fw)}`;
            return (
              <div key={fw}>
                <input
                  type="checkbox"
                  id={id}
                  name="frameworks_and_libraries"
                  value={fw}
                  className="mr-2"
                />
                <label htmlFor={id}>{fw}</label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Database Technologies  */}
      <div className="mb-4">
        <label className="block text-black dark:text-gray-300 font-bold mb-2">
          Database Technologies
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {databaseTechnologies.map((db) => {
            const id = `database_${slugify(db)}`;
            return (
              <div key={db}>
                <input
                  type="checkbox"
                  id={id}
                  name="database_technologies"
                  value={db}
                  className="mr-2"
                />
                <label htmlFor={id}>{db}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="images"
          className="block text-black dark:text-gray-300 font-bold mb-2"
        >
          Image (Select one image)
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full py-2 px-3"
          accept="image/*"
          //   required
        />
      </div>
      <div className="mb-4 flex items-center">
        <input type="checkbox" id="featured" name="featured" className="mr-2" />
        <label
          htmlFor="featured"
          className="text-black dark:text-gray-300 font-bold"
        >
          Featured
        </label>
      </div>

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Project
        </button>
      </div>
    </form>
  );
};

export default ProjectAddForm;
