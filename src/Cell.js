import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";

import { CrosswordSizeContext } from "./context";

// expected props: row, col, answer, crossword, cellSize

/**
 * An individual-letter answer cell within the crossword grid.
 *
 * A `Cell` lives inside the SVG for a [`Crossword`](#crossword), and renders at
 * a location determined by the `row`, `col`, and `cellSize` properties from
 * `cellData` and `renderContext`.
 */
export default function Cell({ cellData, onClick, focus, highlight }) {
	const { cellSize, cellPadding, cellInner, cellHalf, fontSize } =
		useContext(CrosswordSizeContext);

	const {
		//gridBackground,
		cellBackground,
		cellBorder,
		textColor,
		numberColor,
		focusBackground,
		highlightBackground,
		backgroundImage,
	} = useContext(ThemeContext);

	const handleClick = useCallback(
		(event) => {
			event.preventDefault();
			if (onClick) {
				onClick(cellData);
			}
		},
		[cellData, onClick],
	);

	const { row, col, guess, number } = cellData;

	const x = col * cellSize;
	const y = row * cellSize;

	return (
		<g
			onClick={handleClick}
			style={{ cursor: "default", fontSize: `${fontSize}px` }}
		>
			{/*defintion for the image id*/}

			<defs>
				<pattern
					id="pattern1"
					height="100%"
					width="100%"
					patternContentUnits="objectBoundingBox"
				>
					<image
						height="1"
						width="1"
						preserveAspectRatio="none"
						xlinkHref={backgroundImage}
					/>
				</pattern>
			</defs>

			<rect
				x={x + cellPadding}
				y={y + cellPadding}
				width={cellInner}
				height={cellInner}
				fill={
					focus
						? focusBackground
						: highlight
						? highlightBackground
						: cellBackground
				}
				stroke={cellBorder}
				style={{
					fill: "url(#pattern1)",
					opacity: 0.7,
				}}
				strokeWidth={cellSize / 50}
			>
				{/* <image xlinkHref="http://lorempixel.com/150/150/sports/"
                        x="0" y="0"  height="16px" width="16px"/> */}
			</rect>

			{number && (
				<text
					x={x + cellPadding * 4}
					y={y + cellPadding * 4}
					textAnchor="start"
					dominantBaseline="hanging"
					style={{ fontSize: "50%", fill: numberColor }}
				>
					{number}
				</text>
			)}
			<text
				x={x + cellHalf}
				y={y + cellHalf + 1} // +1 for visual alignment?
				textAnchor="middle"
				dominantBaseline="middle"
				style={{ fill: textColor }}
			>
				{guess}
			</text>
		</g>
	);
}

Cell.propTypes = {
	/** the data specific to this cell */
	cellData: PropTypes.shape({
		row: PropTypes.number.isRequired,
		col: PropTypes.number.isRequired,
		guess: PropTypes.string.isRequired,
		number: PropTypes.string,
	}).isRequired,

	/** whether this cell has focus */
	focus: PropTypes.bool,

	/** whether this cell is highlighted */
	highlight: PropTypes.bool,

	/** handler called when the cell is clicked */
	onClick: PropTypes.func,
};

Cell.defaultProps = {
	focus: false,
	highlight: false,
	onClick: null,
};
