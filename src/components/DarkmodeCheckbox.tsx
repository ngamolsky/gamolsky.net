import React from "react";

export const DarkModeCheckbox = ({
  value,
  isChecked,
  onChange,
}: {
  value: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className="flex gap-1 cursor-pointer hover:scale-105">
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={onChange}
        className="relative appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-black dark:checked:bg-white checked:border-transparent focus:outline-none my-auto"
      />
      <span className="text-xs uppercase ">{value}</span>
    </label>
  );
};
