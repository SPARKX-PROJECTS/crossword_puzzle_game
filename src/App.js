import React, { useCallback, useRef, useState, useEffect } from "react";
import Crossword from "./Crossword";
import styled from "styled-components";
import "./App.css";
import "./Popup/Popup.css";
import { puzzleDataStore } from "./crosswordData";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReply,
	faVolumeUp,
	faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

//modal for popup
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Timer from 'react-stopwatch';

let correctSound = new sound(
	"https://crossword-dpfiyymcf-sparkx-projects.vercel.app/audio/correct.mp3",
);
let resetSound = new sound(
	"https://crossword-dpfiyymcf-sparkx-projects.vercel.app/audio/reset.wav",
);
let focusSound = new sound(
	"https://crossword-dpfiyymcf-sparkx-projects.vercel.app/audio/focus.wav",
);
let allCorrectSounnd = new sound(
	"https://crossword-dpfiyymcf-sparkx-projects.vercel.app/audio/complete.wav",
);

const Page = styled.div`
	padding: 2em;
	padding-top: 0rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: nowrap;
	background-repeat: no-repeat;
`;

const CrosswordWrapper = styled.div`
	margin-top: 2em;
	max-width: 70em;
	/* and some fun making use of the defined class names */
	.crossword.correct {
		rect {
		}
		svg > rect {
			fill: rgb(100, 200, 100, 0.2) !important;
		}
		text {
			fill: rgb(130, 130, 130) !important;
		}import { clearGuesses } from './util';

	}
	.clue.correct {
		::before {
			content: "\u2713"; /* a.k.a. checkmark: ✓ */
			display: inline-block;
			text-decoration: none;
			color: rgb(100, 200, 100);
			margin-right: 0.25em;
		}
		text-decoration: line-through;
		color: rgb(130, 130, 130);
	}
`;

function sound(src) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function () {
		this.sound.play();
	};
	this.stop = function () {
		this.sound.pause();
	};
}

