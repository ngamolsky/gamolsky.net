import { Menu } from "@headlessui/react";
import React, { useState } from "react";
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
    <Menu as="div" className="flex flex-col dark:text-white">
      <Toolbar
        currentPage={currentPage}
        pageNames={pageNames}
        open={open}
        toggleIsOpen={() => {
          setIsOpen(!open);
        }}
      />
      <div
        className="pb-8 grow"
        onClick={() => {
          if (open) {
            setIsOpen(false);
          }
        }}
      >
        {children}
      </div>

      <MobileMenu open={open} pageNames={pageNames} currentPage={currentPage} />
    </Menu>
  );
};

export default Container;
