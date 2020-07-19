import React from 'react';

import { Button, Typography, Paper, Container } from '@material-ui/core';
import PhraseCard from './PhraseCard';
import { getRandomItemFromArray } from '../helpers';

function PhraseGenerator(props) {
  const generatePhrase = () => {
    const newPhrase = getRandomItemFromArray(props.filteredPhrases);
    props.updateCurrentPhrase(newPhrase);
  };
  return (
    <Container style={{ marginTop: '10px' }} disableGutters={true}>
      <PhraseCard phrase={props.currentPhrase} displayTags={true} />
      <Button
        size="large"
        fullWidth="true"
        color="secondary"
        variant="contained"
        onClick={generatePhrase}
      >
        GENERATE PHRASE
      </Button>
    </Container>
  );
}

export default PhraseGenerator;
