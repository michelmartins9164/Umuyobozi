import React from "react";
import { ContainerNavBar, Offers } from "../../styled";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <ContainerNavBar>
        <ol>
          <li>
            <Link to="/">
              <p>Inicio</p>
            </Link>
          </li>
          <li>
            <Link to="/catalogo">
              <p>Catálogo</p>
            </Link>
          </li>
          <li>
            <Link to="/sobre">
              <p>Sobre</p>
            </Link>
          </li>
          <li>
            <Offers>
              <Link to="">
                <p>Em oferta</p>
              </Link>
            </Offers>
          </li>
        </ol>
      </ContainerNavBar>
    </div>
  );
};
