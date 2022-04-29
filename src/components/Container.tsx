import React from "react";
import Toolbar from "./Toolbar";

type ContainerProps = {
  pageNames: string[];
  currentPage: string;
  children: React.ReactNode;
};

const Container = ({ children, currentPage, pageNames }: ContainerProps) => {
  return (
    <div className="w-full min-h-full dark:bg-slate-900 dark:text-white">
      <Toolbar currentPage={currentPage} pageNames={pageNames} />
      <div className="max-w-5xl mx-auto">{children}</div>
    </div>
  );
};

export default Container;
