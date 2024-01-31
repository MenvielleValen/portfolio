import "./Skills.css";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { GiJesterHat } from "react-icons/gi";
import { Card } from "./Card/Card";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  {
    name: "Angular",
    icon: <FaAngular size={80} color="#c3002f" />,
    colorHover: "#c3002f",
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs size={80} color="#ffffff" />,
    colorHover: "#ccc",
  },
  {
    name: "React",
    icon: <FaReact size={80} color="#087EA4" />,
    colorHover: "#087EA4",
  },
  {
    name: "React Native",
    icon: <FaReact size={80} color="#087EA4" />,
    colorHover: "#087EA4",
  },
  {
    name: "NestJS",
    icon: <SiNestjs size={80} color="#ea2845" />,
    colorHover: "#ea2845",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs size={80} color="#659a60" />,
    colorHover: "#659a60",
  },
  {
    name: "MongoDB",
    icon: <DiMongodb size={80} color="#00ed64" />,
    colorHover: "#00ed64",
  },
  {
    name: "SQL / SQLServer",
    icon: <SiMicrosoftsqlserver size={80} color="#8d9298" />,
    colorHover: "#8d9298",
    flex: 1,
  },
  {
    name: "Jira",
    icon: <SiJira size={80} color="#2580f7" />,
    colorHover: "#2580f7",
  },
];

export const Skills = () => {
  return (
    <section>
      <div className="skills-container">
        {skills.map((s, i) => (
          <Card key={`skill_${i}_${s.name}`} style={{ flexGrow: 1 }} pointerColor={s.colorHover}>
            <div style={{display: 'flex', justifyContent: 'center', gap: 16, alignItems: 'center', fontWeight: 800}}>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
                className="icon-container"
              >
                {s.icon}
              </div>
              <p
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {s.name}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
