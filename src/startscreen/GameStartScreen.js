import React, { useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faVolumeUp,
  faVolumeMute,
  faScrewdriver,
  faGamepad,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

import App from '../App';

import './gamestartscreen.css';

function GameStartScreen({ setScreenState }) {
  const [soundOn, setSoundOn] = useState(true);

  const soundControl = (event) => {
    setSoundOn(!soundOn);
  };

  const startGame = (event) => {
    setScreenState('CHOOSE_SCREEN');
  };

  const quitGame = () => {};

  return (
    <>
      <div className="div_main_start_screen">
        <div className="div_util_button_set">
          <AwesomeButton
            size="icon"
            ripple
            type="primary"
            onPress={soundControl}
          >
            {soundOn ? (
              <FontAwesomeIcon icon={faVolumeMute} />
            ) : (
              <FontAwesomeIcon icon={faVolumeUp} />
            )}
          </AwesomeButton>

          <AwesomeButton size="icon" type="primary">
            <FontAwesomeIcon icon={faScrewdriver} />
          </AwesomeButton>
        </div>

        <div className="div_main_button_set">
          <table>
            <tr>
              <td align="center">
                <img
                  className="crosswordLogo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKLM389KHNOwgyQk9ttreG_7Fidhbbc_IQA&usqp=CAU"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td className="mainButtons">
                <AwesomeButtonProgress
                  size="large"
                  type="secondary"
                  onPress={startGame}
                  fakePress="true"
                  loadingLabel="Loading..."
                >
                  <FontAwesomeIcon icon={faGamepad} />
                  PLAY
                </AwesomeButtonProgress>
              </td>
            </tr>
            <tr>
              <td>
                <AwesomeButton size="large" type="primary" onPress={quitGame}>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  QUIT
                </AwesomeButton>
              </td>
            </tr>
          </table>
        </div>

        <div className="div_secondary_button_set">
          <table>
            <tr>
              <td>
                <img
                  className="sparkLogo"
                  src="https://avatars.githubusercontent.com/u/85065925?s=200&v=4"
                  alt=""
                />
              </td>
              <td className="tag_line">Spark Academy Sri Lanka</td>
              <td>
                <AwesomeButtonSocial
                  className="socialMediaIcons"
                  size="small"
                  type="facebook"
                />
              </td>
              <td>
                <AwesomeButtonSocial
                  className="socialMediaIcons"
                  size="small"
                  type="instagram"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default GameStartScreen;
