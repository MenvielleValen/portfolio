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
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ToggleButton } from "./components/custom-button/toggleButton/ToggleButton";
import { Projects } from "./components/projects/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

const home = {
  projectsTitle: {
    es: "Proyectos",
    en: "Projects",
  },
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
    AOS.init({
      once: true,
      offset: 60, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
  }, []);

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
        <div data-aos="fade-down">
          <Hero lang={lang} />
        </div>
        <div data-aos="fade-up">
          <Title
            icon={<AiOutlineFundProjectionScreen size={40} color="#22d3ee" />}
          >
            {home.projectsTitle[lang]}
          </Title>
          <Projects lang={lang} />
        </div>
        <div style={{ marginTop: 50 }}>
          <Title icon={<CiStar size={40} color="#22d3ee" strokeWidth="1" />}  data-aos="fade-up" >
            {home.skillsTitle[lang]}
          </Title>
          <Skills />
        </div>
        <div style={{ marginTop: 50 }}>
          <Title icon={<MdOutlineWorkOutline size={40} color="#22d3ee" />}  data-aos="fade-up" >
            {home.experienceTitle[lang]}
          </Title>
          <Experience lang={lang} />
        </div>
      </div>
      <footer>
        <div className="footer-body">
          <div className="header-links-container">
            <a href="mailto:menvielle.valen@gmail.com">
              menvielle.valen@gmail.com
            </a>
            <div className="social-icons-container">
              <a
                href="https://github.com/MenvielleValen"
                target="__blank"
                aria-label="Valentin Menvielle Candia GITHUB"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/valentinmenviellecandia/"
                target="__blank"
                aria-label="Valentin Menvielle Candia LINKEDIN"
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
