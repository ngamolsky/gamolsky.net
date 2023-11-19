import { motion } from "framer-motion";
import * as React from "react";
import GithubIcon from "../images/github.svg";
import LinkedInIcon from "../images/linkedin.svg";

export const Contact = () => {
  return (
    <section id="contact" className="text-xl gap-4 flex h-full relative">
      <motion.div
        className="self-center w-full text-center mx-16"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        Drop me a line at{" "}
        <a
          target="_blank"
          href="mailto:nikita@gamolsky.net?subject=Hello From your Site!"
          className="underline hover:text-pink"
        >
          nikita@gamolsky.net
        </a>
        .
      </motion.div>
      <div className="absolute bottom-2 right-2 md:hidden">
        <div className="flex gap-2">
          <a href="https://github.com/ngamolsky" target="_blank">
            <GithubIcon
              className="dark:fill-white h-4 w-4 cursor-pointer"
              viewBox="0 0 100 100"
            />
          </a>
          <a href="https://www.linkedin.com/in/ngamolsky/" target="_blank">
            <LinkedInIcon
              className="dark:fill-white cursor-pointer"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
