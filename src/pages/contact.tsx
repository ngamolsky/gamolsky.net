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

      <a href="resume.pdf" download>
        Download Resume
      </a>
      <a href="resume.pdf">Open Resume</a>
    </Container>
  );
};

export default ContactPage;
