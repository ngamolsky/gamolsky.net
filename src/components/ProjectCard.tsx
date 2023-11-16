import * as React from "react";
import { Project, Tag } from "../hooks/useProjects";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { TAG_TO_COLOR_MAP } from "../utils/colors";

export const ProjectCard = ({
  project,
  index,
  selectedTag,
}: {
  project: Project;
  index: number;
  selectedTag?: Tag;
}) => {
  const { imageData, notionLink, githubLink, actionLink, lastEditedOn, tags } =
    project;
  const image = getImage(imageData);

  const tagColor = selectedTag ? TAG_TO_COLOR_MAP[selectedTag] : "";

  let borderColor;
  if (tagColor === "lightblue") {
    borderColor = "border-lightblue";
  } else if (tagColor === "yellow") {
    borderColor = "border-yellow";
  } else if (tagColor === "pink") {
    borderColor = "border-pink";
  } else if (tagColor === "green-500") {
    borderColor = "border-green-500";
  } else if (tagColor === "purple-500") {
    borderColor = "border-purple-500";
  } else {
    borderColor = "border-stone-100 dark:border-[#0a0a0a]";
  }

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      key={project.title}
      className=" bg-stone-100 dark:bg-[#0a0a0a] h-64 relative"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      <div
        key={project.title}
        className={`z-10 p-4 absolute h-full flex flex-col justify-between border-2 ${borderColor} $ `}
      >
        <div>{project.title}</div>

        <div className="flex flex-col grow gap-1">
          <div className="text-xs opacity-50 grow flex items-end">
            <div className=" bg-opacity-50 bg-black p-2 text-white">
              {project.description}
            </div>
          </div>
          {lastEditedOn && (
            <div className="flex text-sm dark:text-slate-500  ">
              <div className="self-end ">
                Last Updated on: {lastEditedOn.toLocaleDateString()}{" "}
              </div>
            </div>
          )}
          <div className="flex space-x-4 text-sm">
            {notionLink && (
              <a
                className="self-end dark:text-yellow text-darkerblue hover:underline"
                href={notionLink}
                target="_blank"
              >
                Notion
              </a>
            )}
            {githubLink && (
              <a
                className="self-end dark:text-yellow text-darkerblue hover:underline "
                href={githubLink}
                target="_blank"
              >
                Github
              </a>
            )}
            {actionLink && (
              <a
                className="self-end dark:text-yellow text-darkerblue hover:underline "
                href={actionLink}
                target="_blank"
              >
                Check it Out!
              </a>
            )}
          </div>
        </div>
      </div>
      {image && (
        <GatsbyImage
          image={image}
          alt={"test"}
          className="h-full absolute aspect-square w-full opacity-10 z-0"
        />
      )}
    </motion.div>
  );
};
