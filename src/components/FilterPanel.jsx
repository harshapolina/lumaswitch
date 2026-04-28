import React from "react";
import { Plus, X } from "lucide-react";
import { filterOptions } from "../mock";

const FilterPanel = ({ open, onClose, selectedFilters, onToggleFilter, onClearAll }) => {
  if (!open) return null;

  const totalSelected = Object.values(selectedFilters).reduce((acc, arr) => acc + arr.length, 0);

  return (
    <div className="fixed inset-0 z-[60] flex justify-end" onClick={onClose}>
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="relative icw-bg w-full max-w-md h-full overflow-y-auto p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif-icw text-2xl icw-text">Filter ({totalSelected})</h2>
          <button onClick={onClose} className="icw-text hover:opacity-60 transition-opacity">
            <X size={22} />
          </button>
        </div>

        {Object.entries(filterOptions).map(([groupName, options]) => (
          <div key={groupName} className="mb-8">
            <h3 className="text-[14px] icw-text mb-3 font-medium">{groupName}</h3>
            <ul className="space-y-2">
              {options.map((opt) => {
                const isSelected = selectedFilters[groupName]?.includes(opt);
                return (
                  <li key={opt}>
                    <button
                      onClick={() => onToggleFilter(groupName, opt)}
                      className="flex items-center gap-3 text-[14px] icw-text hover:opacity-60 transition-opacity"
                    >
                      <span
                        className={`w-[14px] h-[14px] border border-[#4a1818] flex items-center justify-center ${
                          isSelected ? "bg-[#4a1818]" : "bg-transparent"
                        }`}
                      >
                        {isSelected && <span className="text-[#ede4cf] text-[10px] leading-none">✓</span>}
                      </span>
                      {opt}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {totalSelected > 0 && (
          <button
            onClick={onClearAll}
            className="text-[13px] icw-text underline hover:opacity-60 transition-opacity"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;
