import React from 'react';
import '../index.css';
import samplePhrases from '../samplePhrases';
import PhraseGenerator from './PhraseGenerator';
import Settings from './Settings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: samplePhrases,
      currentPhrase: samplePhrases[0],
      filterTags: ['wizard', 'fighter'],
      classTags: [
        'barbarian',
        'bard',
        'cleric',
        'druid',
        'fighter',
        'monk',
        'paladin',
        'ranger',
        'rogue',
        'sorcerer',
        'warlock',
        'wizard',
      ],
      raceTags: ['human', 'elf', 'dwarf', 'halfling'],
    };
  }
  updateCurrentPhrase = (newPhrase) => {
    this.setState({ currentPhrase: newPhrase });
  };
  updateFilterTags = (updatedFilterTags) => {
    this.setState({ filterTags: updatedFilterTags });
  };
  render() {
    return (
      <div>
        <PhraseGenerator
          phrases={this.state.phrases}
          currentPhrase={this.state.currentPhrase}
          updateCurrentPhrase={this.updateCurrentPhrase}
          filterTags={this.state.filterTags}
        />
        <Settings
          classTags={this.state.classTags}
          raceTags={this.state.raceTags}
          filterTags={this.state.filterTags}
          updateFilterTags={this.updateFilterTags}
        />
      </div>
    );
  }
}

export default App;
