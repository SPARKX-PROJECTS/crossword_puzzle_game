import React, { useCallback, useContext, useState } from 'react';
// import PropTypes from "prop-types";

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './chooseScreen.css';
import App from '../App';
import { puzzleDataStore } from '../crosswordData';

import {
  faReply,
  faVolumeDown,
  faVolumeMute,
  faVolumeOff,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

function ChooseScreen({ setScreenState, setPuzzleId }) {
  const choosePuzzle = (event, id) => {
    setPuzzleId(id);
    setScreenState('PUZZLE_SCREEN');
  };

  const goBack = () => {
    setScreenState('START_SCREEN');
  };

  return (
    <div className="div_main_choose_screen">
      <AwesomeButton size="icon" ripple type="primary" onPress={goBack}>
        <FontAwesomeIcon icon={faReply} />
      </AwesomeButton>

      <div className="div_choose_button_set">
        {puzzleDataStore.map((puzzle) => (
          <div className="div_puzzle_card">
            <AwesomeButton
              key={puzzle.key}
              size="small"
              type="secondary"
              onPress={(e) => choosePuzzle(e, puzzle.key)}
            >
              {puzzle.key + 1}
            </AwesomeButton>

            <h6 className="puzzle_name">{puzzle.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseScreen;
