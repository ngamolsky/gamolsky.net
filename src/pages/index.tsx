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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Lato:wght@300&family=Poiret+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="mx-auto space-y-4 max-w-6xl">
        <div className="max-w-lg text-xl font-hind p-4">
          <h1 className="uppercase text-2xl dark:text-blue-300 text-blue-800 font-upper ">
            about me
          </h1>

          <p className="my-4">👋 Hi! I'm Nikita.</p>
          <Img
            fluid={data.file.childImageSharp.fluid}
            className="border-4 shadow-lg shadow-white dark:shadow-black mx-auto"
          />
          <p className="mt-4">
            A creative problem solver and experienced software engineer
            dedicated to aligning my work with the mission of **** (something
            about bettering communities)
          </p>
          <h1 className="uppercase mt-8 text-2xl dark:text-blue-300 text-blue-800 font-upper">
            what i care about
          </h1>
          <ul className="list-disc list-inside font-hind my-4">
            <li>Fighting Climate Change</li>
            <li>Improving the Quality of Education</li>
          </ul>
          <p className="font-hind">
            I'm also passionate about puzzles and word games, and to that end
            have been working on a collaborative crossword puzzle game. Head
            over to the Projects page to check that out and other projects I've
            been working on.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
