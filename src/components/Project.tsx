import { Link, navigate } from "gatsby";
import React from "react";
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
    <div
      className="p-4 rounded-lg shadow-md dark:bg-slate-700 shadow-white dark:shadow-black "
      onClick={() => {
        navigate(`/projects/${link}/`);
      }}
    >
      <div className="flex ">
        {imageContent}
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
