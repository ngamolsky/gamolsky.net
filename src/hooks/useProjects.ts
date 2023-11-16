import { useStaticQuery, graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

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
type ProjectStatus =
  | "In Progress"
  | "Not Started"
  | "Complete But Ongoing"
  | "Complete"
  | "Paused"
  | "Planning";

export type Project = {
  title: string;
  link?: string;
  description?: string;
  imageData: ImageDataLike;
  notionLink?: string;
  githubLink?: string;
  actionLink?: string;
  lastEditedOn?: Date;
  status?: ProjectStatus;
  tags: Tag[];
};

export enum Tag {
  Environment = "environment",
  Health = "health",
  Work = "work",
  Personal = "personal",
  Technology = "technology",
  Puzzles = "puzzles",
  Education = "education",
}

export const useProjects = () => {
  const projectsQuery = useStaticQuery<ProjectQueryProps>(graphql`
    {
      site {
        buildTime
      }
      allNotion(
        filter: {
          childMarkdownRemark: { frontmatter: { displayOnSite: { eq: true } } }
        }
        limit: 6
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

  const sortedProjectsData = projects.sort((a, b) => {
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

  const sortedProjects: Project[] = sortedProjectsData.map((project) => {
    const projectData: Project = {
      title: project.childMarkdownRemark.frontmatter.title,
      link: project.childMarkdownRemark.frontmatter.readableId,
      description: project.childMarkdownRemark.frontmatter.description,
      imageData: project.thumbnailImg,
      notionLink: project.raw.url,
      githubLink: project.childMarkdownRemark.frontmatter.githubLink,
      actionLink: project.childMarkdownRemark.frontmatter.actionLink,
      lastEditedOn: new Date(
        project.childMarkdownRemark.frontmatter.lastEdited
      ),
      status: project.childMarkdownRemark.frontmatter.status?.name,
      tags: project.childMarkdownRemark.frontmatter.tags.map(
        (tag) => tag.name as Tag
      ),
    };
    return projectData;
  });

  return sortedProjects;
};
