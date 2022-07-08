import { Transition } from "@headlessui/react";
import { Link } from "gatsby";
import React from "react";

const MobileMenu = ({
  currentPage,
  pageNames,
  open,
}: {
  currentPage: string;
  pageNames: string[];
  open: boolean;
}) => {
  return (
    <Transition
      show={open}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
      className="fixed right-0 z-30 w-2/3 space-y-4 text-lg text-white bg-fixed divide-y-2 shadow-sm top-20 dark:bg-slate-900 dark:shadow-lightblue shadow-blue-800 divide-slate-700"
    >
      <div>
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
  );
};

export default MobileMenu;
