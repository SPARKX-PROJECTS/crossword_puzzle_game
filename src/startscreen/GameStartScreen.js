import React, { useCallback, useContext,useState } from "react";
import PropTypes from "prop-types";

import {AwesomeButton,AwesomeButtonProgress,AwesomeButtonSocial,} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faVolumeUp, faVolumeMute, faScrewdriver, faGamepad, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'


import App from "../App";
import "./gamestartscreen.css"

function GameStartScreen(){
  const [soundOn, setSoundOn] = useState( true);
  const [gameStart, setGameStart] = useState( false);


  const soundControl =  (event) => {
		if( soundOn){
			setSoundOn( false);
		}else{
			setSoundOn( true);
		}
	}

  const startGame = (event) => {
    
    if( gameStart){
      setGameStart( false);
    }else{
      setGameStart( true);
    }
  }

  const quitGame = () => {

  }


  return(
    <>
    { gameStart 
      ?<App setGameStart={startGame} />

      :<div className="div_main_start_screen">
        <div className="div_util_button_set">

          <AwesomeButton
                size="icon"
                ripple 
                type="primary"
                onPress={soundControl}
              >
                {soundOn
                  ?<FontAwesomeIcon icon={faVolumeMute}/> 
                  :<FontAwesomeIcon icon={faVolumeUp} />
                }
                
          </AwesomeButton>

          <AwesomeButton
              size="icon"
              type="primary"
            >
              <FontAwesomeIcon icon={faScrewdriver}/>
          </AwesomeButton>

        </div>

        <div className="div_main_button_set">
          
          <AwesomeButtonProgress
            size="large"
            type="secondary"
            onPress={startGame}
            fakePress="true"
            loadingLabel="Loading..."
          >
            <FontAwesomeIcon icon={faGamepad}/>
            PLAY
          </AwesomeButtonProgress>

          <AwesomeButton
            size="large"
            type="primary"
            onPress={quitGame}
          >
            <FontAwesomeIcon icon={faExclamationCircle}/>
            QUIT
          </AwesomeButton>

        </div>

        <div className="div_secondary_button_set">

            <AwesomeButtonSocial
              size="small"
              type="facebook"
            />

            <AwesomeButtonSocial
              size="small"
              type="instagram"
            />
            
        </div>

        <div className="tag_line">
          project by SPARK X foundation
        </div>
          
      </div>
    };
  </>          
  )
}

export default GameStartScreen;
