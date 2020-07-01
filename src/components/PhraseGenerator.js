import React from 'react';
import { getRandomItemFromArray, getFilteredPhrases } from '../helpers.js';
import PhraseCard from './PhraseCard';

function PhraseGenerator(props) {
  const handleClick = () => {
    const filteredPhrases = getFilteredPhrases(props.phrases, props.filterTags);
    const newPhrase = getRandomItemFromArray(filteredPhrases);
    props.updateCurrentPhrase(newPhrase);
  };
  return (
    <div className="phraseGeneratorContainer">
      <h2>Phrase Generator</h2>
      <PhraseCard currentPhrase={props.currentPhrase} />
      <button onClick={handleClick}>Give me a phrase!</button>
    </div>
  );
}

export default PhraseGenerator;
