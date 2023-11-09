import React from "react";
import Cat from "./components/Cat.jsx";
import "./App.css";
import "./Facts.css";

function App() {
  return (
    <div className="App">
      <Cat />
      <div className="Facts">
        <secondPage />
      </div>
    </div>
  );
}

export default App;

// ("https://cat-fact.herokuapp.com/facts");
