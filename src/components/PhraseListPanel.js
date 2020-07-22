import React, { Fragment, useState } from 'react';

import {
  Button,
  Container,
  Typography,
  Divider,
  ButtonGroup,
  Paper,
  List,
  ListItemText,
  ListItem,
} from '@material-ui/core';

function PhraseListPanel(props) {
  const [listMode, setListMode] = useState('context');
  const getPhrasesByTag = (tagCategory, phrases) => {
    return phrases.reduce((phrases, phrase) => {
      const phraseTags = phrase.tags[tagCategory];
      const smallPhrase = {
        id: phrase.id,
        phrase: phrase.phrase,
      };

      phraseTags.map((tag) => {
        phrases[tag]
          ? phrases[tag].push(smallPhrase)
          : (phrases[tag] = [smallPhrase]);
      });
      return phrases;
    }, {});
  };

  const renderPhrases = (tagCategory) => {
    const sortedPhrases = Object.entries(
      getPhrasesByTag(tagCategory, props.filteredPhrases)
    );
    return sortedPhrases.map((tag) => (
      <Fragment>
        <Typography variant="h4" component="h3" align="center">
          {tag[0]}
        </Typography>
        <Divider />
        <List>
          {tag[1].map((phrase, index) => (
            <ListItem divider={true}>
              <ListItemText key={phrase.id} primary={phrase.phrase} />
            </ListItem>
          ))}
        </List>
      </Fragment>
    ));
  };
  return (
    <Container>
      <ButtonGroup>
        {['context', 'class', 'race', 'character'].map((item) => (
          <Button
            value={item}
            label={item}
            color={listMode === item ? 'primary' : 'default'}
            onClick={() => setListMode(item)}
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
      <List>{renderPhrases(listMode)}</List>
    </Container>
  );
}

export default PhraseListPanel;
