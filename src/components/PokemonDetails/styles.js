import styled from "styled-components";

//? Handle background color of typeContainer div
const handleColorType = type => {
  switch (type) {
    case "normal":
      return "background: #A8A878;";
    case "fire":
      return "background: #F08030;";
    case "water":
      return "background: #6890F0;";
    case "grass":
      return "background: #78C850;";
    case "electric":
      return "background: #F8D030;";
    case "ice":
      return "background: #98D8D8;";
    case "ground":
      return "background: #E0C068;";
    case "flying":
      return "background: #A890F0;";
    case "poison":
      return "background: #A040A0;";
    case "fighting":
      return "background: #C03028;";
    case "psychic":
      return "background: #F85888;";
    case "dark":
      return "background: #705848;";
    case "rock":
      return "background: #B8A038;";
    case "bug":
      return "background: #A8B820;";
    case "ghost":
      return "background: #705898;";
    case "steel":
      return "background: #B8B8D0;";
    case "dragon":
      return "background: #7038F8;";
    case "fairy":
      return "background: #FFAEC9;";
    default:
      return "background: none;";
  }
};

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ededed;
  background-image: url(${props => props.src});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const DetailsContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TypesContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TypeContainer = styled.div`
  ${({ type }) => handleColorType(type)}
  width: 120px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.2em;
  border-radius: 5px;
  margin-right: 5px;
`;

export const PokemonName = styled.h1`
  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const PokemonNumber = styled.h1`
  color: lightgray;
  font-size: larger;
  letter-spacing: 2px;
`;
