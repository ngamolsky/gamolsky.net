import { graphql } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import Project from "../components/Project";

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
          }
          timeToRead
        }
        thumbnailImg {
          childImageSharp {
            gatsbyImageData(width: 150, placeholder: BLURRED)
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
            githubLink: string;
            lastEdited: string;
            tags: {
              name: string;
            }[];
            readableId: string;
            title: string;
            description: string;
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Nikita Gamolsky</title>
      </Helmet>

      <div className="flex flex-col p-4 mt-4 space-y-4">
        {projects.map((project) => {
          const image = project.thumbnailImg
            ? getImage(project.thumbnailImg)
            : undefined;
          const frontmatter = project.childMarkdownRemark.frontmatter;
          console.log(frontmatter.lastEdited);

          return (
            <Project
              key={frontmatter.readableId}
              title={frontmatter.title}
              image={image}
              notionLink={project.raw?.url}
              githubLink={frontmatter.githubLink}
              description={frontmatter.description}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ProjectPage;
