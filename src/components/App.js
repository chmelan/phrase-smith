import React from 'react';
import samplePhrases from '../samplePhrases';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: samplePhrases,
      currentPhrase: samplePhrases[0],
      classTags: [
        'Barbarian',
        'Bard',
        'Cleric',
        'Druid',
        'Fighter',
        'Monk',
        'Paladin',
        'Ranger',
        'Rogue',
        'Sorcerer',
        'Warlock',
        'Wizard',
      ],
      raceTags: ['Human', 'Elf', 'Dwarf', 'Halfling'],
      contextTags: ['Insult', 'Compliment', 'Shout', 'Comment'],
    };
  }

  render() {
    return <div></div>;
  }
}

export default App;
