import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as React from "react";
import Container from "../components/Container";
import Project, { ProjectStatus } from "../components/Project";
import SEO from "../components/SEO";

type ProjectQueryProps = {
  allNotion: {
    nodes: {
      raw: {
        url: string;
      };
      thumbnailImg: any;
      id: string;
      childMarkdownRemark: {
        frontmatter: {
          githubLink?: string;
          lastEdited: string;
          tags: {
            name: string;
          }[];
          readableId: string;
          title: string;
          description?: string;
          actionLink?: string;
          status?: {
            name: ProjectStatus;
          };
        };
      };
    }[];
  };
  site: {
    buildTime: string;
  };
};

const ProjectPage = () => {
  const projectsQuery = useStaticQuery<ProjectQueryProps>(graphql`
    {
      site {
        buildTime
      }
      allNotion(
        filter: {
          childMarkdownRemark: { frontmatter: { displayOnSite: { eq: true } } }
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              githubLink
              lastEdited
              readableId
              tags {
                name
              }
              title
              description
              actionLink
              status {
                name
              }
              displayOnSite
            }
            timeToRead
          }
          thumbnailImg {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          raw {
            url
          }
          id
        }
      }
    }
  `);

  const buildTime = projectsQuery.site.buildTime;
  const projects = projectsQuery.allNotion.nodes;

  const sortedProjects = projects.sort((a, b) => {
    const aTitle = a.childMarkdownRemark.frontmatter.title;
    const bTitle = b.childMarkdownRemark.frontmatter.title;

    const aDate =
      aTitle == "Personal Site"
        ? new Date(buildTime)
        : new Date(a.childMarkdownRemark.frontmatter.lastEdited);
    const bDate =
      bTitle == "Personal Site"
        ? new Date(buildTime)
        : new Date(b.childMarkdownRemark.frontmatter.lastEdited);
    return bDate.getTime() - aDate.getTime();
  });

  console.log(sortedProjects, buildTime);
  return (
    <Container
      pageNames={["about", "projects", "contact"]}
      currentPage="projects"
    >
      <SEO title="Projects" />

      <div className="flex flex-col max-w-5xl p-6 mx-auto space-y-4">
        {sortedProjects.map((project) => {
          const image = project.thumbnailImg
            ? getImage(project.thumbnailImg)
            : undefined;
          const frontmatter = project.childMarkdownRemark.frontmatter;
          const notionLink = project.raw?.url.replace(
            "https://www.notion.so/",
            "https://ngamolsky.notion.site/"
          );
          const link = frontmatter.actionLink
            ? frontmatter.actionLink
            : notionLink
            ? notionLink
            : frontmatter.githubLink
            ? frontmatter.githubLink
            : undefined;

          console.log("Project", frontmatter.title);
          console.log("Last Notion Edit", new Date(frontmatter.lastEdited));
          console.log("Last buildTime", new Date(buildTime));
          const lastEditedOn =
            frontmatter.title == "Personal Site"
              ? new Date(buildTime)
              : new Date(frontmatter.lastEdited);

          return (
            <Project
              key={project.id}
              title={frontmatter.title}
              image={image}
              notionLink={notionLink}
              githubLink={frontmatter.githubLink}
              actionLink={frontmatter.actionLink}
              description={frontmatter.description}
              lastEditedOn={lastEditedOn}
              link={link}
              status={project.childMarkdownRemark.frontmatter.status?.name}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ProjectPage;
