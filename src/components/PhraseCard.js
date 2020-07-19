import React from 'react';

import { Card, CardContent, Typography, Chip } from '@material-ui/core';

function PhraseCard(props) {
  const renderTags = () => {
    return Object.values(props.phrase.tags).map((tagGroup) =>
      tagGroup.map((tag) => (
        <Chip size="small" label={tag} style={{ margin: '2px' }} />
      ))
    );
  };
  return (
    <Card key={props.phrase.id}>
      <CardContent>
        <Typography
          variant="h3"
          align="center"
          style={{
            paddingBottom: '10px',
            fontWeight: 'bold',
            fontFamily: 'cambria',
          }}
        >
          {props.phrase.phrase}
        </Typography>
        {props.displayTags ? renderTags() : null}
      </CardContent>
    </Card>
  );
}
export default PhraseCard;
