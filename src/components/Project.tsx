import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { ReactNode } from "react";

export type ProjectStatus =
  | "In Progress"
  | "Not Started"
  | "Complete But Ongoing"
  | "Complete"
  | "Paused"
  | "Planning";

const Project = ({
  title,
  link,
  description,
  descriptionContent,
  image,
  notionLink,
  githubLink,
  actionLink,
  lastEditedOn,
  status,
}: {
  title: string;
  link?: string;
  description?: string;
  descriptionContent?: ReactNode;
  image?: IGatsbyImageData;
  notionLink?: string;
  githubLink?: string;
  actionLink?: string;
  lastEditedOn?: Date;
  status?: ProjectStatus;
}) => {
  const buildTimeQuery = useStaticQuery(graphql`
    query {
      site {
        buildTime
      }
    }
  `);

  const buildTime = new Date(buildTimeQuery.site.buildTime);
  return (
    <div
      className={`p-4 rounded-lg shadow-md dark:bg-slate-700 shadow-white dark:shadow-black bg-slate-300`}
      onClick={(event) => {
        if (link && !(event.target instanceof HTMLAnchorElement)) {
          window.open(link, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <div className="flex flex-wrap space-y-4 md:flex-nowrap">
        {image && (
          <GatsbyImage
            image={image}
            alt={title}
            className="w-full max-w-md mx-auto md:w-48 aspect-square shrink-0"
          />
        )}
        <div className="flex flex-col ml-4 space-y-2 grow">
          <div className="text-xl w-fit">{title}</div>
          {description && (
            <div className=" dark:text-slate-400">{description}</div>
          )}
          {descriptionContent}
          {status && (
            <div>
              <p
                className={`text-sm rounded-lg inline px-2 py-1 text-white ${
                  status == "Not Started"
                    ? "bg-[rgb(110,54,48)]"
                    : status == "In Progress"
                    ? "bg-[rgb(133,76,29)]"
                    : status == "Paused"
                    ? "bg-[rgb(40,69,108)]"
                    : status == "Complete"
                    ? "bg-[rgb(43,89,63)]"
                    : status == "Complete But Ongoing"
                    ? "bg-[rgb(73,47,100)]"
                    : status == "Planning"
                    ? "bg-[rgb(105,49,76)]"
                    : "bg-yellow"
                }`}
              >
                {status}
              </p>
            </div>
          )}
          <div className="flex flex-col grow">
            {lastEditedOn && (
              <div className="flex text-sm dark:text-slate-500 grow ">
                <div className="self-end ">
                  Last Updated on:{" "}
                  {title == "Personal Site"
                    ? buildTime.toLocaleDateString()
                    : lastEditedOn.toLocaleDateString()}{" "}
                  at{" "}
                  {lastEditedOn.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            )}
            <div className="flex space-x-4">
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
