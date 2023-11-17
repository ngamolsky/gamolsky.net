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
    <div id="interests" className="text-xl gap-4 flex h-full">
      <div className="max-w-xl flex flex-col justify-end gap-4">
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
              <span
                className={`${className} cursor-pointer`}
                key={tag}
                onMouseOver={() => setSelectedTag(typedTag)}
                onMouseLeave={() => setSelectedTag(undefined)}
              >
                <span className="text-white">
                  {index == Object.entries(TAG_TO_COLOR_MAP).length - 1 &&
                    "and "}
                </span>
                <span className="capitalize">{tag}</span>
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
      <div className="w-full my-auto h-full overflow-scroll">
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto overflow-visible p-4 h-full">
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
      </div>
    </div>
  );
};
