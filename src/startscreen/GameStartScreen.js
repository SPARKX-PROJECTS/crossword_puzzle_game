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
                <h1> CROSS WORD NAME AND LOGO ART WORK</h1>
              </td>
            </tr>

            <tr>
              <td className="mainButtons" align="center">
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
          </table>
        </div>

        <div className="div_secondary_button_set">
          <table>
            <tr>
              <td>
                <a href="https://spark.lk" rel="noreferrer" target="_blank">
                  <img
                    className="sparkLogo"
                    src="https://avatars.githubusercontent.com/u/85065925?s=200&v=4"
                    alt=""
                  />
                </a>
              </td>
              <td className="tag_line">Spark Academy Sri Lanka</td>
              <td>
                <AwesomeButtonSocial
                  className="socialMediaIcons"
                  size="small"
                  type="facebook"
                  href="https://www.facebook.com/myspark.lk/"
                  target="_blank"
                />
              </td>
              <td>
                <AwesomeButtonSocial
                  className="socialMediaIcons"
                  size="small"
                  type="instagram"
                  href="https://instagram.com/myspark.lk?utm_medium=copy_link"
                  target="_blank"
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
