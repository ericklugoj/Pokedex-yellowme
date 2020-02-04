import React, { Fragment } from "react";
import {
  ImageContainer,
  TypeContainer,
  TypesContainer,
  PokemonName,
  PokemonNumber,
  DetailsContainer
} from "./styles";

export const PokemonDetails = ({ pokemon }) => {
  let { id, name, types } = pokemon;
  id = id.toString().padStart(3, 0);

  return (
    <Fragment>
      <ImageContainer
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
      />
      <TypesContainer>
        {types.map((type, index) => (
          <TypeContainer key={index} type={type.type.name}>
            {type.type.name}
          </TypeContainer>
        ))}
      </TypesContainer>
      <DetailsContainer>
        <PokemonName>{name}</PokemonName>
        <PokemonNumber>No. {id}</PokemonNumber>
      </DetailsContainer>
    </Fragment>
  );
};
