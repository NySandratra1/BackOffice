import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import All from "./components/All";
import Statistique from "./components/Statistique";

const App = () => {
  const [chosenCars, setChosenCars] = useState([]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
           <Route
            path="/all"
            element={<All/>}
          />
          <Route
            path="/statistique"
            element={<Statistique/>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
