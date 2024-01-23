import "./App.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Hero } from "./components/hero/Hero";
import { Skills } from "./components/skills/Skills";
import { Title } from "./components/title/Title";
import { CiStar } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Experience } from "./components/experience/Experience";
import { useEffect, useState } from "react";
import { CustomButton } from "./components/custom-button/CustomButton";
import { ToggleButton } from "./components/custom-button/toggleButton/ToggleButton";

const home = {
  experienceTitle: {
    es: "Experiencia",
    en: "Experience",
  },
  skillsTitle: {
    es: "Habilidades",
    en: "Skills",
  },
};

const langOptions = [
  {
    key: "en",
    label: "En",
  },
  {
    key: "es",
    label: "Es",
  },
];

function App() {

  const localStorageLang = (): "es" | "en" => {
    const _lang = localStorage.getItem("lang");
    if (!_lang) return "es";
    if (_lang !== "es" && _lang !== "en") return "es";
    return _lang as "es" | "en";
  };

  const [lang, setLang] = useState<"en" | "es">(localStorageLang);

  const changeLang = (value: string) => {
    window.location.href = value;
  };

  useEffect(() => {
    const langUrl = window.location.href.split("/");

    if (
      langUrl[3] &&
      (langUrl[3] === "en" || langUrl[3] === "es") &&
      langUrl[3] !== lang
    ) {
      setLang(langUrl[3]);
      const html = document.getElementById("app-head");
      if (html) {
        html.setAttribute("lang", langUrl[3]);
      }
      localStorage.setItem("lang", langUrl[3]);
    }
  }, [window.location.href]);

  return (
    <div className="App">
      <div className="app-container" id="about">
        <header className="header-container">
          <div className="header-links-container">
            <a href="mailto:menvielle.valen@gmail.com">
              menvielle.valen@gmail.com
            </a>
            <div>
              <ToggleButton
                options={langOptions}
                onChange={changeLang}
                active={lang}
              />
            </div>
          </div>
        </header>
        <div>
          <Hero lang={lang} />
        </div>
        <div>
          <Title icon={<CiStar size={40} color="#22d3ee" strokeWidth="1" />}>
            {home.skillsTitle[lang]}
          </Title>
          <Skills />
        </div>
        <div style={{ marginTop: 50 }}>
          <Title icon={<MdOutlineWorkOutline size={40} color="#22d3ee" />}>
            {home.experienceTitle[lang]}
          </Title>
          <Experience />
        </div>
      </div>
      <footer>
        <div className="footer-body">
          <div className="header-links-container">
            <a href="mailto:menvielle.valen@gmail.com">
              menvielle.valen@gmail.com
            </a>
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
      </footer>
    </div>
  );
}

export default App;
