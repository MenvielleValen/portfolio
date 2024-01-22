import { CustomButton } from "../custom-button/CustomButton";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div>
          <h1 className="title">
            Hi, I'm <span className="text-blue">Valentín 👋</span>
          </h1>
          <p>
            I'm <span className="text-blue bold">software developer</span> with over 2 years experience. I am currently
            working with Angular and Typescript. I have experience with React,
            React Native in frontend and NestJS, NextJS, Express in backend
          </p>

          <div className="actions-container">
            <CustomButton>Download Resume</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};
