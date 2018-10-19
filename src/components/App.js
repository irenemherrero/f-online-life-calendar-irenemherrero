import React, { Component } from 'react';
import Editor from './Editor';
import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor/>
        <Calendar/>
      </div>
    );
  }
}

export default App;
