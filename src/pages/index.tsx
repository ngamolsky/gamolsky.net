import * as React from "react";
import Container from "../components/Container";
import SEO from "../components/SEO";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { interpolateHexColors } from "../utils/colors";
import { Home } from "../components/Home";
import { Interests } from "../components/Interests";
import { Contact } from "../components/Contact";

const SECTIONS = {
  home: Home,
  interests: Interests,
  contact: Contact,
};

const IndexPage = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const [borderColor, setBorderColor] = useState("#54bfc7");
  const [selectedSection, setSelectedSection] =
    useState<keyof typeof SECTIONS>("home");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.5) {
      setSelectedSection("home");
      const normalized = latest / 0.5;
      const color = interpolateHexColors(normalized, "#54bfc7", "#f6b300");
      setBorderColor(color);
    } else if (latest < 1) {
      setSelectedSection("interests");
      const normalized = (latest - 0.5) / 0.5;
      const color = interpolateHexColors(normalized, "#f6b300", "#b81f4e");
      setBorderColor(color);
    } else {
      setSelectedSection("contact");
      const normalized = (latest - 1) / 0.5;
      const color = interpolateHexColors(normalized, "#b81f4e", "#54bfc7");
      setBorderColor(color);
    }
  });

  return (
    <Container borderColor={borderColor}>
      <SEO
        title="welcome"
        description="Personal Website for Nikita Gamolsky."
      />
      <div className="flex flex-col p-4 gap-2 h-full">
        <div className="text-5xl">Nikita Gamolsky</div>
        <div className="text-2xl text-gray-500">Developer</div>
        <ul className="ml-4 text-lg">
          {Object.keys(SECTIONS).map((section) => (
            <li
              key={section}
              className={`cursor-pointer ${
                section == selectedSection ? "list-disc" : "list-none"
              }`}
            >
              <div
                onClick={() => {
                  const element = document.getElementById(section);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {/* To title case */}
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            </li>
          ))}
        </ul>
        <div
          className="h-full overflow-scroll relative scroll-smooth"
          ref={containerRef}
        >
          {Object.values(SECTIONS).map((Section, index) => (
            <Section key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
