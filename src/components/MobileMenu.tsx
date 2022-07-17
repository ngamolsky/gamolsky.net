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
      className="fixed right-0 z-30 self-end w-2/3 space-y-4 overflow-hidden text-lg bg-white border-l border-t divide-y-2 top-[64px] dark:text-white dark:bg-slate-900 divide-slate-700 dark:border-lightblue h-full"
    >
      <Menu.Items static className="outline-none">
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
