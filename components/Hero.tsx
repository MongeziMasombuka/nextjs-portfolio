import Link from "next/link";

const Hero = () => {
  return (
    <header className="text-center py-20 px-4 bg-white dark:bg-gray-900 text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4 text-blue-500 dark:text-white">
        Hey, I&apos;m Mongezi 👋
      </h2>
      <p className="text-lg text-black dark:text-gray-300 max-w-2xl mx-auto mb-6">
        I&apos;m passionate about building clean, scalable web applications and
        turning ideas into impactful digital experiences. Currently seeking
        opportunities to grow as a developer and contribute to meaningful tech
        projects.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/projects"
          className="px-6 py-2 rounded transition hover:bg-blue-700 bg-blue-600 text-white"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-2 rounded transition hover:bg-blue-700 border border-blue-500 text-blue-600 hover:text-white"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
