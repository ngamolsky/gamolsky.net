import { Link } from "gatsby";
import * as React from "react";
import Container from "../components/Container";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <Container pageNames={["about", "projects", "contact"]} currentPage="about">
      <SEO title="About" imagePath="../images/profilePic.jpeg" />

      <div className="max-w-6xl p-4 mx-auto space-y-4">
        <div className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-2">
          <StaticImage
            placeholder="blurred"
            alt="Rainy Hike"
            src={"../images/rain.jpeg"}
            className="w-4/5 mx-auto border-4 shadow-lg shadow-white dark:shadow-black"
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
                looking for early stage climate tech opportunities making a
                measurable impact.
              </p>
              <br />
              <p>
                I have expertise in full stack development ranging from customer
                research, to design and implementation across the front and back
                end.
              </p>
            </div>
          </div>
          <div className="text-xl">
            <h1 className="my-8 text-2xl text-blue-800 uppercase dark:text-lightblue font-upper">
              Top of mind
            </h1>
            <p>
              With considerable experience in mission-driven startups, I'm now
              looking to transition to a founding engineering role at an early
              stage climate tech startup.
            </p>
            <br />
            <p>
              I'd love for the opportunity to meet founders in the space to hear
              their stories and to see if there is potential for a partnership!
            </p>
            <br />
            <p>
              I'm also open to freelance work and consulting work, so if you
              think a collaboration could be a good fit, please reach out on my{" "}
              <Link
                to="/contact"
                className="text-blue-800 dark:text-yellow hover:underline"
              >
                contact page
              </Link>
              .
            </p>
            <br />
            <p>
              Head over to the{" "}
              <Link
                to="/projects"
                className="text-blue-800 dark:text-yellow hover:underline"
              >
                projects
              </Link>{" "}
              page to check that out and other projects I've been working on.
            </p>
          </div>
          <StaticImage
            placeholder="blurred"
            alt="Profile Pic"
            src={"../images/profilePic.jpeg"}
            className="w-3/5 mx-auto border-4 shadow-lg shadow-white dark:shadow-black"
          />
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
