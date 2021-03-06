import React from "react";
import "./App.scss";
import { Header, Footer, About, Work, Skills } from "container";
import { Navbar } from "components/Navbar";

function App() {
  return <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
  </div>;
}

export default App;
