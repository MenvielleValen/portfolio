import { useEffect, useState } from "react";
import "./FloatNavigator.css";

const sections = [
  {
    href: "about",
  },
  {
    href: "skills",
  },
  {
    href: "projects",
  },
];

export const FloatNavigator = ({activeSection, selectedSection}: {activeSection: number, selectedSection: (section: number) => void}) => {
  return (
    <ul className="float-navigator">
      {sections.map((s, i) => (
        <li onClick={()=> selectedSection(i)} >
            <div key={`${i}_section`} className={i === activeSection ? "dot-item-active" : "dot-item"}></div>
        </li>
      ))}
    </ul>
  );
};
