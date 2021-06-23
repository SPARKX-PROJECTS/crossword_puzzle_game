import React, { backHandler } from 'react';

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

import { motion } from 'framer-motion';

import './gamestartscreen.css';

function GameStartScreen(props) {
  const soundControl = (event) => {
    props.setSoundOn(!props.soundOn);
  };

  const startGame = () => {
    props.setScreenState('CHOOSE_SCREEN');
  };

  const quitGame = () => {};

  return (
    <>
      <motion.div
        className="div_main_start_screen"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
      >
        <div className="div_util_button_set">
          <AwesomeButton size="icon" type="primary">
            <FontAwesomeIcon icon={faScrewdriver} />
          </AwesomeButton>

          <AwesomeButton
            size="icon"
            ripple
            type="primary"
            onPress={soundControl}
          >
            {props.soundOn ? (
              <FontAwesomeIcon icon={faVolumeMute} />
            ) : (
              <FontAwesomeIcon icon={faVolumeUp} />
            )}
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
                  type="secondary"
                  onPress={startGame}
                  fakePress="true"
                  loadingLabel="Loading..."
                >
                  <h1>PLAY</h1>
                </AwesomeButtonProgress>
              </td>
            </tr>
            <tr>
              <td className="mainButtons">
                <AwesomeButton type="primary" onPress={quitGame}>
                  <h1>QUIT</h1>
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
      </motion.div>
    </>
  );
}

export default GameStartScreen;
