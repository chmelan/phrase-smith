import React from 'react';
import getRandomItemFromArray from '../helpers.js';

function PhraseGenerator(props) {
  const handleClick = () => {
    const newPhrase = getRandomItemFromArray(props.phrases).phrase;
    props.updateCurrentPhrase(newPhrase);
  };
  return (
    <div className="phraseGeneratorContainer">
      <h1>Phrase Generator</h1>
      <h2>{props.currentPhrase}</h2>
      <button onClick={handleClick}>Give me a phrase!</button>
    </div>
  );
}

export default PhraseGenerator;
