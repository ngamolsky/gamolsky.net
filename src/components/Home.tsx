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
          I currently am working on a two person engineering team at{" "}
          <a href="https://www.evvy.com/" className="underline" target="_blank">
            Evvy
          </a>
          , where we are on a mission to close the{" "}
          <a
            href="https://equalresearchday.com/"
            className="underline"
            target="_blank"
          >
            gender health gap.
          </a>{" "}
          We are actively hiring so please reach out if you are interested in
          joining our team!
        </div>
      </div>
      <div className="md:mx-auto flex items-end order-1 md:order-2 overflow-hidden h-full">
        <StaticImage
          placeholder="blurred"
          alt="Profile Pic"
          src={"../images/outline.png"}
          className={`mx-auto w-auto max-w-1/2 h-full `}
          objectFit="scale-down"
        />
      </div>
    </section>
  );
};
