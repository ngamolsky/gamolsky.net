import { graphql } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import Project from "../components/Project";

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        title
        githubLink
        notionLink
        shortId
        updatedAt
        thumbnail {
          gatsbyImageData(width: 200)
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

type DataProps = {
  data: {
    allContentfulProject: {
      nodes: {
        githubLink?: string;
        notionLink?: string;
        title: string;
        shortId: string;
        updatedAt: string;
        thumbnail: {
          gatsbyImageData: ImageDataLike;
        };
        description: {
          childMarkdownRemark: {
            html: string;
          };
        };
      }[];
    };
  };
};

const ProjectPage = ({ data }: DataProps) => {
  const projects = data.allContentfulProject.nodes;

  return (
    <Container
      pageNames={["about", "projects", "contact"]}
      currentPage="projects"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Nikita Gamolsky</title>
      </Helmet>

      <div className="flex flex-col p-4 space-y-4">
        {projects.map((project) => {
          const image = getImage(project.thumbnail.gatsbyImageData);
          return (
            <Project
              link={project.shortId}
              key={project.shortId}
              title={project.title}
              image={image}
              notionLink={project.notionLink}
              githubLink={project.githubLink}
              descriptionContent={
                <div
                  className="dark:text-slate-400"
                  dangerouslySetInnerHTML={{
                    __html: project.description.childMarkdownRemark.html,
                  }}
                />
              }
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ProjectPage;
