import "./Skills.css";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { GiJesterHat } from "react-icons/gi";

const skills = [
    {
        name: "React",
        icon: <FaReact size={100} color="#087EA4"/>,
    },
    {
        name: "Angular",
        icon: <FaAngular size={100} color="#c3002f"/>,
    },
    {
        name: "React Native",
        icon: <TbBrandReactNative size={100} color="#087EA4"/>,
    },
    {
        name: "NestJS",
        icon: <SiNestjs size={100} color="#ea2845"/>,
    },
    {
        name: "NodeJS",
        icon: <FaNodeJs size={100} color="#659a60"/>,
    },
    {
        name: "Jest",
        icon: <GiJesterHat size={100} color="#c21325"/>,
    },
    {
        name: "MongoDB",
        icon: <DiMongodb size={100} color="#00ed64"/>,
    },
    {
        name: "SQL / SQLServer",
        icon: <SiMicrosoftsqlserver size={100} color="#8d9298"/>,
        flex: 1,
    },
    {
        name: "Jira",
        icon: <SiJira size={100} color="#2580f7"/>,
    },
    {
        name: "Version control Git",
        icon: <FaGitAlt size={100} color="#e84e31"/>,
    },
]


export const Skills = () => {
  return (
    <section>
       <div className="skills-container">
       {
            skills.map((s, i) => (
                <div key={`skill_${i}`} className="card" style={ {flexGrow: 1} }>
                    <div style={{width: '50%', display: 'flex', justifyContent: 'flex-start'}} className="icon-container">
                    {s.icon}
                    </div>
                    <p style={{width: '50%', display: 'flex', justifyContent: 'flex-start'}}>{s.name}</p>
                </div>
            ))
        }
       </div>
    </section>
  );
};
