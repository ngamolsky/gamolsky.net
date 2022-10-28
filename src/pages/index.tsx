import { Link } from "gatsby";
import * as React from "react";
import Container from "../components/Container";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";
import Slider from "react-slick";

const IndexPage = () => {
  return (
    <Container pageNames={["about", "projects", "contact"]} currentPage="about">
      <SEO title="About" />

      <div className="max-w-6xl p-4 mx-auto space-y-4">
        <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-2">
          <StaticImage
            alt="Profile Pic"
            src={"../images/profilePic.jpeg"}
            className="w-4/5 mx-auto border-4 shadow-lg shadow-white dark:shadow-black "
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
                looking for opportunities to apply my skills in working on
                mitigating the effects of climate change.
              </p>
              <br />
              <p>
                I excel in environments that require high velocity, flexibility,
                and breadth of knowledge. My core skill is persistence.
              </p>
            </div>
          </div>
          <div>
            <h1 className="mt-8 text-2xl text-blue-800 uppercase dark:text-lightblue font-upper">
              what i care about
            </h1>
            <ul className="my-4 text-xl list-disc list-inside">
              <li>Fighting Climate Change</li>
              <li>Improving the Quality of Education</li>
            </ul>
            <p className="text-xl">
              I'm also passionate about puzzles and word games, and to that end
              have been working on a collaborative crossword puzzle game. Head
              over to the{" "}
              <Link to="/projects" className="dark:text-yellow hover:underline">
                Projects
              </Link>{" "}
              page to check that out and other projects I've been working on.
            </p>
            <br />
            <p className="text-xl">
              You can also go to the{" "}
              <Link to="/contact" className="dark:text-yellow hover:underline">
                Contact
              </Link>{" "}
              page to reach out to me directly.
            </p>
          </div>
          <Slider
            infinite
            autoplay
            autoplaySpeed={5000}
            slidesToShow={1}
            slidesToScroll={1}
            speed={500}
            arrows={false}
            className={
              "w-4/5 mx-auto border-4 shadow-lg shadow-white dark:shadow-black "
            }
          >
            <StaticImage
              alt="Rainy Hike"
              src={"../images/rain.jpeg"}
              className="aspect-square"
            />
            <StaticImage
              alt="Yawning"
              src={"../images/yawning.jpeg"}
              className="aspect-square "
            />
            <StaticImage
              alt="Pose"
              src={"../images/pose.jpeg"}
              className="aspect-square "
            />
            <StaticImage
              alt="Grandma"
              src={"../images/grandma.jpeg"}
              className="aspect-square"
            />
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
