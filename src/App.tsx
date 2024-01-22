import "./App.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Hero } from "./components/hero/Hero";
import { FloatNavigator } from "./components/float-navigator/FloatNavigator";
import { useEffect, useRef, useState } from "react";
import { Skills } from "./components/skills/Skills";
import { Title } from "./components/title/Title";
import { CiStar } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Experience } from "./components/experience/Experience";

function App() {
  const [activeSection, setActiveSection] = useState(0);

  const heroRef = useRef(null) as any;
  const skillsRef = useRef(null) as any;
  const projectsRef = useRef(null) as any;

  const handleScroll = () => {
    const offsets = [
      heroRef.current.getBoundingClientRect().y,
      skillsRef.current.getBoundingClientRect().y,
      projectsRef.current.getBoundingClientRect().y,
    ];

    // Calcula la sección activa en función de las posiciones de las secciones
    const windowHeight = window.innerHeight;
    const newActiveSection = offsets.findIndex(
      (offset) => offset > -windowHeight / 2 && offset < windowHeight / 2
    );

    // Actualiza la sección activa solo si ha cambiado
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  const selectedSection = (section: number) => {
    let offset;

    switch (section) {
      case 0:
        offset = heroRef.current.offsetTop;
        break;
      case 1:
        offset = skillsRef.current.offsetTop;
        break;
      case 2:
        offset = projectsRef.current.offsetTop;
        break;
      default:
        break;
    }

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="App">
      <FloatNavigator
        activeSection={activeSection}
        selectedSection={selectedSection}
      />
      <div className="app-container" id="about">
        <header className="header-container">
          <div className="header-links-container">
            <a  href="mailto:menvielle.valen@gmail.com">menvielle.valen@gmail.com</a>
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
        </header>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={projectsRef}>
          <Title icon={<MdOutlineWorkOutline size={40} color="#fff" />}>
            Experience
          </Title>
          <Experience/>
        </div>
        <div ref={skillsRef}>
          <Title icon={<CiStar size={40} color="#fff" />}>Skills</Title>
          <Skills />
        </div>
      </div>
      <footer>
        <div className="footer-body">
          <div className="header-links-container">
              <a href="mailto:menvielle.valen@gmail.com">menvielle.valen@gmail.com</a>
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
