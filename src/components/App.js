import React from 'react';
import samplePhrases from '../samplePhrases';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';
import Header from './Header';

const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

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
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
  }
}

export default App;
