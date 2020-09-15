import React from "react";
import "./App.css";
import Footer from "./Assign-3/component/common/Footer"
import Header from "./Assign-3/component/common/Header"
 

import { BrowserRouter } from "react-router-dom";
import Routing from "./Assign-3/router/Routing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
