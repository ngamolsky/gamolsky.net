import { Link, navigate } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { ReactNode } from "react";

const Project = ({
  title,
  link,
  description,
  descriptionContent,
  image,
  notionLink,
  githubLink,
}: {
  title: string;
  link?: string;
  description?: string;
  descriptionContent?: ReactNode;
  image?: IGatsbyImageData;
  notionLink?: string;
  githubLink?: string;
}) => {
  return (
    <div
      className="p-4 rounded-lg shadow-md dark:bg-slate-700 shadow-white dark:shadow-black "
      onClick={() => {
        if (link) navigate(`/projects/${link}/`);
      }}
    >
      <div className="flex ">
        {image && (
          <GatsbyImage
            image={image}
            alt={title}
            className="aspect-square shrink-0"
          />
        )}
        <div className="flex flex-col justify-center ml-4 space-y-2 grow">
          <div className="text-xl">{title}</div>
          {description && (
            <div className="dark:text-slate-400">{description}</div>
          )}
          {descriptionContent}
          <div className="flex space-x-4 grow">
            {notionLink && (
              <a
                className="self-end dark:text-yellow hover:underline"
                href={notionLink}
                target="_blank"
              >
                Notion
              </a>
            )}
            {githubLink && (
              <a
                className="self-end dark:text-yellow hover:underline "
                href={githubLink}
                target="_blank"
              >
                Github
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
