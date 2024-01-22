import React, { PropsWithChildren } from "react";
import { CiStar } from "react-icons/ci";
import "./Title.css";
import { IconType } from "react-icons";

interface IProps {
  icon?: React.ReactNode;
}

export const Title = ({ children, icon }: PropsWithChildren<IProps>) => {
  return (
    <div className="container">
      <div className="icon-container">
        <div className="icon-blur"></div>
        {icon}
      </div>

      <h2 style={{ color: "#FFF", fontSize: 30 }}>{children}</h2>
    </div>
  );
};
