import styled from "styled-components";

export const Contenedor = styled.div`
  max-height: 100vh;
  height: 100vh;
  width: 22.5vw;
  background-color: #565252;
  overflow: auto;
  position: absolute;
`;

export const LogoContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Public+Sans&display=swap");
  font-family: "Public Sans", sans-serif;
  letter-spacing: 3px;
  text-align: center;
  padding: 1em;
  background-color: #343030;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 22.5%;
  margin-bottom: 100px;
`;

export const Logo = styled.img`
  width: 55px;
  border: 2px solid #fff;
  border-radius: 50%;
`;

export const ListContainer = styled.div`
  margin-top: 5.4em;
`;
