import React from 'react';

function PhraseCard(props) {
  return (
    <div className="phraseCard">
      <h3>{props.currentPhrase.phrase}</h3>
      <h4>Tags:{props.currentPhrase.tags.map((tag) => ' ' + tag)}</h4>
    </div>
  );
}

export default PhraseCard;
