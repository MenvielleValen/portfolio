import { useState } from "react";
import "./ToggleButton.css";

interface IProps {
  options: { key: string; label: string }[];
  onChange: (key: string) => void;
  active?: string;
}

export const ToggleButton = ({ options, onChange, active }: IProps) => {
  const onSelected = (key: string) => {
    onChange(key);
  };

  return (
    <div>
      {options.map((o) => (
        <button
          key={o.key + "toggle"}
          onClick={() => onSelected(o.key)}
          className={
            active === o.key
              ? "toggleButton toggleButton-active"
              : "toggleButton"
          }
        >
          {o.label}
        </button>
      ))}
    </div>
  );
};
