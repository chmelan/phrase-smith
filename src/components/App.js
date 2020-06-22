import React, { useState } from 'react';
import '../index.css';
import samplePhrases from '../samplePhrases';
import PhraseGenerator from './PhraseGenerator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: samplePhrases,
      currentPhrase: samplePhrases[0],
    };
  }
  updateCurrentPhrase = (newPhrase) => {
    this.setState({ currentPhrase: newPhrase });
  };
  render() {
    return (
      <div>
        <PhraseGenerator
          phrases={this.state.phrases}
          currentPhrase={this.state.currentPhrase}
          updateCurrentPhrase={this.updateCurrentPhrase}
        />
      </div>
    );
  }
}

export default App;
