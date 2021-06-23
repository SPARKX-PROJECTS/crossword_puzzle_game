import React, { useState } from 'react';
import ChooseScreen from '../choosePuzzleScreen/ChooseScreen';
import GameStartScreen from '../startscreen/GameStartScreen';
import App from '../App';

import { motion, AnimatePresence } from 'framer-motion';

function GameIndex() {
  const [screenState, setScreenState] = useState('START_SCREEN');
  const [puzzleId, setPuzzleId] = useState(0);
  const [soundOn, setSoundOn] = useState(true);

  if (screenState === 'START_SCREEN') {
    //setScreenState( "CHOOSE_SCREEN");
    return (
      <AnimatePresence exitBeforeEnter>
        <GameStartScreen
          setScreenState={setScreenState}
          setSoundOn={setSoundOn}
          soundOn={soundOn}
        />
      </AnimatePresence>
    );
  } else if (screenState === 'CHOOSE_SCREEN') {
    //setScreenState( "START_SCREEN");
    return (
      <AnimatePresence>
        <ChooseScreen
          setScreenState={setScreenState}
          setPuzzleId={setPuzzleId}
          setSoundOn={setSoundOn}
          soundOn={soundOn}
        />
      </AnimatePresence>
    );
  } else if (screenState === 'PUZZLE_SCREEN') {
    //setScreenState( "CHOOSE_SCREEN");
    return (
      <AnimatePresence>
        <App
          setScreenState={setScreenState}
          puzzleId={puzzleId}
          setPuzzleId={setPuzzleId}
          setSoundOn={setSoundOn}
          soundOn={soundOn}
        />
      </AnimatePresence>
    );
  }
}

export default GameIndex;
