import React from 'react';
import samplePhrases from '../samplePhrases';
import { Button } from 'semantic-ui-react';

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
    return (
      <div>
        <Button color="secondary" size="huge">
          Click ME!
        </Button>
      </div>
    );
  }
}

export default App;
