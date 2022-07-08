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
    <div className="flex flex-col w-full h-screen overflow-hidden dark:text-white">
      <Toolbar
        currentPage={currentPage}
        pageNames={pageNames}
        open={open}
        toggleIsOpen={() => {
          setIsOpen(!open);
        }}
      />
      <div className="relative w-full h-full max-w-6xl">
        <div
          className="h-full mx-auto overflow-auto pb-28"
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
