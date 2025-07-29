const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 shadow-md rounded-md bg-white  dark:bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-10">
        {/* <Image
          src="/images/profile.jpg"
          alt="profile"
          width={0}
          height={0}
          sizes="100vw"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        /> */}
        <div>
          <h1 className="text-3xl font-bold text-blue-400 dark:text-white mb-2">
            About Me
          </h1>
          <p className="text-black dark:text-gray-300 text-lg">
            Hi there, I&apos;m Mongezi. I&apos;m a final-year Computer Science
            student studying at Tshwane University of Technology with a strong
            passion for software development and problem-solving. I enjoy
            building clean, scalable, user-focused web applications and
            constantly exploring new technologies to grow as a full-stack
            developer.
          </p>
          <br />
          <p className="text-black dark:text-gray-300 text-lg">
            With hands-on experience in both front-end and back-end development,
            I&apos;m eager to collaborate with dynamic teams, contribute to
            impactful tech solutions, and turn innovative ideas into real-world
            digital experiences. I&apos;m currently seeking opportunities to
            sharpen my skills, work on meaningful projects, and make a
            difference through technology.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-500 dark:text-white ">
          Education
        </h2>
        <h3 className="text-xl font-semibold text-blue-400 dark:text-white my-2">
          Diploma in Computer Science
        </h3>
        <p className="text-black dark:text-gray-300 leading-relaxed">
          Tshwane University of Technology — Pretoria — Final Year
        </p>
        <h3 className="text-xl font-semibold text-blue-400 dark:text-white my-2">
          Major Fields:
        </h3>
        <p className="text-black dark:text-gray-300 leading-relaxed">
          Software Engineering (Programming): Java, Java JEE (Servlets, JSP,
          EJB) Mobile Development: Android (Java/Kotlin) Business Analysis and
          Modelling: UML, BPMN, Agile methodologies, requirement gathering tools
          etc. Database Development and Administration: Oracle, PL/SQL
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-500 dark:text-white mb-4">
          TOOLS & TECHNOLOGIES
        </h2>
        <h3 className="text-xl font-semibold text-blue-400 dark:text-white my-2 mt-4">
          Programming Languages:
        </h3>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          {[
            "JavaScript",
            "Java",
            "Python",
            "TypeScript",
            "HTML",
            "CSS",
            "SQL",
            "PL/SQL",
          ].map((tech) => (
            <li
              key={tech}
              className="bg-blue-700 dark:bg-gray-700 px-3  py-1 rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold text-blue-400 dark:text-white my-2">
          Frameworks & Libraries:
        </h3>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          {[
            "Node.js",
            "Express.js",
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "Mongoose",
            "Prisma",
            "Django",
            "Flask",
          ].map((tech) => (
            <li
              key={tech}
              className="bg-blue-700 dark:bg-gray-700  px-3 py-1 rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold text-blue-400 dark:text-white my-2">
          Database Technologies:
        </h3>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          {["Oracle", "MongoDB", "PostgreSQL", "MySQL"].map((tech) => (
            <li
              key={tech}
              className="bg-blue-700 dark:bg-gray-700 px-3  py-1 rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold text-blue-500 dark:text-white my-2">
          Operating Systems:
        </h3>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          {["Linux", "Windows"].map((tech) => (
            <li
              key={tech}
              className="bg-blue-700 dark:bg-gray-700 px-3  py-1 rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-500 dark:text-white ">
          Contact
        </h2>
        <h3 className="text-xl font-semibold text-blue-400 dark:text-white my-2">
          Email
        </h3>
        <a
          href="mailto:momasombuka@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-gray-300 leading-relaxed"
        >
          momasombuka@gmail.com
        </a>
        <h3 className="text-xl font-semibold text-blue-400 dark:text-white my-2">
          GitHub
        </h3>
        <a
          href="https://github.com/MongeziMasombuka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-gray-300 leading-relaxed"
        >
          git/MongeziMasombuka
        </a>
        <h3 className="text-xl font-semibold text-blue-400 dark:text-white my-2">
          LinkedIn
        </h3>
        <a
          href="https://www.linkedin.com/in/mongezi-masombuka/ "
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-gray-300 leading-relaxed"
        >
          in/mongezi-masombuka/
        </a>
      </div>

      <div className="flex gap">
        <div className="flex gap-4">
          <a
            href="/CV.pdf"
            download
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition"
          >
            Download CV
          </a>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-2 rounded transition"
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
