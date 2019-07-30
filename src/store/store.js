import {bg, fg, luigi} from './asset';
import {height} from '../common/common';
import { bg_h, bg_w, fg_h, fg_w } from '../common/Sprite';
import { action } from 'mobx';

const bg1 = new bg(guid(), 0, height - bg_h);
const bg2 = new bg(guid(), bg_w, height - bg_h);

const fg1 = new fg(guid(), 0, height - fg_h);
const fg2 = new fg(guid(), fg_w, height - fg_h);

export const store = {
  luigi: new luigi(guid(), 60, 0),
  fgpos: 0,
  frames: 1,
  bgs: [ bg1, bg2 ],
  fgs: [ fg1, fg2 ],
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export const updateFrame = action(function() {
  store.frames++;
  store.fgpos = (store.fgpos -2) % 14;
  fg1.cx = store.fgpos;
  fg2.cx = store.fgpos + fg_w;
});