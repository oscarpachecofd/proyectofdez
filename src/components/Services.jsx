import React from "react";
import styled from "styled-components";
import Services1 from "../assets/noticias.png";
import Services2 from "../assets/bigdata.webp";
import Services3 from "../assets/micro.png";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">Nuestros servicios</h1>
        <p>
          Nos dedicamos a informar y dar servicio a nuestros usuarios para mejorar en el freestyle
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>
            Recogemos <span>datos masivos</span> relacionados a freestyle y batallas de gallos y damos información en base a nuestros análisis
          </p>
          <button>BIG DATA</button>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
            Mostramos noticias de actualidad al usuario para poder informar de todas las novedades relacionadas al freestyle
          </p>
          <button>NOTICIAS</button>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>
            Tenemos rutinas de entrenamiento para poder mejorar tu freestyle y tu estilo libre mediante diferentes estímulos
          </p>
          <button>ENTRENAR</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
