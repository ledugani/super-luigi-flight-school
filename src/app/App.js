import React, {Component} from 'react';
import './App.css';
import {bg, fg, luigi0, luigi1, luigi2} from '../common/Sprite';
import {width, height} from '../common/common';
import { observer } from 'mobx-react';

const SpriteWrapper = observer(class SpriteWrapper extends Component {
  render = () => {
    const gameSprite = this.props.gameSprite;
    const rotate = 'rotate(' + gameSprite.rotation + 'rad)';
    const translate = 'translate(' + gameSprite.cx + 'px,' + gameSprite.cy + 'px)';
    const ctrans = (gameSprite.rotation == null) ? translate : translate + ' ' + rotate;

    var style = {
      transform: ctrans,
      position: 'absolute',
    }

    return (

      <div style={style}>
        {this.props.children}
      </div>
    )
  }
})

const Bg= observer(
  class Bg extends Component {
    render = () => {
      return <SpriteWrapper gameSprite={this.props.bg}> {bg} </SpriteWrapper>;
    }
  }
)

const Fg= observer(
  class Fg extends Component {
    render = () => {
      return <SpriteWrapper gameSprite={this.props.fg}> {fg} </SpriteWrapper>;
    }
  }
)

export const Luigi = observer(
  class Luigi extends Component {

    render = () => {
      let wluigi;
      switch(this.props.luigi.frame) {
        case 1:
        case 3:
          wluigi = luigi1
          break
        case 2:
          wluigi = luigi2
          break
        case 0:
        default:
          wluigi = luigi0
          break
      }

      return <SpriteWrapper gameSprite={this.props.luigi}> {wluigi} </SpriteWrapper>
    }
  }
)

const App = observer(class App extends Component {
  componentDidMount() {
    this.req = window.requestAnimationFrame(this.appUpdateFrame)
  }

  appUpdateFrame = () => {

    this.props.updateFrame();

    this.req = window.requestAnimationFrame(this.appUpdateFrame)

  }

  render() {

    const {bgs, fgs, luigi} = this.props.store

    const style = {
      width: width,
      height: height,
    }

    return (
      <div className="App" id="fakingcanvas" style={style}>
        {bgs.map( (bg) => ( <Bg bg={bg} key={bg.id} /> ) )}
        <Luigi luigi={luigi} />
        {fgs.map( (fg) => ( <Fg fg={fg} key={fg.id} /> ) )}
      </div>
    );
  }
})

export default App;
