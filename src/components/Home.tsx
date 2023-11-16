import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Home = () => {
  return (
    <div id="home" className="text-xl gap-4 flex h-full ">
      <div className="max-w-xl flex flex-col justify-end gap-4 ">
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
      <div className="w-1/5 mx-auto flex items-end">
        <StaticImage
          placeholder="blurred"
          alt="Profile Pic"
          src={"../images/outline.png"}
          className={`mx-auto`}
        />
      </div>
    </div>
  );
};
