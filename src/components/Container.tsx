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
    <Menu
      as="div"
      className="flex flex-col h-screen overflow-hidden dark:text-white"
    >
      <Toolbar
        currentPage={currentPage}
        pageNames={pageNames}
        open={open}
        toggleIsOpen={() => {
          setIsOpen(!open);
        }}
      />
      <div className="relative overflow-hidden grow">
        <div
          className="h-full overflow-auto"
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
    </Menu>
  );
};

export default Container;
