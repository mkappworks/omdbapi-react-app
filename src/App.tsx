import React from "react";

import Main from "./containers/Main";
import { ContainerDiv } from "./components/ContainerDiv";

const App: React.FC = () => {
  return (
    <ContainerDiv>
      <Main />
    </ContainerDiv>
  );
};

export default App;
