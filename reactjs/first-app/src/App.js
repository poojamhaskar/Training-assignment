import React from "react";
import "./App.css";
import Footer from "../src/Assignment-2/common/Footer";
import Header from "../src/Assignment-2/common/Header";
import "../src/Assignment-2/assets/style.css";

import { BrowserRouter } from "react-router-dom";
import Route from "../src/Assignment-2/component/Route";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


