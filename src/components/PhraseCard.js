import React from 'react';
import { capitalize } from '../helpers.js';
function PhraseCard(props) {
  return (
    <div className="phraseCard">
      <h3>{props.currentPhrase.phrase}</h3>
      <h4>
        Tags:{props.currentPhrase.tags.map((tag) => ' ' + capitalize(tag))}
      </h4>
    </div>
  );
}

export default PhraseCard;
