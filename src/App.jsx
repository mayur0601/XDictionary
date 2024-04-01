import "./App.css";
import { useState } from "react";

export default function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    let res = dict.filter((item) => item.word === word);
    if (res.length > 0) {
      setMeaning(res[0].meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <main>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search for a word..."
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <p>
        <b>Definition:</b>
      </p>
      <br />
      <p>{meaning}</p>
    </main>
  );
}
