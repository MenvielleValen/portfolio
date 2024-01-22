import "./App.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Hero } from "./components/hero/Hero";
import { Skills } from "./components/skills/Skills";
import { Title } from "./components/title/Title";
import { CiStar } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Experience } from "./components/experience/Experience";

function App() {
  return (
    <div className="App">
      <div className="app-container" id="about">
        <header className="header-container">
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
        </header>
        <div>
          <Hero />
        </div>
        <div>
          <Title icon={<CiStar size={40} color="#fff" />}>Skills</Title>
          <Skills />
        </div>
        <div style={{ marginTop: 50 }}>
          <Title icon={<MdOutlineWorkOutline size={40} color="#fff" />}>
            Experience
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
