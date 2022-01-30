import { Link } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Toolbar from "../components/Toolbar";

const IndexPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>NG - Home</title>
        <link rel="canonical" href="http://gamolsky.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Poiret+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Toolbar
        pageNames={["about", "projects", "contact"]}
        currentPage="about"
      />
      <div className="font-upper mx-24 space-y-4">
        <h1 className="uppercase mt-8 text-2xl text-blue-300">about me</h1>
        <p>
          Hi! I'm Nikita - a creative problem solver and experienced software
          engineer dedicated to aligning my work with the mission of ****
          (something about bettering communities)? Specific interests include: -
          Fighting Climate Change - Improving the Quality of Education I'm also
          passionate about puzzles and word games, and to that end have been
          working on a collaborative crossword puzzle game. Head over to the{" "}
          <Link to="/projects" className="text-blue-300 hover:underline">
            Projects
          </Link>{" "}
          page to check that out and other projects I've been working on.
        </p>
        <h1 className="uppercase mt-8 text-2xl text-blue-300">
          what i care about
        </h1>
        <ul className="list-disc list-inside">
          <li>Fighting Climate Change</li>
          <li>Improving the Quality of Education</li>
        </ul>
        <p>
          I'm also passionate about puzzles and word games, and to that end have
          been working on a collaborative crossword puzzle game. Head over to
          the Projects page to check that out and other projects I've been
          working on.
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
