import React from 'react';
import { getRandomItemFromArray } from '../helpers.js';
import PhraseCard from './PhraseCard';

function PhraseGenerator(props) {
  const handleClick = () => {
    const newPhrase = getRandomItemFromArray(props.phrases);
    props.updateCurrentPhrase(newPhrase);
  };
  return (
    <div className="phraseGeneratorContainer">
      <h1>Phrase Generator</h1>
      <PhraseCard currentPhrase={props.currentPhrase} />
      <button onClick={handleClick}>Give me a phrase!</button>
    </div>
  );
}

export default PhraseGenerator;
