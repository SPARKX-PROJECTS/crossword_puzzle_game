import React, { useCallback, useRef, useState } from "react";
import Crossword from "./Crossword";
import styled from "styled-components";
import Clue from "./components/Clue/Clue";


import "./App.css";

let correctSound;

const data = {
	across: {
		1: {
			clue: "one plus one",
			answer: "TWO",
			row: 0,
			col: 0,
		},
	},

	down: {
		2: {
			clue: "three minus two",
			answer: "ONE",
			row: 0,
			col: 2,
		},
		1: {
			clue: "five plus five",
			answer: "TEN",
			row: 0,
			col: 0,
		},
	},
};

const Page = styled.div`
	padding: 2em;
	padding-top: 0rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: nowrap;
	background-repeat: no-repeat;
`;

const Header = styled.h1`
	text-align: center;
	margin-bottom: 1em;
	text-transform: uppercase;
	font-family: ;
	text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.5);
`;

const Commands = styled.div`
	text-align: center;
`;

const Command = styled.button`
	margin-right: 1em;
`;

const CrosswordWrapper = styled.div`
	margin-top: 2em;
	max-width: 30em;
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

function App() {
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

	return (
		<div class="content">
			<Page>
				<Header>SparkX Crossword</Header>

				<Commands>
					<Command onClick={focus}>Focus</Command>
					<Command onClick={fillAllAnswers}>Fill all answers</Command>
					<Command onClick={reset}>Reset</Command>
				</Commands>

				<CrosswordWrapper>
					<Crossword
						data={data}
						theme={
							{
							cellBackground:"transparent",
							focusBackground:"transparent",
    					highlightBackground:"transparent",
							backgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8IxqFD6Sw7Qsl3KcI0HkJdgb5j_qz1UYAg&usqp=CAU"
							}
						}
						ref={crossword}
						onCorrect={onCorrect}
						onLoadedCorrect={onLoadedCorrect}
						onCrosswordCorrect={onCrosswordCorrect}
						onCellChange={onCellChange}
					/>
					<Clue />
				</CrosswordWrapper>

				{/* 
        <Messages>{messages}</Messages> */}
			</Page>
		</div>
	);
}

export default App;
