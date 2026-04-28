import React from "react";
import { sidebarSections } from "../mock";

const Sidebar = ({ activeCategory, onCategoryChange }) => {
  return (
    <aside className="w-full lg:w-[220px] flex-shrink-0 lg:sticky lg:top-[80px] lg:self-start py-2 lg:py-0">
      <div className="space-y-7">
        {sidebarSections.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <h3 className="text-[14px] icw-text mb-2 font-normal">{section.title}</h3>
            )}
            <ul className="space-y-[6px]">
              {section.items.map((item, i) => {
                const isActive = item.label === activeCategory;
                return (
                  <li
                    key={i}
                    onClick={() => onCategoryChange && onCategoryChange(item.label)}
                    className={`text-[14px] cursor-pointer flex items-center gap-2 transition-opacity hover:opacity-60 ${
                      section.title === "Lighting" ? "pl-3" : ""
                    }`}
                  >
                    {section.title === "Lighting" && (
                      <span
                        className={`inline-block w-[6px] h-[6px] rounded-full -ml-3 ${
                          isActive ? "bg-[#4a1818]" : "bg-transparent"
                        }`}
                      />
                    )}
                    <span className="icw-text">{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
