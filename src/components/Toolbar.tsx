import { Link } from "gatsby";
import * as React from "react";

type ToolbarProps = {
  pageNames: string[];
  currentPage: string;
};
const Toolbar = ({ pageNames, currentPage }: ToolbarProps) => {
  return (
    <header className="p-4 shadow-sm shadow-blue-300 text-2xl">
      <div className="font-lower flex space-x-4 mx-20">
        <div className="grow">
          <Link to="/" className="hover:text-blue-300 hover:underline">
            gamolsky.net
          </Link>
        </div>
        {pageNames.map((pageName) => (
          <Link
            to={pageName == "about" ? "/" : `/${pageName}`}
            className={`flex-none ${
              currentPage == pageName
                ? "text-blue-300 underline"
                : "hover:text-blue-300 hover:underline"
            } uppercase font-upper`}
          >
            {pageName}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Toolbar;
