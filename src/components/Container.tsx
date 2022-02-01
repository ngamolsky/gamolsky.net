import React from "react";
import Toolbar from "./Toolbar";

type ContainerProps = {
  pageNames: string[];
  currentPage: string;
  children: React.ReactNode;
};

const Container = ({ children, currentPage, pageNames }: ContainerProps) => {
  return (
    <div className="dark:bg-slate-900 dark:text-white  h-screen">
      <Toolbar currentPage={currentPage} pageNames={pageNames} />
      {children}
    </div>
  );
};

export default Container;
