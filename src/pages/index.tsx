import { graphql, Link } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import Img from "gatsby-image";

export const query = graphql`
  query {
    file(relativePath: { eq: "profilePic.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
const IndexPage = ({ data }) => {
  return (
    <Container pageNames={["about", "projects", "contact"]} currentPage="about">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <div className="max-w-6xl p-4 mx-auto space-y-4 font-hind ">
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <Img
            fluid={data.file.childImageSharp.fluid}
            className="w-full border-4 shadow-lg shadow-white dark:shadow-black max-w-[400px] mx-auto "
          />
          <div>
            <h1 className="text-2xl text-blue-800 uppercase dark:text-lightblue font-upper ">
              about me
            </h1>
            <p className="my-4">👋 Hi! I'm Nikita.</p>
            <p className="mt-4">
              A creative problem solver and experienced software engineer
              dedicated to aligning my work with the mission of lifting
            </p>
            <h1 className="mt-8 text-2xl text-blue-800 uppercase dark:text-lightblue font-upper">
              what i care about
            </h1>
            <ul className="my-4 list-disc list-inside">
              <li>Fighting Climate Change</li>
              <li>Improving the Quality of Education</li>
            </ul>
            <p>
              I'm also passionate about puzzles and word games, and to that end
              have been working on a collaborative crossword puzzle game. Head
              over to the{" "}
              <Link to="/projects" className="dark:text-yellow hover:underline">
                Projects
              </Link>{" "}
              page to check that out and other projects I've been working on.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
