import {bg} from './asset';

const bg1 = new bg(guid(), 0, height - bg_h)
const bg2 = new bg(guid(), bg_w, height - bg_h)

export const store = {
  bgs: [ bg1, bg2 ],
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .subString(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}