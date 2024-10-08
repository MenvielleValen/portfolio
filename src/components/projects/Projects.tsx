import React, { PropsWithChildren, useEffect } from "react";
import "./Projects.css";
import { Card } from "../skills/Card/Card";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export const projects = [
  {
    title: {
      es: "Responsive Lab",
      en:  "Responsive Lab",
    },
    description: {
      es: (
        <div>
          <p>
          Responsive Lab es una aplicación que desarrollé en un día, inspirada en herramientas que permiten visualizar sitios o aplicaciones web en diversas resoluciones. Utiliza iframes para renderizar el contenido en resoluciones predefinidas, y también ofrece la flexibilidad de agregar nuevas resoluciones personalizadas. Esta herramienta es útil para desarrolladores y diseñadores que desean comprobar rápidamente la adaptabilidad de sus proyectos web en diferentes tamaños de pantalla, sin la necesidad de descargar alguna aplicación mas compleja.
          </p>
          <br />
          <p>
            Utilicé <b>Next.js</b> para el desarrollo. Además, esta aplicación es de código abierto.
          </p>
        </div>
      ),
      en: (
        <div>
          <p>
            Responsive Lab is an application I developed in one day, inspired by tools that allow you to view websites or web applications in various resolutions. It uses iframes to render content in predefined resolutions, and also offers the flexibility to add new custom resolutions. This tool is useful for developers and designers who want to quickly check the adaptability of their web projects across different screen sizes, without the need to download a more complex application.
          </p>
          <br />
          <p>
            I used <b>Next.js</b> for the development. Additionally, this application is open source.
          </p>
        </div>
      ),
    },
    image: "./assets/images/responsivelab.png",
    website: "https://responsivelab.vercel.app/",
    github: "https://github.com/MenvielleValen/check-responsive",
    color: "#CCCCCC",
  },
  {
    title: {
      es: "Monoblock - Aplicación reservas",
      en: "Monoblock - Reservation App",
    },
    description: {
      es: (
        <div>
          <p>
            El desarrollo para el restaurante <b>Monoblock</b> consta de dos
            aplicaciones: una para que las personas puedan realizar sus reservas
            y otra para administrar los eventos y las reservas realizadas.
            Utiliza MercadoPago como pasarela de pago para confirmar las
            reservas y envía correos electrónicos con los detalles de la reserva
            y el código QR correspondiente. Este código QR redirige a los
            usuarios a la página de su reserva.
          </p>
          <br />
          <p>
            Tanto la aplicación para las personas como la aplicación de
            administración están desarrolladas en <b>Next.js</b> y utilizan{" "}
            <b>MongoDB</b>
            como base de datos.
          </p>
        </div>
      ),
      en: (
        <div>
          <p>
            The development for the <b>Monoblock</b> restaurant consists of two
            applications: one for users to make their reservations and another
            one to manage the events and bookings. It uses MercadoPago as a
            payment gateway to confirm the reservations and sends emails with
            the reservation details and the corresponding QR code. This QR code
            redirects users to their reservation page.
          </p>
          <br />
          <p>
            Both the user-facing application and the administration application
            are developed in <b>Next.js</b> and use <b>MongoDB</b> as the
            database.
          </p>
        </div>
      ),
    },
    image: "./assets/images/monoblock.png",
    website: "https://monoblock-app.vercel.app/",
    color: "#000000",
  },
  {
    title: {
      es: "MinLink - URL Shortener",
      en: "MinLink - URL Shortener",
    },
    description: {
      es: (
        <div>
          <p>
            MinLink es un acortador de URLs desarrollado con{" "}
            <b>Next.js, Typescript, MongoDB y Tailwind CSS</b>. Además de
            acortar URLs, MinLink registra la cantidad de clicks en cada enlace.
            Ofrece autenticación con proveedores como GitHub y GitLab. Es un
            proyecto de codigo abierto, en los enlaces se encuentra el link del
            repositorio.
          </p>
          <br />
          <p>
            La idea de MinLink nació mientras exploraba sistemas de diseño.
            Investigando acortadores de URLs, me interesé en cómo funcionaban y
            cuáles eran sus objetivos principales.
          </p>
          <br />
          <p>
            Descubrí la necesidad de simplificar el proceso de acortamiento de
            URLs y también investigué sobre los desafíos de almacenamiento
            asociados. Decidí permitir la personalización de las URLs acortadas
            y utilicé el sistema base62 para generar las URLs aleatorias.
          </p>
          <br />
          <p>
            Además, MinLink cuenta con una implementación de{" "}
            <b>caché en memoria</b> que almacena las consultas más recientes a
            las URL acortadas. Esto permite redirigir a los usuarios sin
            necesidad de realizar consultas adicionales a la base de datos en
            cada solicitud. La caché en memoria está diseñada con salvaguardas
            tanto en términos de espacio como de tiempo de almacenamiento. Se ha
            configurado un proceso programado que se ejecuta diariamente a las
            10:00 AM para eliminar los recursos en caché que han excedido cierto
            límite de tiempo. Además, cada vez que se agrega un nuevo registro,
            se verifica el número total de registros en la caché; si excede un
            máximo predefinido, se reinicia la caché para garantizar un
            rendimiento óptimo y evitar el agotamiento de recursos.
          </p>
        </div>
      ),
      en: (
        <div>
          <p>
            MinLink is a URL shortener developed using{" "}
            <b>Next.js, TypeScript, MongoDB, and Tailwind CSS</b>. In addition
            to shortening URLs, MinLink tracks the number of clicks on each
            link. It offers authentication with providers like GitHub and
            GitLab. It is an open-source project, and the repository link can be
            found in the links.
          </p>
          <br />
          <p>
            The idea for MinLink originated while exploring design systems.
            Investigating URL shorteners, I became interested in how they
            functioned and what their main goals were.
          </p>
          <br />
          <p>
            I discovered the need to simplify the URL shortening process and
            also researched the associated storage challenges. I decided to
            allow customization of shortened URLs and used the base62 system to
            generate random URLs.
          </p>
          <br />
          <p>
            Additionally, MinLink features an implementation of{" "}
            <b>in-memory cache</b> that stores the most recent queries to
            shortened URLs. This allows users to be redirected without needing
            to make additional queries to the database on each request. The
            in-memory cache is designed with safeguards in terms of both space
            and storage time. A scheduled process is configured to run daily at
            10:00 AM to remove cached resources that have exceeded a certain
            time limit. Additionally, each time a new record is added, the total
            number of records in the cache is checked; if it exceeds a
            predefined maximum, the cache is reset to ensure optimal performance
            and prevent resource exhaustion.
          </p>
        </div>
      ),
    },
    image: "./assets/images/minlink.png",
    github: "https://github.com/MenvielleValen/url-shortener",
    website: "https://minlink.vercel.app/",
    color: "#574ED9",
  },
  {
    title: {
      es: "use-detector-hook (package)",
      en: "use-detector-hook (package)",
    },
    description: {
      es: (
        <div>
          <p>
            use-detector-hook es una biblioteca simple que he desarrollado para
            React/Next.js, la cual está disponible en <b>npm / yarn</b>. Incluye
            un hook <b>useElementDetector</b> que permite detectar cuándo un
            elemento está en la pantalla.
          </p>
        </div>
      ),
      en: (
        <div>
          <p>
            use-detector-hook is a simple library I've developed for
            React/Next.js, which is available on <b>npm / yarn</b>. It features
            a hook <b>useElementDetector</b> that allows detecting when an
            element is on the screen.
          </p>
        </div>
      ),
    },
    github: "https://github.com/MenvielleValen/use-element-detector",
    website: "https://www.npmjs.com/package/use-detector-hook",
    color: "#EA2039",
  },
  {
    title: {
      es: "Next.js 14 - Authentication Template with NextAuth.js and MongoDB",
      en: "Next.js 14 - Authentication Template with NextAuth.js and MongoDB",
    },
    description: {
      es: (
        <div>
          <p>
            Este proyecto constituye una plantilla preconfigurada que combina{" "}
            <b>Next.js 14</b> con <b>NextAuth</b>, diseñada bajo una licencia de
            código abierto. Está especialmente desarrollada para facilitar el
            inicio de proyectos con un sistema de autenticación ya establecido.
            Por defecto, incluye la configuración para los siguientes
            proveedores de autenticación: <b>Email, Google, GitHub y GitLab</b>
          </p>
        </div>
      ),
      en: (
        <div>
          <p>
            This project is a preconfigured template that merges{" "}
            <b>Next.js 14</b> with <b>NextAuth</b>, designed under an
            open-source license. It is specifically developed to facilitate the
            initiation of projects with an already established authentication
            system. By default, it includes configurations for the following
            authentication providers: <b>Email, Google, GitHub, and GitLab</b>
          </p>
        </div>
      ),
    },
    github: "https://github.com/MenvielleValen/nextjs-auth-template",
    color: "#ccc",
  },
];

export const Projects = ({
  lang,
}: PropsWithChildren<{ lang: "es" | "en" }>) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 16,
      }}
    >
      {projects.map((p, index) => (
        <Card
          key={`${index}_project`}
          pointerColor={p?.color || null}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {p.image && (
                <img
                  src={p.image}
                  style={{ height: 300, width: "100%", objectFit: "cover" }}
                  alt={p.title[lang]}
                />
              )}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <h2 style={{ margin: 0 }}>{p.title[lang]}</h2>{" "}
                <div className="social-icons-container">
                  {p?.github && (
                    <a
                      href={p.github}
                      target="__blank"
                      aria-label={p.title[lang]}
                      style={{ color: "#fff" }}
                    >
                      <FaGithub size={26} />
                    </a>
                  )}
                  {p?.website && (
                    <a
                      href={p.website}
                      target="__blank"
                      aria-label={p.title[lang]}
                      style={{ color: "#fff" }}
                    >
                      <TbWorld size={26} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              <div>
                <p>{p.description[lang]}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
};
