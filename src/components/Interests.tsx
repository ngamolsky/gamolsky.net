import { motion } from "framer-motion";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { useProjects, Tag } from "../hooks/useProjects";
import { ProjectCard } from "./ProjectCard";
import { TAG_TO_COLOR_MAP } from "../utils/colors";

export const Interests = () => {
  const projects = useProjects();
  const [selectedTag, setSelectedTag] = React.useState<Tag>();
  return (
    <section
      id="interests"
      className="text-xl grid grid-cols-1 md:grid-cols-2 h-full w-full overflow-hidden justify-center"
    >
      <div className="max-w-xl flex flex-col justify-end gap-4 px-4 order-2 md:order-1 text-lg mb-4">
        <p>
          I am constantly working on a lot of different projects. My main
          interests are:{" "}
          {Object.keys(TAG_TO_COLOR_MAP).map((tag, index) => {
            const typedTag = tag as Tag;
            const color = TAG_TO_COLOR_MAP[typedTag];
            let className = "";
            if (color === "lightblue") {
              className = "text-lightblue";
            } else if (color === "yellow") {
              className = "text-yellow";
            } else if (color === "pink") {
              className = "text-pink";
            } else if (color === "green-500") {
              className = "text-green-500";
            } else if (color === "purple-500") {
              className = "text-purple-500";
            }
            return (
              <span className={`${className}`} key={tag}>
                <span className="dark:text-white text-black">
                  {index == Object.entries(TAG_TO_COLOR_MAP).length - 1 &&
                    "and "}
                </span>
                <span
                  className="capitalize  cursor-pointer"
                  onMouseOver={() => setSelectedTag(typedTag)}
                  onMouseLeave={() => setSelectedTag(undefined)}
                >
                  {tag}
                </span>
                {index != Object.entries(TAG_TO_COLOR_MAP).length - 1 && ", "}
              </span>
            );
          })}
          .
        </p>
        <p>
          Let me know if any of these spark your interest, always looking for
          collaborators!
        </p>
      </div>
      <div className="flex gap-8 overflow-scroll px-4 my-auto h-full items-end ml-8 order-1  md:order-2 md:grid md:grid-cols-2 md:gap-4 md:max-w-lg md:mx-auto md:p-4 ">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              selectedTag={
                selectedTag && project.tags.includes(selectedTag)
                  ? selectedTag
                  : undefined
              }
            />
          );
        })}
      </div>
    </section>
  );
};
