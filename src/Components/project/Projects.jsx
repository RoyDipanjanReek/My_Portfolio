import Title from "../layout/Title";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-4 py-20 border-b-[1px] border-b-white"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Visit my project and keep your Feedback"
          des=" My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-14 gap-6 pt-10">
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
