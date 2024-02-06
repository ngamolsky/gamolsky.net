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
      className="text-xl flex h-full w-full overflow-hidden justify-center flex-col xl:flex-row p-4 xl:items-end md:justify-end"
    >
      <div className="w-full xl:w-5/6 flex flex-col justify-end gap-4 order-2 xl:order-1 text-md md:text-lg max-w-5xl">
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
      <div className="max-h-80 xl:max-h-none my-auto xl:mt-0 flex gap-8 overflow-scroll items-end p-4 order-1 xl:order-2 xl:grid xl:p-4 xl:grid-cols-3 w-full xl:max-w-3xl mx-auto xl:my-0 2xl:gap-8">
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
