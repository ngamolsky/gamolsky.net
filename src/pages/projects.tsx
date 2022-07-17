import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as React from "react";
import Container from "../components/Container";
import Project from "../components/Project";
import SEO from "../components/SEO";

export const query = graphql`
  {
    allNotion(
      sort: {
        fields: childrenMarkdownRemark___frontmatter___lastEdited
        order: DESC
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
      }
    }
  }
`;

type DataProps = {
  data: {
    allNotion: {
      nodes: {
        raw: {
          url: string;
        };
        thumbnailImg: any;
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
              name:
                | "In Progress"
                | "Not Started"
                | "Complete but Ongoing"
                | "Complete"
                | "Paused";
            };
          };
        };
      }[];
    };
  };
};

const ProjectPage = ({ data }: DataProps) => {
  const projects = data.allNotion.nodes;

  return (
    <Container
      pageNames={["about", "projects", "contact"]}
      currentPage="projects"
    >
      <SEO title="Projects" />

      <div className="flex flex-col p-4 py-6 space-y-4">
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
              key={frontmatter.readableId}
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
