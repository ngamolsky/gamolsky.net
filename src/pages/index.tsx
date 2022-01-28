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
      </Helmet>
      <Toolbar />
    </div>
  );
};

export default IndexPage;
