//Adapted from react-spritesheet
import React from 'react';
import sheet from '../res/sheet.png'

export const Sprite = ({ filename, x, y, width, height }) => {
  if (!filename) {
    return null;
  }

  x *= 2
  y *= 2
  width *= 2
  height *= 2

  const style = {
    backgroundImage: `url(${filename})`,
    backgroundPosition: `${x * (-1)}px ${y * (-1)}px`,
    width,
    height,
  };

  //added new x,y,w,h so that the store can use this compute value
  return <div style={style} data-x={x} data-y={y} data-w={width} data-h={height} />;
};

export const bg = Sprite({
  filename: sheet,
  x: 0,
  width: 138,
  height: 114
})