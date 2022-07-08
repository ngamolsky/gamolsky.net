import { Transition } from "@headlessui/react";
import { Link } from "gatsby";
import React, { Fragment, useState } from "react";
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
        <Transition
          as={Fragment}
          show={open}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            className="fixed right-0 z-30 w-2/3 space-y-4 text-lg text-white bg-fixed divide-y-2 shadow-sm top-20 dark:bg-slate-900 dark:shadow-lightblue shadow-blue-800 divide-slate-700"
            onBlur={() => {
              setIsOpen(false);
            }}
            onClick={() => {}}
          >
            {pageNames.map((pageName) => (
              <Link
                key={pageName}
                to={pageName == "about" ? "/" : `/${pageName}`}
                className={`${
                  currentPage == pageName
                    ? "dark:text-lightblue underline"
                    : "dark:hover:text-lightblue hover:underline"
                } uppercase font-upper my-4 text-2xl`}
              >
                <p className="my-4 text-center">{pageName}</p>
              </Link>
            ))}
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Container;
