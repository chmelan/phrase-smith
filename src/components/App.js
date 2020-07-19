import React from 'react';
import samplePhrases from '../samplePhrases';
import { Grid } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { amber, blueGrey } from '@material-ui/core/colors';
import Header from './Header';
import FilterPanel from './FilterPanel';
import PhraseGenerator from './PhraseGenerator';
import PhraseListPanel from './PhraseListPanel';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: blueGrey,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: samplePhrases,
      filteredPhrases: samplePhrases,
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
  updateCurrentPhrase = (newPhrase) => {
    this.setState({ currentPhrase: newPhrase });
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Grid container>
          <Grid item md>
            <FilterPanel />
          </Grid>
          <Grid item md>
            <PhraseGenerator
              currentPhrase={this.state.currentPhrase}
              filteredPhrases={this.state.filteredPhrases}
              updateCurrentPhrase={this.updateCurrentPhrase}
            />
          </Grid>
          <Grid item md>
            <PhraseListPanel />
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default App;
