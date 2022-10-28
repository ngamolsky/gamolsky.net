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
};

const ProjectPage = () => {
  const projectsQuery = useStaticQuery<ProjectQueryProps>(graphql`
    {
      allNotion(
        sort: {
          fields: childrenMarkdownRemark___frontmatter___lastEdited
          order: DESC
        }
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
  const projects = projectsQuery.allNotion.nodes;

  return (
    <Container
      pageNames={["about", "projects", "contact"]}
      currentPage="projects"
    >
      <SEO title="Projects" />

      <div className="flex flex-col max-w-5xl p-6 mx-auto space-y-4">
        {projects.map((project) => {
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

          return (
            <Project
              key={project.id}
              title={frontmatter.title}
              image={image}
              notionLink={notionLink}
              githubLink={frontmatter.githubLink}
              actionLink={frontmatter.actionLink}
              description={frontmatter.description}
              lastEditedOn={new Date(Date.parse(frontmatter.lastEdited))}
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
