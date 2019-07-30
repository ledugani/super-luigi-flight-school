//Adapted from react-spritesheet
import React from 'react';
import sheet from '../res/sheet.png';
import luigi from '../res/luigi.png';

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
  y: 0,
  width: 138,
  height: 114
})

export const fg = Sprite({
  filename: sheet,
  x: 138,
  y: 0,
  width: 111,
  height: 56
})
//luigi0
//   x: 294,
//   y: 80,
//   width: 12,
//   height: 20

export const luigi0 = Sprite({
  filename: luigi,
  x: 294,
  y: 80,
  width: 12,
  height: 20
})

export const luigi1 = Sprite({
  filename: luigi,
  x: 307,
  y: 80,
  width: 12,
  height: 20
})

export const luigi2 = Sprite({
  filename: luigi,
  x: 320,
  y: 80,
  width: 12,
  height: 20
})

export const pipeN = Sprite({
  filename: sheet,
  x: 251,
  y: 0,
  width: 26,
  height: 200
})

export const pipeS = Sprite({
  filename: sheet,
  x: 277,
  y: 0,
  width: 26,
  height: 200
})

export const gameover = Sprite({
  filename: sheet,
  x: 59,
  y: 136,
  width: 94,
  height: 19
})

export const _ok_ = Sprite({
  filename: sheet,
  x: 119,
  y: 191,
  width: 40,
  height: 14
})

export const splash = Sprite({
  filename: sheet,
  x: 0,
  y: 114,
  width: 58.5,
  height: 50
})

export const ready = Sprite({
  filename: sheet,
  x: 59,
  y: 155,
  width: 87,
  height: 22
})

export const bg_h = bg.props['data-h'];
export const bg_w = bg.props['data-w'];
export const fg_h = fg.props['data-h'];
export const fg_w = fg.props['data-w'];
export const pipe_h = pipeN.props['data-h'];
export const pipe_w = pipeN.props['data-h'];
export const luigi_h = luigi0.props['data-h'];
export const luigi_w = luigi0.props['data-w'];