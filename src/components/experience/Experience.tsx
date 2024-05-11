import { PropsWithChildren } from "react";
import { Card } from "../skills/Card/Card";
import "./Experience.css";
import { IoIosLink } from "react-icons/io";

const experiences = {
  es: [
    {
      title: "Software developer",
      company: "Mercado Libre",
      subtitle: "may. 2024 - actualidad",
      resume:
        " ",
      links: [
        {
          title: "Mercado Libre - Argentina",
          href: "https://mercadolibre.com.ar",
        },
      ],
    },
    {
      title: "SSR Software developer",
      company: "COA Tecnología de la Información Aplicada",
      subtitle: "oct. 2021 - may. 2024",
      resume:
        "TypeScript · Angular · Integración continua y entrega continua (CI/CD) · Transferencia de Estado Representacional (REST) · Desarrollo de software · Desarrollo front end · NgRx · Angular Material · SQL · Microsoft SQL Server",
      links: [
        {
          title: "COA",
          href: "https://www.coa.com.ar/",
        },
      ],
    },
  ],
  en: [
    {
      title: "Software developer",
      company: "Mercado Libre",
      subtitle: "may. 2024 - present",
      resume:
        " ",
      links: [
        {
          title: "Mercado Libre - Argentina",
          href: "https://mercadolibre.com.ar",
        },
      ],
    },
    {
      title: "SSR Software developer",
      company: "COA Tecnología de la Información Aplicada",
      subtitle: "oct. 2021 - may. 2024",
      resume:
        "TypeScript · Angular · Integración continua y entrega continua (CI/CD) · API REST · Software development · Frontend development · NgRx · Angular Material · SQL · Microsoft SQL Server",
      links: [
        {
          title: "COA",
          href: "https://www.coa.com.ar/",
        },
      ],
    },
  ],
};

export const Experience = ({
  lang,
}: PropsWithChildren<{ lang: "es" | "en" }>) => {
  return (
    <section className="section-experience" style={{ position: "relative" }}>
      <div
        className="experiences-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {experiences[lang].map((e, i) => (
          <Card
            key={e.title + i}
            style={{ position: "relative" }}
            data-aos="fade-up"
          >
            <div
              style={{
                display: "flex",
              }}
              className="experience-header"
            >
              <h4 className="title-job">{e.title}</h4>
              <p className="subtitle">{e.subtitle}</p>
            </div>
            <p className="company">{e.company}</p>

            <hr />
            <p className="resume">{e.resume}</p>

            <div style={{ marginTop: 10 }}>
              {e.links?.map((l, i) => (
                <div className="row gap-10" key={`${l.href}_link_${i}`}>
                  <IoIosLink color="#fff" size={18} />
                  <a
                    className="experience-link"
                    style={{ textDecoration: "none" }}
                    href={l.href}
                    target="__blank"
                  >
                    {l.title}
                  </a>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
