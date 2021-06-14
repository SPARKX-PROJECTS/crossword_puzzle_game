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

import { header_array } from "../crosswordData";

let chooseNumber = 0;

function ChooseScreen() {
  return (
    <div className="div_main_start_screen">
      <div className="div_main_button_set">
        <table>
          <tr>
            <td className="mainButtons">
              <AwesomeButtonProgress
                size="large"
                type="secondary"
                fakePress="true"
                loadingLabel="Loading..."
              >
                <FontAwesomeIcon />
                {header_array[0]}
              </AwesomeButtonProgress>
            </td>
          </tr>
          <tr>
            <td className="mainButtons">
              <AwesomeButtonProgress
                size="large"
                type="secondary"
                fakePress="true"
                loadingLabel="Loading..."
              >
                <FontAwesomeIcon />
                {header_array[1]}
              </AwesomeButtonProgress>
            </td>
          </tr>
          <tr>
            <td className="mainButtons">
              <AwesomeButtonProgress
                size="large"
                type="secondary"
                fakePress="true"
                loadingLabel="Loading..."
              >
                <FontAwesomeIcon/>
                {header_array[2]}
              </AwesomeButtonProgress>
            </td>
          </tr>
          <tr>
            <td className="mainButtons">
              <AwesomeButtonProgress
                size="large"
                type="secondary"
                fakePress="true"
                loadingLabel="Loading..."
              >
                <FontAwesomeIcon/>
                {header_array[3]}
              </AwesomeButtonProgress>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ChooseScreen;
