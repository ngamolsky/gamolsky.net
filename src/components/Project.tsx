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
  lastEditedOn,
}: {
  title: string;
  link?: string;
  description?: string;
  descriptionContent?: ReactNode;
  image?: IGatsbyImageData;
  notionLink?: string;
  githubLink?: string;
  lastEditedOn?: Date;
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
            <div className="hidden dark:text-slate-400 md:flex">
              {description}
            </div>
          )}
          {descriptionContent}

          <div className="flex flex-col grow">
            {lastEditedOn && (
              <div className="flex text-sm dark:text-slate-500 grow ">
                <div className="self-end ">
                  Last Edited On: {lastEditedOn.toLocaleDateString()}
                </div>
              </div>
            )}
            <div className="flex space-x-4">
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
    </div>
  );
};

export default Project;
