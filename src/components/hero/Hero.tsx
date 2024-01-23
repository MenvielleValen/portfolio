import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CustomButton } from "../custom-button/CustomButton";
import "./Hero.css";

const hero = {
  title: {
    en: (
      <h1 className="title">
        Hi, I'm <span className="text-blue">Valentín 👋</span>
      </h1>
    ),
    es: (
      <h1 className="title">
        Hola, Soy <span className="text-blue">Valentín 👋</span>
      </h1>
    ),
  },
  description: {
    en: (
      <p className="description">
        I'm <span className="text-blue bold">software developer</span> with over
        2 years experience. I am currently working with Angular and Typescript.
        I have experience with React, React Native in frontend and NestJS,
        NextJS, Express in backend
      </p>
    ),
    es: (
      <p className="description">
        Soy <span className="text-blue bold">software developer</span> con más
        de 2 años de experiencia. Actualmente estoy trabajando con Angular y
        Typecript. Tengo experiencia con React, React Native en frontend y
        NestJS, NextJS, Express en backend
      </p>
    ),
  },
  buttonResume: {
    es: "Descargar CV",
    en: "Download Resume",
  },
};

interface Props {
  lang?: "es" | "en";
}

export const Hero = ({ lang = "en" }: Props) => {
  const downloadResume = () => {
    const rutaPDF = `/assets/docs/${lang}/ValentinMenvielleCandiaResume.pdf`;
    window.open(process.env.PUBLIC_URL + rutaPDF, "_blank");
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <div>
          {hero.title[lang]}
          {hero.description[lang]}
          <div className="actions-container">
            <CustomButton onClick={downloadResume}>
              {hero.buttonResume[lang]}
            </CustomButton>
            <div className="social-icons-container">
              <a href="https://github.com/MenvielleValen" target="__blank">
                <FaGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/valentinmenviellecandia/"
                target="__blank"
              >
                <FaLinkedin size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