// in order to make this a more-comprehensive example, and to vet Crossword's
// features, we actually implement a fair amount...
function App({ puzzleId, setScreenState, setPuzzleId, setSoundOn, soundOn }) {
	const crossword = useRef();
	const [popupOpen, setPopupOpen] = useState(false);
	const [fillAllClicked, setFillAllClicked] = useState(false);
  const [second, setSeconds] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [hour, setHours] = useState(0);

	//this style class is for the modal
	const useStyles = makeStyles((theme) => ({
		modal: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	}));

	const soundControl = (event) => {
		setSoundOn(!soundOn);
	};

	const classes = useStyles();

	useEffect(() => {
		crossword.current.reset();
	});

	const focus = useCallback(
		(event) => {
			crossword.current.focus();
			if (!soundOn) {
				focusSound.play();
			}
		},
		[soundOn],
	);

	const fillAllAnswers = useCallback(
		(event) => {
			setFillAllClicked(true);
			crossword.current.fillAllAnswers();
			if (!soundOn) {
				allCorrectSounnd.play();
			}
		},
		[soundOn],
	);

	const reset = useCallback(
		(event) => {
			crossword.current.reset();
      setSeconds(0);
      setMinutes(0);
      setHours(0);
			if (!soundOn) {
				resetSound.play();
			}
		},
		[soundOn],
	);

	// We don't really *do* anything with callbacks from the Crossword component,
	// but we can at least show that they are happening.  You would want to do
	// something more interesting than simply collecting them as messages.
	// const [messages, setMessages] = useState([]);
	// const addMessage = useCallback((message) => {
	//   setMessages((m) => m.concat(`${message}\n`));
	// }, []);

	// onCorrect is called with the direction, number, and the correct answer.
	const onCorrect = useCallback(
		(direction, number, answer) => {
			if (!soundOn) {
				correctSound.play();
			}
		},
		[soundOn],
	);

	// onLoadedCorrect is called with an array of the already-correct answers,
	// each element itself is an array with the same values as in onCorrect: the
	// direction, number, and the correct answer.
	const onLoadedCorrect = useCallback((answers) => {}, []);

	// onCrosswordCorrect is called with a truthy/falsy value.
	const onCrosswordCorrect = useCallback(
		(isCorrect) => {
			if (isCorrect) {
				if (!fillAllClicked) {
					handleOpen();
				}
				//setIsPopUpOpen(true);
				if (!soundOn) {
					allCorrectSounnd.play();
				}
			}
		},
		[soundOn, fillAllClicked],
	);

	// onCellChange is called with the row, column, and character.
	const onCellChange = useCallback((row, col, char) => {}, []);

	const handleOpen = () => {
		setPopupOpen(true);
	};

	const handleClose = () => {
		setPopupOpen(false);
	};

	const goBack = () => {
		setScreenState("CHOOSE_SCREEN");
	};

	const replay = () => {
		handleClose();
		setScreenState("PUZZLE_SCREEN");
	};

	const loadNextPuzzle = () => {
		handleClose();
		setPuzzleId(puzzleDataStore.length - 1 > puzzleId ? puzzleId + 1 : 0);
	};

	return (
		<>
			<div class="content">
				<Page>
					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						open={popupOpen}
						onClose={handleClose}
						className={classes.modal}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Fade in={popupOpen}>
							<div className="popup_box">
								<div className="popup_box_button_panel">
									<AwesomeButton
										className="popup_box_button"
										ripple
										type="primary"
										onPress={goBack}
										size="small"
									>
										New Puzzle
									</AwesomeButton>

									<AwesomeButton
										className="popup_box_button"
										ripple
										type="primary"
										onPress={loadNextPuzzle}
										size="small"
									>
										Next puzzle
									</AwesomeButton>

									<AwesomeButton
										className="popup_box_button"
										ripple
										type="primary"
										onPress={replay}
										size="small"
									>
										Replay
									</AwesomeButton>
								</div>
							</div>
						</Fade>
					</Modal>

					<div className="div_game_category_title">
						<AwesomeButton size="icon" ripple type="primary" onPress={goBack}>
							<FontAwesomeIcon icon={faReply} />
						</AwesomeButton>

            <Timer
              seconds={second}
              minutes={minute}
              hours={hour} >
             
              {({formatted}) => (             
                <div> { formatted } </div>
              )}
            </Timer>
              
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
						{/* <h3 className="game_category_title">CATEGORY : {header}</h3> */}
					</div>

					<div className="div_game_button_panel">
						<AwesomeButton ripple type="secondary" onPress={focus}>
							Focus
						</AwesomeButton>

						<AwesomeButton ripple type="secondary" onPress={reset}>
							{/* <Sound
              url="http://localhost:3000/audio/correct.mp3"
              playStatus={Sound.status.PLAYING}
            /> */}
							Reset
						</AwesomeButton>

						<AwesomeButton ripple type="secondary" onPress={fillAllAnswers}>
							Fill Answers
						</AwesomeButton>
					</div>

					<div>
						<CrosswordWrapper>
							<Crossword
								data={puzzleDataStore[puzzleId].data}
								theme={{
									numberColor: "rgb(0,0,0)",
									cellBackground: "transparent",
									focusBackground: "transparent",
									highlightBackground: "rgb(45,125,250)",
									backgroundImage:
										"https://digitalsynopsis.com/wp-content/uploads/2017/03/beautiful-color-gradients-backgrounds-078-cochiti-lake.png",
								}}
								ref={crossword}
								onCorrect={onCorrect}
								onLoadedCorrect={onLoadedCorrect}
								onCrosswordCorrect={onCrosswordCorrect}
								onCellChange={onCellChange}
							/>
						</CrosswordWrapper>
					</div>
				</Page>
			</div>
		</>
	);
}

export default App;
