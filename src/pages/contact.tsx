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
      <div className="flex flex-col justify-between p-4 my-16 text-white grow">
        <a
          href="mailto:nikita@gamolsky.net?subject=Hello From Your Website!"
          className="w-64 py-6 mx-auto text-2xl text-center rounded-2xl bg-pink hover:bg-opacity-80"
          target={"_blank"}
        >
          Email Me
        </a>
        <a
          download
          href="Nikita_Gamolsky_Resume.pdf"
          className="w-64 py-6 mx-auto text-2xl text-center rounded-2xl bg-yellow hover:bg-opacity-80"
        >
          Download Resume
        </a>
        <a
          href="https://github.com/ngamolsky/"
          className="w-64 py-6 mx-auto text-2xl text-center rounded-2xl bg-lightblue hover:bg-opacity-80"
          target={"_blank"}
        >
          Github
        </a>
        <a
          download
          href="http://www.linkedin.com/in/ngamolsky"
          className="w-64 py-6 mx-auto text-2xl text-center rounded-2xl bg-darkerblue hover:bg-opacity-80"
          target={"_blank"}
        >
          LinkedIn
        </a>
      </div>
    </Container>
  );
};

export default ContactPage;
