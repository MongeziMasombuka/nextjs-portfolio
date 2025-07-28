import { getAllProjects } from "../../actions/project.actions";
import Projects from "./Projects";

const ProjectsPage = async () => {
  const projects = await getAllProjects();
  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
};

export default ProjectsPage;
