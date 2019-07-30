import { extendObservable } from 'mobx';

export class baseObj {
  constructor(id, cx, cy){
    extendObservable(this, {
      cx: 0,
      cy: 0,
    })

    this.id = id;
    this.cx = cx;
    this.cy = cy;
  }
}

export class bg extends baseObj{}

export class fg extends baseObj{}

export class luigi extends baseObj{
  constructor(id, cx, cy) {
    super(id, cx, cy)
    extendObservable(this, {
      frame : 0,
      velocity : 0,
      relation : 0,
    })
  }

  animation = [0, 1, 2, 1];
  radius = 12;
  gravity = 0.25;
  _jump = 4.6;
}