import { Transition } from "@headlessui/react";
import { Link } from "gatsby";
import React from "react";

import MobileMenuButton from "./MobileMenuButton";

type ToolbarProps = {
  pageNames: string[];
  currentPage: string;
  toggleIsOpen: () => void;
  open: boolean;
};
const Toolbar = ({
  pageNames,
  currentPage,
  toggleIsOpen,
  open,
}: ToolbarProps) => {
  return (
    <header className="sticky top-0 z-10 p-4 text-2xl bg-white shadow-sm dark:shadow-lightblue shadow-blue-800 dark:bg-slate-900">
      <div className="flex max-w-5xl px-4 mx-auto space-x-4 font-lower">
        <div className="grow">
          <Link
            to="/"
            className="dark:hover:text-lightblue hover:text-darkerblue hover:underline"
          >
            gamolsky.net
          </Link>
        </div>
        {pageNames.map((pageName) => (
          <Link
            key={pageName}
            to={pageName == "about" ? "/" : `/${pageName}`}
            className={`flex-none ${
              currentPage == pageName
                ? "dark:text-lightblue text-darkerblue underline"
                : "dark:hover:text-lightblue hover:text-darkerblue hover:underline"
            } uppercase font-upper hidden sm:inline`}
          >
            {pageName}
          </Link>
        ))}
        <MobileMenuButton
          className="w-8 h-8 p-1 my-auto rounded-full ring-1 ring-current sm:hidden"
          open={open}
          toggleIsOpen={toggleIsOpen}
        />
      </div>
    </header>
  );
};

export default Toolbar;
