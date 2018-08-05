import React, { Component } from 'react';
import '../css/App.css';
import SlaveApp from './SlaveApp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          React App
        </p>
         <SlaveApp/>
      </div>
    );
  }
}

export default App;
