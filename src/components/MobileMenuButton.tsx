import { Transition } from "@headlessui/react";
import React from "react";

const MobileMenuButton = ({
  className,
  open,
  toggleIsOpen,
}: {
  className?: string;
  open: boolean;
  toggleIsOpen: () => void;
}) => {
  console.log(open);

  return (
    <div onClick={toggleIsOpen} className={`${className} container relative`}>
      <Transition
        show={!open}
        unmount={false}
        enter="transition ease-linear duration-300 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-300 transform"
        leaveFrom="opacity-100 rotate-0"
        leaveTo="opacity-0 rotate-180"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Transition>
      <Transition
        className={"w-full h-full absolute top-0 left-0 p-1"}
        show={open}
        enter="transition ease-linear duration-300 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-300 transform"
        leaveFrom="opacity-100 rotate-0"
        leaveTo="opacity-0 -rotate-180"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Transition>
    </div>
  );
};

export default MobileMenuButton;
