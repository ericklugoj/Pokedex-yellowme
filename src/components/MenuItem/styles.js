import styled from "styled-components";

export const ItemContainer = styled.div`
  padding: 0.6em 0;
  color: white;
  background: ${props => (props.selected ? "#3f3939" : "none")};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #3f3939;
  }
`;

export const PokemonId = styled.span`
  width: 65px;
  color: gray;
  text-align: end;
  letter-spacing: 2px;
  display: inline-block;
`;

export const PokemonName = styled.span`
  color: #fff;
  letter-spacing: 2px;
  margin-left: 0.6em;
`;
