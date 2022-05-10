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
      className={`p-4 rounded-lg shadow-md dark:bg-slate-700 shadow-white dark:shadow-black`}
    >
      <div className="flex flex-wrap space-y-4 md:flex-nowrap">
        {image && (
          <GatsbyImage
            image={image}
            alt={title}
            className="w-full max-w-md mx-auto md:w-48 aspect-square shrink-0"
          />
        )}
        <div className="flex flex-col justify-center ml-4 space-y-2 grow">
          <div className="text-xl">{title}</div>
          {description && (
            <div className=" dark:text-slate-400">{description}</div>
          )}
          {descriptionContent}

          <div className="flex flex-col grow">
            {lastEditedOn && (
              <div className="flex text-sm dark:text-slate-500 grow ">
                <div className="self-end ">
                  Last Updated on: {lastEditedOn.toLocaleDateString()} at{" "}
                  {lastEditedOn.toLocaleTimeString()}
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
              {link && (
                <a
                  className="self-end dark:text-yellow hover:underline "
                  href={link}
                  target="_blank"
                >
                  Check it Out!
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
