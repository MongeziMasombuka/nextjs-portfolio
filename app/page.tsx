import AboutPreview from "@/components/AboutPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import LatestPosts from "@/components/LatestPosts";
import { getFeaturedProjects } from "@/app/actions/project.actions";
import { getPosts } from "./actions/post.actions";
import Hero from "@/components/Hero";

const HomePage = async () => {
  const projects = await getFeaturedProjects();
  const posts = await getPosts();
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <FeaturedProjects projects={projects} count={2} />

        <LatestPosts posts={posts} />
      </section>
      <AboutPreview />
    </>
  );
};
export default HomePage;
