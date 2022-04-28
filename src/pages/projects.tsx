import * as React from "react";
import { Helmet } from "react-helmet";
import Toolbar from "../components/Toolbar";

const ProjectPage = () => {
  return (
    <div className="h-screen dark:bg-slate-900 dark:text-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Nikita Gamolsky</title>
      </Helmet>
      <Toolbar
        pageNames={["about", "projects", "contact"]}
        currentPage="projects"
      />
    </div>
  );
};

export default ProjectPage;
