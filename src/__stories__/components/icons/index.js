import React from 'react';

const SVG = ({
  style = {},
  fill = '#000',
  width = '24',
  className = '',
  viewBox = '0 0 24 24',
  children,
}) => (
  <svg
    width={width}
    height={width}
    style={style}
    fill={fill}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {children}
  </svg>
);
