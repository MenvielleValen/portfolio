import "./Skills.css";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMicrosoftsqlserver } from "react-icons/si";

const skills = [
    {
        name: "React",
        icon: <FaReact size={100} color="#087EA4"/>,
        extras: [
            {
                name: 'Formly'
            },
            {
                name: 'Ag grid'
            },
            {
                name: 'NgRx'
            },
            {
                name: 'Reactive Forms'
            }
        ]
    },
    {
        name: "Angular",
        icon: <FaAngular size={100} color="#c3002f"/>,
        extras: [
            {
                name: 'Reactive Forms'
            },
            {
                name: 'Redux'
            },
            {
                name: 'Hooks'
            }
        ]
    },
    {
        name: "React Native",
        icon: <TbBrandReactNative size={100} color="#087EA4"/>,
        extras: [
            {
                name: 'Reactive Forms'
            },
            {
                name: 'Redux'
            },
            {
                name: 'Hooks'
            }
        ]
    },
    {
        name: "NestJS",
        icon: <SiNestjs size={100} color="#ea2845"/>,
        extras: [
            {
                name: 'Reactive Forms'
            },
            {
                name: 'Redux'
            },
            {
                name: 'Hooks'
            }
        ]
    },
    {
        name: "NodeJS",
        icon: <FaNodeJs size={100} color="#659a60"/>,
        extras: [
            {
                name: 'Reactive Forms'
            },
            {
                name: 'Redux'
            },
            {
                name: 'Hooks'
            }
        ]
    },
    {
        name: "MongoDB",
        icon: <DiMongodb size={100} color="#00ed64"/>,
        extras: [
            {
                name: 'Reactive Forms'
            },
            {
                name: 'Redux'
            },
            {
                name: 'Hooks'
            }
        ]
    },
    {
        name: "SQL / SQLServer",
        icon: <SiMicrosoftsqlserver size={100} color="#8d9298"/>,
        extras: [
            {
                name: 'Reactive Forms'
            },
            {
                name: 'Redux'
            },
            {
                name: 'Hooks'
            }
        ]
    },
]


export const Skills = () => {
  return (
    <section>
       <div className="skills-container">
       {
            skills.map((s, i) => (
                <div key={`skill_${i}`} className="card">
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
