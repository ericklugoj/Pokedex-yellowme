import React, { Fragment, useState } from "react";
import { Sidemenu } from "../containers/Sidemenu";
import { Content } from "../containers/Content";

export const Template = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(1);
  return (
    <Fragment>
      <Sidemenu handlePokemon={setSelectedPokemon} />
      <Content pokemonId={selectedPokemon} />
    </Fragment>
  );
};
