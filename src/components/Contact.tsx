import { motion } from "framer-motion";
import * as React from "react";

export const Contact = () => {
  return (
    <div id="contact" className="text-xl gap-4 flex h-full ">
      <motion.div
        className="self-center w-full text-center "
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
    </div>
  );
};
