import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ReactNode } from "react";

const Project = ({
  title,
  link,
  description,
  descriptionContent,
  imageContent,
  notionLink,
  githubLink,
}: {
  title: string;
  link?: string;
  description?: string;
  descriptionContent?: ReactNode;
  imageContent?: ReactNode;
  notionLink?: string;
  githubLink?: string;
}) => {
  return (
    <a href={link}>
      <div className="p-4 rounded-lg shadow-md dark:bg-slate-700 shadow-white dark:shadow-black ">
        <div className="flex ">
          {imageContent}
          <div className="flex flex-col justify-center ml-4 grow">
            <div>{title}</div>
            {description && (
              <div className="dark:text-slate-400">{description}</div>
            )}
            {descriptionContent}
            <div className="flex space-x-4 grow">
              {notionLink && (
                <a
                  className="self-end dark:text-yellow hover:underline"
                  href={notionLink}
                >
                  Notion
                </a>
              )}
              {githubLink && (
                <a
                  className="self-end dark:text-yellow hover:underline "
                  href={githubLink}
                >
                  Github
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
