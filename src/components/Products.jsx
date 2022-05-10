import React from "react";
import styled from "styled-components";
import chuty from "../assets/chuty.jpg";
import sweetpain from "../assets/sweetpain.jpg";
import bnet from "../assets/bnet.jpg";
import gazir from "../assets/gazir.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: chuty,
      name: "Chuty",
      ciudad: "Madrid",
      descripcion: "Freestyler completo caracterizado por su complejidad retórica",
      instagram: "https://www.instagram.com/chutyvk/"
    },
    {
      image: sweetpain,
      name: "Sweetpain",
      ciudad: "Sevilla",
      descripcion: "Freestyler caracterizado por su ingenio y rimas con pasión y filosóficas",
      instagram: "https://www.instagram.com/sweetpain9/"
    },
    {
      image: bnet,
      name: "Bnet",
      ciudad: "Madrid",
      descripcion: "Freestyler caracterizado por su calidad, estilo propio y estructuras",
      instagram: "https://www.instagram.com/akabnet/"
    },

    {
      image: gazir,
      name: "Gazir",
      ciudad: "Asturias",
      descripcion: "Freestyler caracterizado por su complejidad en las rimas e ingenio extremo",
      instagram: "https://www.instagram.com/gazir_ysb/"
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Mejores Freestylers</span> de España
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.ciudad}</h3>
              <p>{product.descripcion}</p>
              <button><a href={product.instagram} target="_blank">Instagram</a></button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      a{
        color:white;
        text-decoration:none;
      }
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
