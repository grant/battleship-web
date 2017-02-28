import React, { Component } from 'react';
import Map from './Map';
// import logo from '../images/logo.svg';
import './App.css';

class App extends Component {
  static PAGE_NAME = {
    INTRO: 'intro',
    GAME: 'game',
  };

  nameInput = '';

  constructor() {
    super();
    this.state = {
      name: '',
      page: App.PAGE_NAME.INTRO,
    };
  }

  /**
   * The app's intro modal.
   */
  getModal() {
    return (
      <div className="modal">
        <div className="header">
          <h1>Battleship</h1>
          <h3>Ship conquering game</h3>
          <input ref={(input) => {this.nameInput = input;}} type="text" name="name" placeholder="Empire Name"/>
          <button onClick={this.play.bind(this)}>Play</button>
        </div>
        <hr/>
        <div className="links">
          <ul className="list">
            <li><a href="">Controls</a></li>
            <li><a href="">Reddit</a></li>
          </ul>
          <footer>Game by <a href="https://grant.cm">Grant Timmerman</a></footer>
        </div>
      </div>
    );
  }

  play() {
    let name = this.nameInput.value;
    this.setState({
      name,
      page: App.PAGE_NAME.GAME
    });
  }

  render() {
    // <img src={logo} className="App-logo" alt="logo" />
    return (
      <div className="App">
        {this.state.page === App.PAGE_NAME.INTRO ? (
          this.getModal()
        ) : ''}
        <Map />
      </div>
    );
  }
}

export default App;
