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
          <Link to="/" className="dark:hover:text-lightblue hover:underline">
            gamolsky.net
          </Link>
        </div>
        {pageNames.map((pageName) => (
          <Link
            to={pageName == "about" ? "/" : `/${pageName}`}
            className={`flex-none ${
              currentPage == pageName
                ? "text-blue-800 dark:text-blue-300 underline"
                : "dark:hover:text-blue-300 hover:underline"
            } uppercase font-upper hidden sm:inline`}
          >
            {pageName}
          </Link>
        ))}

        <input
          type="checkbox"
          name="open-menu"
          id="open-menu"
          className="peer hidden"
        />
        <label
          htmlFor="open-menu"
          className="ml-auto self-center p-2 cursor-pointer group border border-yellow rounded-full peer-checked:border-red-500 "
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-yellow"
          >
            <line x1="0" y1="6" x2="24" y2="6" stroke-linecap="round" />
            <line x1="0" y1="12" x2="24" y2="12" stroke-linecap="round" />
            <line x1="0" y1="18" x2="24" y2="18" stroke-linecap="round" />
          </svg>
        </label>
      </div>
    </header>
  );
};

export default Toolbar;
