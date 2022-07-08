import { Transition } from "@headlessui/react";
import { Link } from "gatsby";
import React, { Fragment, useState } from "react";
import MobileMenu from "./MobileMenu";
import Toolbar from "./Toolbar";

type ContainerProps = {
  pageNames: string[];
  currentPage: string;
  children: React.ReactNode;
};

const Container = ({ children, currentPage, pageNames }: ContainerProps) => {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full min-h-full dark:bg-slate-900 dark:text-white">
      <Toolbar
        currentPage={currentPage}
        pageNames={pageNames}
        open={open}
        toggleIsOpen={() => {
          setIsOpen(!open);
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div
          onClick={() => {
            if (open) {
              setIsOpen(false);
            }
          }}
        >
          {children}
        </div>
        <MobileMenu
          open={open}
          pageNames={pageNames}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Container;
