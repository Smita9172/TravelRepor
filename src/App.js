


import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Agra from "./routes/Agra"
import Gkp from './routes/Gkp'
import Vrns from './routes/Vrns'
import Ayo from './routes/Ayo'

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/agra" element={<Agra/>} />
      <Route exact path="/gorakhpur" element={<Gkp/>} />
      <Route exact path="/varnasi" element={<Vrns/>} />
      <Route exact path="/ayodhaya" element={<Ayo/>} />

    </Routes>
    </>
  );
}

export default App;
