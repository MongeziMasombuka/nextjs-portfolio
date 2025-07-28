//import Image from "next/image";
import Link from "next/link";

const AboutPreview = () => {
  return (
    <div className="bg-white dark:bg-gray-900 ">
      <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 mx-auto max-w-6xl">
        {/* <Image
        src="/images/profile.jpg"
        alt="profile"
        width={0}
        height={0}
        sizes="100vw"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
      /> */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500 dark:text-white mb-2">
            👋 About Me
          </h2>
          <p className="text-black dark:text-gray-200 mb-4 max-w 4xl">
            I&apos;m Mo — Final-year Computer Science student passionate about
            software development, seeking to contribute to impactful tech
            solutions and grow as a full-stack developer.
          </p>
          <Link
            href="/about"
            className="inline-block text-blue-400 hover:underline hover:text-blue-500 text-sm"
          >
            Learn More About Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPreview;
