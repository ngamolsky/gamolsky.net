import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import Project from "../components/Project";

const ProjectPage = () => {
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
        <Project
          title="Play On Words"
          link="https://playonwords.gamolsky.net"
          descriptionContent={
            <>
              <p className="dark:text-slate-400">
                An endless project to create a real time multiplayer crossword
                solving game.
              </p>
            </>
          }
          imageContent={
            <StaticImage
              alt="crossword icon"
              src="../images/crossword.png"
              className="w-40"
            />
          }
          notionLink="https://ngamolsky.notion.site/PlayOnWords-6d3eb4de23094cef876130fe7773759d"
          githubLink="https://github.com/ngamolsky/PlayOnWords"
        />
        <Project
          title="gamolsky.net"
          link="/"
          descriptionContent={
            <>
              <p className="dark:text-slate-400">
                Learning Gatsby while creating a personal website.
              </p>
            </>
          }
          imageContent={
            <StaticImage
              alt="personal site logo"
              src="../images/logo.png"
              className="w-40 "
            />
          }
          githubLink="https://github.com/ngamolsky/gamolsky.net"
        />
      </div>
    </Container>
  );
};

export default ProjectPage;
