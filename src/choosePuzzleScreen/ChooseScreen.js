import React from 'react';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './chooseScreen.css';

import { puzzleDataStore } from '../crosswordData';

import {
  faReply,
  faVolumeUp,
  faVolumeMute,
  faAlignCenter,
} from '@fortawesome/free-solid-svg-icons';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { blue, red } from '@material-ui/core/colors';
import { CenterFocusStrong } from '@material-ui/icons';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  root: {
    width: 250,
    backgroundColor: blue[200],
    textAlign: 'center',
    cursor: 'pointer',
  },
  title: {
    fontSize: 14,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const boxVariants = {
  out: {
    y: 0,
  },

  in: {
    y: 0,

    transition: {
      duration: 0.2,

      // The first child will appear AFTER the parrent has appeared on the screen

      delayChildren: 0.4,

      // The next sibling will appear 0.5s after the previous one

      staggerChildren: 0.3,
    },
  },
};

const iconVariants = {
  out: {
    x: -800,
  },

  in: {
    x: 0,
  },
};

function ChooseScreen({ setScreenState, setPuzzleId, setSoundOn, soundOn }) {
  const choosePuzzle = (event, id) => {
    setPuzzleId(id);
    setScreenState('PUZZLE_SCREEN');
  };

  const goBack = () => {
    setScreenState('START_SCREEN');
  };

  const soundControl = (event) => {
    setSoundOn(!soundOn);
  };

  const classes = useStyles();

  return (
    <motion.div
      className="div_main_choose_screen"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <div className="div_util_button_set">
        <AwesomeButton size="icon" ripple type="primary" onPress={goBack}>
          <FontAwesomeIcon icon={faReply} />
        </AwesomeButton>

        <AwesomeButton size="icon" ripple type="primary" onPress={soundControl}>
          {soundOn ? (
            <FontAwesomeIcon icon={faVolumeMute} />
          ) : (
            <FontAwesomeIcon icon={faVolumeUp} />
          )}
        </AwesomeButton>
      </div>

      <motion.div variants={boxVariants} initial="out" animate="in">
        {puzzleDataStore.map((puzzle) => (
          <motion.div className="div_puzzle_card" variants={iconVariants}>
            <Card
              className={classes.root}
              onClick={(e) => choosePuzzle(e, puzzle.key)}
            >
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>{puzzle.key + 1}</Avatar>
                }
                title={puzzle.name}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ChooseScreen;
