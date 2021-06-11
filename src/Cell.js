import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { CrosswordSizeContext } from './context';

// expected props: row, col, answer, crossword, cellSize

/**
 * An individual-letter answer cell within the crossword grid.
 *
 * A `Cell` lives inside the SVG for a [`Crossword`](#crossword), and renders at
 * a location determined by the `row`, `col`, and `cellSize` properties from
 * `cellData` and `renderContext`.
 */
export default function Cell({ cellData, onClick, focus, highlight }) {
  const { cellSize, cellPadding, cellInner, cellHalf, fontSize } = useContext(
    CrosswordSizeContext
  );
  const {
    // gridBackground,
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
    [cellData, onClick]
  );

  const { row, col, guess, number } = cellData;

  const x = col * cellSize;
  const y = row * cellSize;

  return (
    <g
      onClick={handleClick}
      style={{ cursor: 'default', fontSize: `${fontSize}px` }}
    >

      {/*defintion for the image id*/ }

      <defs>
        <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
            <image height="1" width="1" preserveAspectRatio="none" xlinkHref="data:image/jpeg;base64,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" />
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
        style= {
          {
          fill:"url(#pattern1)",
          opacity:0.7
          }
        }
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
          style={{ fontSize: '50%', fill: numberColor }}
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

