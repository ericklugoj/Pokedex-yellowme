import React from "react";
import { Contenedor, LogoContainer, ListContainer, Logo } from "./styles";
import Pokeball_logo from "../../assets/pokeball.png";

export const MenuContainer = ({ children }) => {
  return (
    <Contenedor>
      <LogoContainer>
        <Logo src={Pokeball_logo} alt="Pokeball logo" />
        <h1>POKÉDEX</h1>
      </LogoContainer>
      <ListContainer>{children}</ListContainer>
    </Contenedor>
  );
};
