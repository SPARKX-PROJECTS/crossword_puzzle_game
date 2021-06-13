import React, { useCallback, useRef, useState } from "react";
import Crossword from "./Crossword";
import styled from "styled-components";

import "./App.css";

import { data_array, header_array } from "./crosswordData";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faVolumeDown, faVolumeMute, faVolumeOff, faVolumeUp} from '@fortawesome/free-solid-svg-icons'
import GameStartScreen from "./startscreen/GameStartScreen";

let correctSound;

let number = Math.floor(Math.random() * data_array.length);
const data = data_array[number];
const header = header_array[number];

const Page = styled.div`
	padding: 2em;
	padding-top: 0rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: nowrap;
	background-repeat: no-repeat;
`;

// const Header = styled.h1`
// 	text-align: center;
// 	margin-bottom: 1em;
// 	text-transform: uppercase;
// 	font-family: ;
// 	font-size: 1rem;
// `;

// const Commands = styled.div`
// 	text-align: center;
// `;

// const Command = styled.button`
// 	cursor: pointer;
// 	opacity: 0.75;
// 	font-size: 1rem;
// 	border-radius: 3px;
// 	color: #03c2fc;
// 	border: 2px solid #03c2fc;
// 	margin: 1em;
// 	padding: 0.25em 1em;
// 	transition: 0.5s all ease-out;

// 	&:hover {
// 		background-color: palevioletred;
// 		color: white;
// 	}
// `;

const CrosswordWrapper = styled.div`
	margin-top: 2em;
	max-width: 70em;
	/* and some fun making use of the defined class names */
	.crossword.correct {
		rect {
			stroke: rgb(100, 200, 100) !important;
		}
		svg > rect {
			fill: rgb(100, 200, 100) !important;
		}
		text {
			fill: rgb(100, 200, 100) !important;
		}
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

const Messages = styled.pre`
	background-color: rgb(230, 230, 230);
	margin: 1em 0;
	padding: 1em;
`;

// in order to make this a more-comprehensive example, and to vet Crossword's
// features, we actually implement a fair amount...
function App( {setGameStart}) {
	const crossword = useRef();

	const focus = useCallback((event) => {
		crossword.current.focus();
	}, []);

	const fillAllAnswers = useCallback((event) => {
		crossword.current.fillAllAnswers();
	}, []);

	const reset = useCallback((event) => {
		crossword.current.reset();
	}, []);

	// We don't really *do* anything with callbacks from the Crossword component,
	// but we can at least show that they are happening.  You would want to do
	// something more interesting than simply collecting them as messages.
	const [messages, setMessages] = useState([]);

	const addMessage = useCallback((message) => {
		setMessages((m) => m.concat(`${message}\n`));
	}, []);



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

	// onCorrect is called with the direction, number, and the correct answer.
	const onCorrect = useCallback(
		(direction, number, answer) => {
			addMessage(`onCorrect: "${direction}", "${number}", "${answer}"`);

			correctSound = new sound(
				"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
			);
			correctSound.play();
			setTimeout(function () {
				correctSound.stop();
			}, 700);
		},
		[addMessage],
	);

	// onLoadedCorrect is called with an array of the already-correct answers,
	// each element itself is an array with the same values as in onCorrect: the
	// direction, number, and the correct answer.
	const onLoadedCorrect = useCallback(
		(answers) => {
			addMessage(
				`onLoadedCorrect:\n${answers
					.map(
						([direction, number, answer]) =>
							`    - "${direction}", "${number}", "${answer}"`,
					)
					.join("\n")}`,
			);
		},
		[addMessage],
	);

	// onCrosswordCorrect is called with a truthy/falsy value.
	const onCrosswordCorrect = useCallback(
		(isCorrect) => {
			addMessage(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
		},
		[addMessage],
	);

	// onCellChange is called with the row, column, and character.
	const onCellChange = useCallback(
		(row, col, char) => {
			addMessage(`onCellChange: "${row}", "${col}", "${char}"`);
		},
		[addMessage],
	);

	const goBack = ()=> {
		setGameStart( false);
	}


	return (
		<div class="content">
			<Page>
				<div className="div_game_category_title">

						<AwesomeButton
							size="icon"
							ripple 
							type="primary"
							onPress={ goBack}
						>
							<FontAwesomeIcon icon={faReply}/>
						</AwesomeButton>

					<h3 className="game_category_title">
						CATEGORY : {header}
					</h3>

				</div>


				<div className="div_game_button_panel">

						<AwesomeButton
							ripple 
							type="secondary"
							onPress={focus}
						>
								Focus
						</AwesomeButton>

						<AwesomeButton
							ripple 
							type="secondary"
							onPress={reset}	
						>
							
								Reset
						</AwesomeButton>

						<AwesomeButton
							ripple 
							type="secondary"
							onPress={fillAllAnswers}	
						>
								Fill Answers
						</AwesomeButton>

				</div>

				<div>
					<CrosswordWrapper>
						<Crossword
							data={data}
							theme={{
								cellBackground: "transparent",
								focusBackground: "transparent",
								highlightBackground: "transparent",
								backgroundImage:
									"https://digitalsynopsis.com/wp-content/uploads/2017/03/beautiful-color-gradients-backgrounds-078-cochiti-lake.png",
							}}
							ref={crossword}
							onCorrect={onCorrect}
							onLoadedCorrect={onLoadedCorrect}
							onCrosswordCorrect={onCrosswordCorrect}
							onCellChange={onCellChange}
						/>
						{/* <Clue /> */}
					</CrosswordWrapper>
				</div>

				{/* 
        <Messages>{messages}</Messages> */}
			</Page>
		</div>
	);
}

export default App;
