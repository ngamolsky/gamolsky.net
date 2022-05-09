import { Link } from "gatsby";
import * as React from "react";
import Container from "../components/Container";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <SEO title="About">
      <Container
        pageNames={["about", "projects", "contact"]}
        currentPage="about"
      >
        <div className="max-w-6xl p-4 mx-auto space-y-4 font-hind ">
          <div className="grid grid-cols-1 gap-16 mt-4 md:grid-cols-2">
            <StaticImage
              alt="Profile pic"
              src={"../images/profilePic.jpeg"}
              className="w-11/12 mx-auto border-4 shadow-lg shadow-white dark:shadow-black "
            />
            <div>
              <h1 className="text-2xl text-blue-800 uppercase dark:text-lightblue font-upper ">
                about me
              </h1>
              <div className="my-4 text-xl">
                <p>👋 Hi! I'm Nikita.</p>
                <br />
                <p>
                  A creative problem solver and experienced software engineer
                  dedicated to aligning my work with the mission of lifting
                  others by focusing on the community level.
                </p>
                <br />
                <p>
                  I excel in environments that require high velocity,
                  flexibility, and breadth of knowledge. My core skill is
                  persistence.
                </p>
              </div>
              <h1 className="mt-8 text-2xl text-blue-800 uppercase dark:text-lightblue font-upper">
                what i care about
              </h1>
              <ul className="my-4 text-xl list-disc list-inside">
                <li>Fighting Climate Change</li>
                <li>Improving the Quality of Education</li>
              </ul>
              <p className="text-xl">
                I'm also passionate about puzzles and word games, and to that
                end have been working on a collaborative crossword puzzle game.
                Head over to the{" "}
                <Link
                  to="/projects"
                  className="dark:text-yellow hover:underline"
                >
                  Projects
                </Link>{" "}
                page to check that out and other projects I've been working on.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SEO>
  );
};

export default IndexPage;
