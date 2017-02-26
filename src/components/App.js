import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

class App extends Component {
  nameInput = '';

  /**
   * The app's intro modal.
   */
  getModal() {
    return (
      <div className="modal">
        <h1>Battleship</h1>
        <h3>Ship conquering game</h3>
        <input ref={(input) => {this.nameInput = input;}} type="text" name="name" placeholder="Empire Name"/>
        <button onClick={this.play.bind(this)}>Play</button>
        <hr/>
        <ul>
          <li><a href="">Controls</a></li>
          <li><a href="">Reddit</a></li>
        </ul>
        <footer>Game by <a href="https://grant.cm">Grant Timmerman</a></footer>
      </div>
    );
  }

  play() {
    console.log(this.nameInput.value);
    console.log(this.refs.name);
  }

  render() {
    // <img src={logo} className="App-logo" alt="logo" />
    return (
      <div className="App">
        {this.getModal()}
        <div className="map"></div>
      </div>
    );
  }
}

export default App;
