import React from "react";
import { ArrowUpRight, ArrowDownLeft, Plus } from "lucide-react";
import { EFilters } from "../../lib/types/types";

const filterButtons = [
  { label: EFilters.ALL, icon: <ArrowUpRight size={20} />, bg: "gray" },
  {
    label: EFilters.SEND,
    icon: <ArrowUpRight size={20} />,
    bg: "blue",
  },
  {
    label: EFilters.RECEIVE,
    icon: <ArrowDownLeft size={20} />,
    bg: "green",
  },
  { label: EFilters.ADD, icon: <Plus size={20} />, bg: "purple" },
];

interface IProps {
  setFilter: (value: EFilters) => void;
}

const FilterBtns: React.FC<IProps> = ({ setFilter }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
      {filterButtons.map(({ label, icon, bg }) => (
        <button
          key={label}
          onClick={() => setFilter(label)}
          className={`bg-${bg}-600 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow hover:bg-${bg}-700 transition text-base sm:text-lg`}>
          {icon} {label}
        </button>
      ))}
    </section>
  );
};

export default FilterBtns;
