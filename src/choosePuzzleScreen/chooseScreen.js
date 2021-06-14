import React, { useCallback, useContext, useState } from "react";
// import PropTypes from "prop-types";

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./chooseScreen.css";
import  App from "../App";
import { puzzleDataStore } from "../crosswordData";

import {
  faReply,
  faVolumeDown,
  faVolumeMute,
  faVolumeOff,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";


function ChooseScreen( { setScreenState, setPuzzleId}) {

  const choosePuzzle = ( event, id) => {
    setPuzzleId( id);
    setScreenState( "PUZZLE_SCREEN");
  }

  const goBack = () => {
    setScreenState( "START_SCREEN");
    
  }
  
  return (
      
      <div className="div_main_start_screen">
        <div className="div_main_button_set">

            <AwesomeButton size="icon" ripple type="primary" onPress={ goBack}>
              <FontAwesomeIcon icon={ faReply} />
            </AwesomeButton>

            <table>
              { puzzleDataStore.map( puzzle => (

                <tr>
                  <td className="mainButtons">
                    <AwesomeButton
                      key={ puzzle.key}
                      size="large"
                      type="secondary"
                      onPress={e =>  choosePuzzle( e, puzzle.key)}
                    >
                        { puzzle.name}
                    </AwesomeButton>
                  </td>
                </tr>

              ))}

            </table>
      </div>
    </div>
                      
  );
}

export default ChooseScreen;
