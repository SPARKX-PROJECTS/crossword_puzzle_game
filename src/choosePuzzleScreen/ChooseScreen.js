import React from "react";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./chooseScreen.css";

import { puzzleDataStore } from "../crosswordData";

import {
	faReply,
	faVolumeUp,
	faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
	root: {
		width: 250,
		backgroundColor: blue[300],
	},
	title: {
		fontSize: 14,
	},
	avatar: {
		backgroundColor: red[500],
	},
});

function ChooseScreen({ setScreenState, setPuzzleId, setSoundOn, soundOn }) {
	const choosePuzzle = (event, id) => {
		setPuzzleId(id);
		setScreenState("PUZZLE_SCREEN");
	};

	const goBack = () => {
		setScreenState("START_SCREEN");
	};

	const soundControl = (event) => {
		setSoundOn(!soundOn);
	};

	const classes = useStyles();

	return (
		<div className="div_main_choose_screen">
			<div className="div_util_button_set">
				<AwesomeButton size="icon" ripple type="primary" onPress={goBack}>
					<FontAwesomeIcon icon={faReply} />
				</AwesomeButton>

				<AwesomeButton size="icon" ripple type="primary" onPress={soundControl}>
					{soundOn ? (
						<FontAwesomeIcon icon={faVolumeMute} />
					) : (
						<FontAwesomeIcon icon={faVolumeUp} />
					)}
				</AwesomeButton>
			</div>

			<div>
				{puzzleDataStore.map((puzzle) => (
					<div className="div_puzzle_card">
						<Card className={classes.root}>
							<CardHeader
								avatar={
									<Avatar className={classes.avatar}>{puzzle.key + 1}</Avatar>
								}
								title={puzzle.name}
							/>

							<CardActions>
								<Button
									size="small"
									color="primary"
									onClick={(e) => choosePuzzle(e, puzzle.key)}
								>
									START
								</Button>
							</CardActions>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
}

export default ChooseScreen;
