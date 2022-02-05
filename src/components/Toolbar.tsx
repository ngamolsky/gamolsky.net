import { Link } from "gatsby";
import * as React from "react";

type ToolbarProps = {
  pageNames: string[];
  currentPage: string;
};
const Toolbar = ({ pageNames, currentPage }: ToolbarProps) => {
  return (
    <header className="p-4 shadow-sm dark:shadow-blue-300 shadow-blue-800 text-2xl">
      <div className="font-lower flex space-x-4 mx-auto max-w-6xl">
        <div className="grow">
          <Link
            to="/"
            className="dark:hover:text-blue-300 hover:text-blue-800 hover:underline"
          >
            gamolsky.net
          </Link>
        </div>
        {pageNames.map((pageName) => (
          <Link
            to={pageName == "about" ? "/" : `/${pageName}`}
            className={`flex-none ${
              currentPage == pageName
                ? "text-blue-800 dark:text-blue-300 underline"
                : "dark:hover:text-blue-300 hover:text-blue-800 hover:underline"
            } uppercase font-upper hidden sm:inline`}
          >
            {pageName}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Toolbar;
