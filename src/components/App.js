import React from 'react';
import 'normalize.css';
import '../index.css';
import samplePhrases from '../samplePhrases';
import PhraseGenerator from './PhraseGenerator';
import NavBar from './NavBar';
import Settings from './Settings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNavOpen: true,
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
  toggleLeftNavOpen = () => {
    const toggledState = this.state.leftNavOpen ? false : true;
    this.setState({ leftNavOpen: toggledState });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          classTags={this.state.classTags}
          raceTags={this.state.raceTags}
          filterTags={this.state.filterTags}
          leftNavOpen={this.state.leftNavOpen}
          updateFilterTags={this.updateFilterTags}
          toggleLeftNavOpen={this.toggleLeftNavOpen}
        />
        <PhraseGenerator
          phrases={this.state.phrases}
          currentPhrase={this.state.currentPhrase}
          updateCurrentPhrase={this.updateCurrentPhrase}
          filterTags={this.state.filterTags}
        />
      </React.Fragment>
    );
  }
}

export default App;
