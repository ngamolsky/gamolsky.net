import * as React from "react";
import { Project, Tag } from "../hooks/useProjects";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { TAG_TO_COLOR_MAP } from "../utils/colors";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export const ProjectCard = ({
  project,
  index,
  selectedTag,
}: {
  project: Project;
  index: number;
  selectedTag?: Tag;
}) => {
  const {
    imageData,
    notionLink,
    githubLink,
    actionLink,
    lastEditedOn,
    title,
    description,
  } = project;

  const image = getImage(imageData);
  const breakpoints = useBreakpoint();

  const tagColor = selectedTag ? TAG_TO_COLOR_MAP[selectedTag] : "";

  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  let ringColor;
  if (tagColor === "lightblue") {
    ringColor = "ring-lightblue";
  } else if (tagColor === "yellow") {
    ringColor = "ring-yellow";
  } else if (tagColor === "pink") {
    ringColor = "ring-pink";
  } else if (tagColor === "green-500") {
    ringColor = "ring-green-500";
  } else if (tagColor === "purple-500") {
    ringColor = "ring-purple-500";
  }
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: breakpoints.sm ? 1 : 0 },
  };

  return (
    <motion.div
      key={title}
      className={`relative h-full aspect-square shrink-0 cursor-pointer shadow-lg ${ringColor} ${
        ringColor ? "ring-2" : ""
      } `}
      variants={variants}
      whileInView="visible"
      initial="hidden"
      transition={{ duration: 0.6, delay: index * 0.05 }}
      title={description}
      onClick={() => {
        window.open(actionLink || notionLink || githubLink, "_blank");
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {image && (
        <>
          <motion.div
            key={title + "-overlay"}
            className="z-10 absolute inset-0 bg-black dark:bg-black "
            animate={
              isHovered
                ? {
                    opacity: 0.6,
                  }
                : {
                    opacity: 0,
                  }
            }
          />
          <GatsbyImage
            image={image}
            alt={"test"}
            className={`object-cover z-0 w-full h-full`}
          />
        </>
      )}

      <motion.div
        key={title + "-text"}
        className={`z-20 p-2 absolute flex flex-col justify-between inset-0 text-white `}
        variants={variants}
        whileInView={selectedTag || "hidden"}
        whileHover="visible"
      >
        <div className="p-2 dark:bg-black bg-white dark:text-white text-black opacity-80 w-fit">
          {title}
        </div>

        <div className="flex flex-col grow gap-1">
          <div className="grow" />
          <div className="dark:bg-black bg-white dark:text-white text-black p-2 opacity-80 flex flex-col gap-1">
            <div className="text-xs">{description}</div>

            <div className="flex space-x-4 text-sm">
              {notionLink && (
                <a
                  className="self-end text-yellow hover:underline"
                  href={notionLink}
                  target="_blank"
                >
                  Notion
                </a>
              )}
              {githubLink && (
                <a
                  className="self-end text-yellow hover:underline "
                  href={githubLink}
                  target="_blank"
                >
                  Github
                </a>
              )}
              {actionLink && (
                <a
                  className="self-end text-yellow hover:underline "
                  href={actionLink}
                  target="_blank"
                >
                  Check it Out!
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
