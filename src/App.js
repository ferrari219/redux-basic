import React, { Component } from 'react';

import './App.css';
import CounterContainer from 'containers/CounterContainer';
import PaletteContainer from 'containers/PaletteContainer';
import WaitingListContainer from 'containers/WaitingListContainer';

class App extends Component {
  render() {
    // console.log('test');
    // alert('test');
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;
