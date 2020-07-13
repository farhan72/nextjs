import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../src/Link';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
        Zyada Corp. Frontend Challenge
        </Typography>
        <p> Please refer to <a href="https://github.com/redhajuanda/fe-challenge/blob/master/README.md">README.md</a> for the detail of the challenge </p>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
      </Box>
    </Container>
  );
}
