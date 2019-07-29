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