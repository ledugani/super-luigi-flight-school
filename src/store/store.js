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

const updateLuigi = function(luigi) {
  luigi.frame += store.frames % 10 === 0 ? 1 : 0;
  luigi.frame %= luigi.animation.length; //at every 10th, frame change luigi frame

  luigi.velocity += luigi.gravity;
  luigi.cy += luigi.velocity;

  if (luigi.cy >= height - fg_h-10) {
    luigi.cy = height - fg_h-10;

    luigi.velocity = luigi._jump;
  }

  if (luigi.velocity >= luigi._jump) {

    luigi.frame = 1;
    luigi.rotation = Math.min(Math.PI/2, luigi.rotation + 0.3);

  } else {

    luigi.rotation = -0.3;

  }
}

export const updateFrame = action(function() {
  store.frames++;
  store.fgpos = (store.fgpos -2) % 14;
  fg1.cx = store.fgpos;
  fg2.cx = store.fgpos + fg_w;

  updateLuigi(store.luigi);
});