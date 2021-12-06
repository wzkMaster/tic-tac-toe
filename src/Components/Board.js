import React from "react";
import Square from "./Square";

export default class Board extends React.Component {

    renderSquare(i) {
      return <Square 
               value={this.props.squares[i]}
               onClick={() => this.props.onClick(i)}
               isHighlight={this.props.highlight.indexOf(i) !== -1}
              />;
    }
  
    render() {
      return (
        <div>
          {[0, 1, 2].map((value) => {
            return (
              <div className="board-row">
                {Array(3).fill(0).map((_, index) => {
                  return this.renderSquare(3*value + index)
                })}
              </div>
            )
          })}
          
        </div>
      );
    }
  }