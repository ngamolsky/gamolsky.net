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

      <div className="flex flex-col p-4 mt-4 space-y-4">
        {projects.map((project) => {
          const image = project.thumbnailImg
            ? getImage(project.thumbnailImg)
            : undefined;
          const frontmatter = project.childMarkdownRemark.frontmatter;

          return (
            <Project
              key={frontmatter.readableId}
              title={frontmatter.title}
              image={image}
              notionLink={project.raw?.url}
              githubLink={frontmatter.githubLink}
              description={frontmatter.description}
              lastEditedOn={new Date(Date.parse(frontmatter.lastEdited))}
              link={frontmatter.actionLink}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ProjectPage;
