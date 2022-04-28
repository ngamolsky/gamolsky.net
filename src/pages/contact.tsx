import * as React from "react";
import { Helmet } from "react-helmet";
import Toolbar from "../components/Toolbar";

const ContactPage = () => {
  return (
    <div className="h-screen dark:bg-slate-900 dark:text-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Nikita Gamolsky</title>
      </Helmet>
      <Toolbar
        pageNames={["about", "projects", "contact"]}
        currentPage="contact"
      />
    </div>
  );
};

export default ContactPage;
