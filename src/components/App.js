import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    // <img src={logo} className="App-logo" alt="logo" />
    return (
      <div className="App">
        <div className="modal">
          <h1>Battleship</h1>
          <h3>Ship conquering game</h3>
          <input type="text" name="name" placeholder="Empire Name"/>
          <button>Play</button>
          <hr/>
          <ul>
            <li><a href="">Controls</a></li>
            <li><a href="">Reddit</a></li>
          </ul>
          <footer>Game by <a href="https://grant.cm">Grant Timmerman</a></footer>
        </div>
        <div className="map"></div>
      </div>
    );
  }
}

export default App;
