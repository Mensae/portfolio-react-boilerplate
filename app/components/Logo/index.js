/**
 * Logo Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DEFAULT_FONT_STACK = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  '"Fira Sans"',
  '"Droid Sans"',
  '"Helvetica Neue"',
  'sans-serif',
];

const NameGroup = styled.g`
  display: none;
  fill: currentColor;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: 109.202px;

  @media (min-width: ${({ showNameBreakpoint }) => showNameBreakpoint}) {
    display: block;
  }
`;

function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1130 580"
      aria-hidden="true"
      focusable="false"
      height="100%"
      preserveAspectRatio="xMinYMid meet"
    >
      <defs>
        <clipPath id="a">
          <circle cx="287.5" cy="290" r="277.6" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path fill="#96F" d="M9.9 12.4H565v276.5H9.9V12.4z" />
        <path fill="#69F" d="M9.9 287.9H565v279.7H9.9V287.9z" />
      </g>
      <circle
        cx="287.5"
        cy="290"
        r="271"
        fill="none"
        stroke="#FFC40D"
        strokeMiterlimit="10"
        strokeWidth="9"
      />
      <path
        fill="#FFF"
        d="M208 116.9c-2.4 1.8-2.9 4.7-2.3 18.4.9 25.6 5.2 28.2 48.2 30.9 15.8.9 33.7 2.1 39.6 2.7l10.8.9-2.4 12c-1.8 8.6-2.1 18.5-1.4 36.4.6 13.5.6 24.6.3 24.6s-11.8 2.1-25.3 4.7c-22.6 4.2-27 4.6-54.9 3.6-33.8-1.2-34.4-.9-34.4 10 0 15.6 8.9 25.6 27.8 31.7 17.3 5.5 52.3 5 89-.9l7.3-1.2 1.4 9.3c1.7 12.3 1.7 41 .2 52.8l-1.5 9.6-24.4-.9c-31.7-1.1-79 3-105.9 9.4-18.7 4.4-25.3 6.2-29.4 8.5-2.7 1.4-5.9 2.4-7.4 2.4-1.4 0-6.5 2.1-11.4 4.7-4.7 2.6-10.8 5.8-13 7-2.4 1.4-6.4 5.3-8.9 8.9-3.5 5.3-4.4 8.6-3.9 15.9.9 18.5 11.1 33.1 28.7 41.3 8.9 4.2 11.1 4.4 30.2 3.5 18.7-.9 57.9-6.8 66.7-10.2 2-.6 8.3-2.7 14.3-4.4 5.9-1.7 13.3-4.2 16.5-5.5 3.2-1.4 6.8-2.4 8-2.4 3.6 0 41.9-20.2 50.7-26.8 4.7-3.5 10.2-9.6 12.4-13.7l4.1-7.3 19.1 5c33.7 8.9 50.2 16.8 66 31.2 6.7 6.1 11.2 11.8 11.8 15 .6 2.9 1.8 5.6 2.9 6.2.9.6 1.7 2.4 1.7 4.4 0 1.8 1.7 5.2 3.6 7 4.7 4.7 11.2 3.2 19.1-4.2 19.3-18.4 6.1-45.2-31.7-64.5-24.9-12.7-35.3-16.4-62.9-21.8l-24.9-5-1.4-17c-.6-9.3-3.2-26.8-5.8-38.8-2.6-12-4.4-22.1-4.1-22.3.3-.2 8.9-2 19.1-4.2 30.2-6.4 50.1-17.3 56.7-30.9 4.2-8.6 4.4-11.7 1.8-21.1-2.9-9.9-6.7-10-31.4-1.7-25.3 8.5-53.1 13-55.7 9.1-4.7-7.6 1.4-38.8 11.2-57.3l5.9-11.1 27.9-.2c30.6-.2 49.7-3.3 63.9-10.6 20.3-10.3 22.6-27.5 5.5-37.6l-7.3-3c-3-1.4-6.4-1.8-9.7-2l-42-.3c-27.9-.2-76.4-.6-108-1.2-44-.8-58.7-.5-61 1zm89.8 275.3c-5.6 3.9-18 10-33.8 17-3.3 1.5-7.6 3.3-9.1 4.2-1.7.8-6.1 2-9.7 2.7-3.8.6-7.7 1.7-8.6 2.4-.9.6-8.2 2.6-16.1 4.2-7.7 1.7-17.7 3.9-22 5-4.2 1.1-18.8 2-32.2 2-19.7 0-25.6-.6-30.9-3.2-4.1-2-6.5-4.2-6.2-5.9.6-3.5 24.9-15.9 35.2-18 4.4-.9 11.2-2.4 15-3.6 17.7-4.7 65.4-9.3 107.4-10.3l17-.5-6 4z"
      />
      <NameGroup {...props}>
        <text transform="translate(651.424 254.662)">
          JOHAN
        </text>
        <text transform="translate(651.424 385.704)">
          MEESTER
        </text>
      </NameGroup>
    </svg>
  );
}

Logo.propTypes = {
  fontFamily: PropTypes.arrayOf(PropTypes.string),
  showNameBreakpoint: PropTypes.string,
};

Logo.defaultProps = {
  fontFamily: DEFAULT_FONT_STACK,
  showNameBreakpoint: '320px',
};

export default Logo;