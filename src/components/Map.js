import React, { Component } from 'react';
import './Map.css';

const W = 50;
const H = 50;

class Map extends Component {
  render() {
    let grid = [];
    for (let y = 0; y < H; ++y) {
      grid[y] = [];
      for (let x = 0; x < W; ++x) {
        grid[y][x] = '';
      }
    }
    return (
      <div className="Map">
        {grid.map((row, rowI) => {
          let ff = 3;
          let divRow = row.map((col, colI)=> {
              return <span className={rowI + ',' + colI}>hi</span>;
            });
          return <div className="row">
            {divRow}
          </div>;
        })}
      </div>
    );
  }
}

export default Map;
