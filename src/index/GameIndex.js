
import React, { useState } from "react";
import ChooseScreen from "../choosePuzzleScreen/ChooseScreen";
import GameStartScreen from "../startscreen/GameStartScreen";
import App from "../App";

function GameIndex( ){
  const [screenState, setScreenState] = useState( "START_SCREEN");
  const [ puzzleId, setPuzzleId] = useState( 0);

  if ( screenState === "START_SCREEN") {
    //setScreenState( "CHOOSE_SCREEN");
    return <GameStartScreen setScreenState={ setScreenState}/>

  }else if( screenState === "CHOOSE_SCREEN") {
    //setScreenState( "START_SCREEN");
    return <ChooseScreen setScreenState={ setScreenState} setPuzzleId={ setPuzzleId}/>
    
  }else if( screenState === "PUZZLE_SCREEN"){
    //setScreenState( "CHOOSE_SCREEN");
    return <App setScreenState={ setScreenState} puzzleId = {puzzleId}/> 
  }

}

export default GameIndex;
