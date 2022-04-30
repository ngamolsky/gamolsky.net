import React from "react";
import { graphql, PageProps } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
type DataProps = {
  contentfulProject: {
    githubLink?: string;
    notionLink?: string;
    title: string;
    updatedAt: string;
    thumbnail: {
      gatsbyImageData: ImageDataLike;
    };
    description: {
      childMarkdownRemark: {
        html: string;
      };
    };
  };
};

const ProjectDetails = ({
  data: { contentfulProject },
}: PageProps<DataProps>) => {
  return <div>{contentfulProject.title}</div>;
};

export default ProjectDetails;

// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.
export const query = graphql`
  query ProjectQuery($id: String) {
    contentfulProject(id: { eq: $id }) {
      title
      githubLink
      notionLink
      thumbnail {
        gatsbyImageData
      }
    }
  }
`;
