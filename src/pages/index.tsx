import * as React from "react";
import Container from "../components/Container";
import SEO from "../components/SEO";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { BorderColor, interpolateHexColors } from "../utils/colors";
import { Home } from "../components/Home";
import { Interests } from "../components/Interests";
import { Contact } from "../components/Contact";
import { Settings } from "../components/Settings";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const SECTIONS = {
  home: Home,
  interests: Interests,

  contact: Contact,
  settings: Settings,
};

const IndexPage = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const breakpoints = useBreakpoint();

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const [borderColor, setBorderColor] = useState("#54bfc7");
  const [selectedSection, setSelectedSection] =
    useState<keyof typeof SECTIONS>("home");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const numSections = !breakpoints.xs ? 3 : 2;

    // get sections normalized to 0-1
    if (latest < 1 / numSections) {
      setSelectedSection("home");
      const normalized = latest / (1 / numSections);
      const color = interpolateHexColors(
        normalized,
        BorderColor.LightBlue,
        BorderColor.Yellow
      );
      setBorderColor(color);
    } else if (latest < 2 / numSections) {
      setSelectedSection("interests");
      const normalized = (latest - 1 / numSections) / (1 / numSections);
      const color = interpolateHexColors(
        normalized,
        BorderColor.Yellow,
        BorderColor.Pink
      );
      setBorderColor(color);
    } else if (latest < 3 / numSections) {
      setSelectedSection("contact");
      const normalized = (latest - 2 / numSections) / (1 / numSections);
      const color = interpolateHexColors(
        normalized,
        BorderColor.Pink,
        BorderColor.Blue
      );
      setBorderColor(color);
    } else {
      setSelectedSection("settings");
      const normalized = (latest - 3 / numSections) / (1 / numSections);

      const color = interpolateHexColors(
        normalized,
        BorderColor.Blue,
        BorderColor.LightBlue
      );
      setBorderColor(color);
    }
  });

  return (
    <Container borderColor={borderColor}>
      <SEO
        title="Nikita Gamolsky - Developer"
        description="Personal Website for Nikita Gamolsky."
      />
      <div className="flex flex-col gap-2 h-full">
        <div className="flex md:flex-col justify-between md:justify-start gap-2">
          <div>
            <div className="text-5xl p-4">Nikita Gamolsky</div>
            <div className="text-2xl text-gray-500 px-4">Developer</div>
          </div>
          <ul className="md:ml-4 text-lg px-4 self-end md:self-auto">
            {Object.keys(SECTIONS).map((section) => {
              return (
                <li
                  key={section}
                  className={`cursor-pointer ${
                    section == selectedSection ? "list-disc" : "list-none"
                  } ${section == "settings" ? "list-item md:hidden" : ""}`}
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
              );
            })}
          </ul>
        </div>

        <div
          className="h-full overflow-scroll relative scroll-smooth"
          ref={containerRef}
        >
          {Object.values(SECTIONS).map((Component, index) => {
            return <Component key={index} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
