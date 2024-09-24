import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Home = () => {
  return (
    <section
      id="home"
      className="text-xl grid grid-cols-1 md:grid-cols-2 h-full"
    >
      <div className="max-w-xl flex flex-col justify-end gap-4 px-4 order-2 md:order-1 text-sm md:text-lg mb-4">
        <div>
          Raised at the intersection of technology and the liberal arts, I
          believe the combining many disciplines leads to the most interesting
          and impactful work.
        </div>
        <div>
          I am currently working on some Dev tools that align genAI to human
          objectives. See more at{" "}
          <a
            href="https://aymara.ai/"
            className="underline hover:text-lightblue"
            target="_blank"
          >
            aymara.ai.
          </a>
        </div>
      </div>
      <div className="md:mx-auto order-1 md:order-2 overflow-hidden h-full items-end flex">
        <StaticImage
          placeholder="blurred"
          alt="Profile Pic"
          src={"../images/outline.png"}
          className={`mx-auto w-auto max-w-1/2 max-h-full`}
          objectFit="contain"
        />
      </div>
    </section>
  );
};
