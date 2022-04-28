import { Link } from "gatsby";
import * as React from "react";

type ToolbarProps = {
  pageNames: string[];
  currentPage: string;
};
const Toolbar = ({ pageNames, currentPage }: ToolbarProps) => {
  return (
    <header className="sticky top-0 z-10 p-4 text-2xl shadow-sm dark:shadow-lightblue shadow-blue-800 dark:bg-slate-900 ">
      <div className="flex max-w-6xl mx-auto space-x-4 font-lower">
        <div className="grow">
          <Link to="/" className="dark:hover:text-lightblue hover:underline">
            gamolsky.net
          </Link>
        </div>
        {pageNames.map((pageName) => (
          <Link
            key={pageName}
            to={pageName == "about" ? "/" : `/${pageName}`}
            className={`flex-none ${
              currentPage == pageName
                ? "dark:text-lightblue underline"
                : "dark:hover:text-lightblue hover:underline"
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
