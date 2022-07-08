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
    <div className="relative flex-col w-full h-screen overflow-hidden dark:bg-slate-900 dark:text-white">
      <Toolbar
        currentPage={currentPage}
        pageNames={pageNames}
        open={open}
        toggleIsOpen={() => {
          setIsOpen(!open);
        }}
      />
      <div className="relative flex flex-col w-full h-screen max-w-6xl overflow-hidden">
        <div
          className="mx-auto overflow-auto grow"
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
