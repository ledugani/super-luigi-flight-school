import React, {Component} from 'react';
import './App.css';
import {bg} from '../common/Sprite';
import sheet from '../res/sheet.png';
import {width, height} from '../common/common';

class App extends Component {
  render() {

    const style = {
      width: width,
      height: height,
    }

    return (
      <div className="App" id="fakingcanvas" style={style}>
        {bg}
      </div>
    );
  }
}

export default App;
