import { Menu, Transition } from "@headlessui/react";
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
      className="absolute top-0 right-0 z-30 self-end w-2/3 h-full space-y-4 text-lg bg-white border-t border-b border-l divide-y-2 dark:text-white dark:bg-slate-900 divide-slate-700 dark:border-lightblue grow"
    >
      <Menu.Items static>
        {pageNames.map((pageName) => (
          <Menu.Item key={pageName}>
            <Link
              to={pageName == "about" ? "/" : `/${pageName}`}
              className={`${
                currentPage == pageName
                  ? "dark:text-lightblue underline"
                  : "dark:hover:text-lightblue hover:underline"
              } uppercase font-upper my-4 text-2xl`}
            >
              <p className="my-4 text-center">{pageName}</p>
            </Link>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Transition>
  );
};

export default MobileMenu;
