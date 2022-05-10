import * as React from "react";
import SEO from "../components/SEO";
import Toolbar from "../components/Toolbar";

const ContactPage = () => {
  return (
    <div className="h-screen dark:bg-slate-900 dark:text-white">
      <SEO title="Contact" />

      <Toolbar
        pageNames={["about", "projects", "contact"]}
        currentPage="contact"
      />
    </div>
  );
};

export default ContactPage;
