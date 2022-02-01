import { graphql, Link } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import Img from "gatsby-image";

export const query = graphql`
  query {
    file(relativePath: { eq: "profilePic.jpeg" }) {
      childImageSharp {
        fixed(width: 350, height: 350) {
          ...GatsbyImageSharpFixed
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
          href="https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Lato:wght@100&family=Poiret+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Poiret+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="mx-auto space-y-4 max-w-6xl">
        <h1 className="uppercase mt-8 text-2xl text-blue-300 font-upper">
          about me
        </h1>
        <div className="flex-row flex font-hind">
          <Img
            fixed={data.file.childImageSharp.fixed}
            className="border-4 shadow-lg shadow-white dark:shadow-black"
          />
          <div className="ml-8 max-w-lg">
            <h3 className="text-xl">👋 Hi! I'm Nikita</h3>
            <p className="mt-4">
              A creative problem solver and experienced software engineer
              dedicated to aligning my work with the mission of **** (something
              about bettering communities)
            </p>
            <h1 className="uppercase my-8 text-2xl text-blue-300 font-upper">
              what i care about
            </h1>
            <ul className="list-disc list-inside font-hind">
              <li>Fighting Climate Change</li>
              <li>Improving the Quality of Education</li>
            </ul>
            <p className="font-hind">
              I'm also passionate about puzzles and word games, and to that end
              have been working on a collaborative crossword puzzle game. Head
              over to the Projects page to check that out and other projects
              I've been working on.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
