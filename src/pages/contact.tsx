import * as React from "react";
import SEO from "../components/SEO";
import Toolbar from "../components/Toolbar";

const ContactPage = () => {
  return (
    <SEO title="Contact">
      <div className="h-screen dark:bg-slate-900 dark:text-white">
        <Toolbar
          pageNames={["about", "projects", "contact"]}
          currentPage="contact"
        />
      </div>
    </SEO>
  );
};

export default ContactPage;
