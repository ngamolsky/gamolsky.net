import * as React from "react";
import { useProjects, Tag, Project } from "../hooks/useProjects";
import { ProjectCard } from "./ProjectCard";
import { TAG_TO_COLOR_MAP } from "../utils/colors";

export const Interests = () => {
  const projects = useProjects();
  const [selectedTag, setSelectedTag] = React.useState<Tag>();

  const onlyProject: Project = {
    title: "Evvy",
    link: "",
    description:
      "Know what’s up down there. Get innovative and integrative vaginal healthcare, powered by our state-of-the-art vaginal microbiome test.",
    imageData: {
      childImageSharp: {
        gatsbyImageData: {
          layout: "constrained",
          placeholder: {
            fallback:
              "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADQAwCdASoUABQAPtFapk0oJSOiMBgIAQAaCWMAsOwQ7+vhIWOo2EAA/ucafumqtaO/UGQZ2pGtJ/8O83WwcUYRS6omWezs/Nx3bE6+ijQKuCD6cW+FhXUPxK/CIaNtPKwwAAAA",
          },
          images: {
            fallback: {
              src: "/static/4ae77107c8e05ad75f6a00649be311d4/318ad/63cf82da867ebf6821035cf7_PDP_Care_Image.webp",
              srcSet:
                "/static/4ae77107c8e05ad75f6a00649be311d4/41704/63cf82da867ebf6821035cf7_PDP_Care_Image.webp 315w,\n/static/4ae77107c8e05ad75f6a00649be311d4/27494/63cf82da867ebf6821035cf7_PDP_Care_Image.webp 630w,\n/static/4ae77107c8e05ad75f6a00649be311d4/318ad/63cf82da867ebf6821035cf7_PDP_Care_Image.webp 1260w",
              sizes: "(min-width: 1260px) 1260px, 100vw",
            },
            sources: [],
          },
          width: 1260,
          height: 1243.9999999999998,
        },
      },
    },
    notionLink: "https://www.notion.so/Evvy-fe3ef79fabbe4bb28a36cb272fc71c24",
    actionLink: "https://evvy.com",
    lastEditedOn: new Date("2023-11-16T07:07:00.000Z"),
    status: "In Progress",
    tags: [Tag.Health, Tag.Work],
  };
  return (
    <section
      id="interests"
      className="text-xl flex h-full w-full overflow-hidden justify-center flex-col md:flex-row p-4 md:items-end"
    >
      <div className="w-5/6 flex flex-col justify-end gap-4 order-2 md:order-1 text-sm md:text-lg max-w-5xl">
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
      <div className="flex gap-8 overflow-scroll items-end p-4 order-1 md:order-2 md:grid md:grid-cols-2 md:gap-4 md:mx-auto md:p-4 lg:grid-cols-3 w-full max-w-4xl mx-auto my-8 md:my-0 2xl:gap-8">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              project={onlyProject}
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
