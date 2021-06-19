import React from 'react';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './chooseScreen.css';

import { puzzleDataStore } from '../crosswordData';

import { faReply } from '@fortawesome/free-solid-svg-icons';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { blue, red, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    width: 250,
    backgroundColor: blue[300],
  },
  title: {
    fontSize: 14,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

function ChooseScreen({ setScreenState, setPuzzleId }) {
  const choosePuzzle = (event, id) => {
    setPuzzleId(id);
    setScreenState('PUZZLE_SCREEN');
  };

  const goBack = () => {
    setScreenState('START_SCREEN');
  };

  const classes = useStyles();

  return (
    <div className="div_main_choose_screen">
      <AwesomeButton size="icon" ripple type="primary" onPress={goBack}>
        <FontAwesomeIcon icon={faReply} />
      </AwesomeButton>

      <div className="div_choose_button_set">
        {puzzleDataStore.map((puzzle) => (
          <div className="div_puzzle_card">
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>{puzzle.key + 1}</Avatar>
                }
                title={puzzle.name}
              />

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={(e) => choosePuzzle(e, puzzle.key)}
                >
                  START
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseScreen;
