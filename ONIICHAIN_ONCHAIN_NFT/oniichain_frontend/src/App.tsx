import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./utils/getLibrary";
import MenuBar from "./components/main/MenuBar";
import Container from "./components/main/Container";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <BrowserRouter>
            <MenuBar />
          <div id="wrap" className="wrap">
            {/* <Header /> */}
            <Container />
          </div>
        </BrowserRouter>
      </Web3ReactProvider>
    </>
  );
};

export default App;
