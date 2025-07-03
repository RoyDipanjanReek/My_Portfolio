import React from "react";
import { blog, image, learning } from "../../assets/Index.js";

const projects = [
  {
    // Learning Progress Tracker data is here
    id: "1",
    title: "Learning Progress Tracker",
    des: "Develop a backend system that tracks user's progress in various courses, allowing users to view and update their learning milestones. ",
    src: learning,
    githubURL: "https://github.com/RoyDipanjanReek/Learning_Progress_Tracker",
    deployURL: "",
  },
  {
    // Bloggife Project data is here
    id: "2",
    title: "Bloggife",
    des: "A full-stack, modern Blog Application built with Next.js that lets users create, read, update, and delete blog posts.",
    src: blog,
    githubURL: "https://github.com/RoyDipanjanReek/Bolggife",
    deployURL: "",
  },
  {
    // Resize Image Project data is here
    id: "3",
    title: "Resize Image",
    des: "A full-stack web app for resizing and compressing images/videos effortlessly.",
    src: image,
    githubURL: "https://github.com/RoyDipanjanReek/Resize-Image",
    deployURL: "",
  },
];

function ProjectCard() {
  const handleRedirect = (githubURL) => {
    window.open(githubURL);
  };

  return (
    <React.Fragment>
      {projects.map(({ id, des, src, title, githubURL }) => (
        <div
          onClick={() => handleRedirect(githubURL)}
          key={id}
          className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 border-y-2 border-white py-5"
        >
          <div
            id={id}
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer "
            onClick={() => handleRedirect(githubURL)}
          >
            <img className="w-full h-60 object-cover" src={src} alt="" />
          </div>
          <div className="w-full mt-5 flex flex-wrap gap-6">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-2xl">{title}</h3>
            </div>
            <div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                {" "}
                {des}
              </p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default ProjectCard;
