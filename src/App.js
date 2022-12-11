import "./App.css";
import React, { useState, useEffect } from "react";

const API_URL = `https://official-joke-api.appspot.com/random_joke`;

function App() {
  const [joke, setJoke] = useState("");
  const generateJoke = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setJoke(data));
  };
  useEffect(() => {
    generateJoke();
  }, []);
  return (
    <div className="App">
      <center>
        <div class="box">
          <h1>Random joke generator using react</h1>
          <h3>{joke.setup}</h3>
          <h3>{joke.punchline}</h3>
          <button onClick={generateJoke}>Get new jokes 😂</button>
        </div>
      </center>
    </div>
  );
}

export default App;
