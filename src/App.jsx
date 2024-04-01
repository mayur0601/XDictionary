import React, { useState } from "react";

const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];
const App = () => {
  const [inputText, setInputText] = useState("");
  const [definition, setDefinition] = useState("");
  const findDefinition = () => {
    const foundWord = data.find(
      (ele) => ele.word.toLowerCase() === inputText.toLowerCase()
    );
    console.log(foundWord);
    foundWord
      ? setDefinition(foundWord.meaning)
      : setDefinition("Word not found in the dictionary.");
  };
  return (
    <>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        name=""
        id=""
      />
      <button onClick={findDefinition}>Search</button>
      <h3>Definition:</h3>
      {definition ? <p>{definition}</p> : null}
    </>
  );
};

export default App;