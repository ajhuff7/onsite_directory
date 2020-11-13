import React, { Component } from "react";
import Gallery from "./pages/Gallery";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";




  function App() {
    return (
      <div>
        <Title />
        <Wrapper>
          <Gallery />
        </Wrapper>
      </div>
    );
  }
  
  

  
  export default App;

