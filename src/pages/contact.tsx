import * as React from "react";
import { Helmet } from "react-helmet";
import Toolbar from "../components/Toolbar";

const ContactPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
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
        currentPage="contact"
      />
    </div>
  );
};

export default ContactPage;
