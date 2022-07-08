import * as React from "react";
import Container from "../components/Container";
import SEO from "../components/SEO";

const ContactPage = () => {
  return (
    <Container
      pageNames={["about", "projects", "contact"]}
      currentPage="contact"
    >
      <SEO title="Contact" />
      <div className="flex flex-col p-4 mt-4 space-y-8">
        <a
          href="mailto:nikita@gamolsky.net?subject=Hello From Your Website!"
          className="w-64 py-4 mx-auto text-2xl text-center rounded-2xl bg-pink"
          target={"_blank"}
        >
          Email Me
        </a>
        <a
          download
          href="resume.pdf"
          className="w-64 py-4 mx-auto text-2xl text-center rounded-2xl bg-yellow"
        >
          Download Resume
        </a>
        <a
          download
          href="http://www.linkedin.com/in/ngamolsky"
          className="w-64 py-4 mx-auto text-2xl text-center rounded-2xl bg-darkerblue"
          target={"_blank"}
        >
          LinkedIn
        </a>
      </div>
    </Container>
  );
};

export default ContactPage;
