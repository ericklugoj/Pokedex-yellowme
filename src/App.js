import React, { Fragment } from "react";
import { Template } from "./template";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Template />
    </Fragment>
  );
};

export default App;
