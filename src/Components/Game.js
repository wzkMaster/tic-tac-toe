import React from "react";
import Board from "./Board";
import calculateWinner from "../utils/calculateWinner";

export default class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        history:[{
          squares: Array(9).fill(null),
          position: null
        }],
        stepNumber: 0,
        xIsNext: true,
        line:[],
        desc: true
      };
    }
      
    handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if(calculateWinner(squares) || squares[i]){
        return;
      }
      squares[i] = this.state.xIsNext ? 'X': 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
          position: [Math.floor(i / 3) + 1, i % 3 + 1]
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      })
    }
    
    jumpTo(step){
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      })
    }
  
    handleDesc(){
      this.setState({
        desc: !this.state.desc,
        history: this.state.history.reverse(),
        stepNumber: this.state.history.length - this.state.stepNumber - 1
      })
    }

    handleRestart(){
      this.setState({
        history: [{
          squares: Array(9).fill(null),
          position: null
        }],
        stepNumber: 0
      })
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      let status;
      let line=[]
      if(winner){
        status = (
          <>
            <span>{"Winner: " + winner.winner}</span>
            <button onClick={() => this.handleRestart()}>Restart</button>
          </>
        )
        line = winner.line;
      }
      else if(current.squares.indexOf(null) === -1){
        status = (
          <>
            <span>Draw!  </span>
            <button onClick={() => this.handleRestart()}>Restart</button>
          </>
        )
      }
      else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
      }
      
      const moves = history.map((step, move) => {
        const desc = step.position? 
              'Go to move #' + move + ' (' + step.position.toString() + ')':
              'Go to game start';
        return (
          <li key={move}>
            <button 
              onClick={() => this.jumpTo(move)}
              style={{fontWeight: (move === this.state.stepNumber) ? "bold" : "normal"}}
            >{desc}</button>
          </li>
        )
      })
      
      return (
        <div className="game">
          <div className="game-board">
            <Board 
              highlight={line}
              squares={current.squares}
              onClick={i => this.handleClick(i)}
             />
          </div>
          <div className="game-info">
            <div>
              {status}
              <button 
                onClick={() => this.handleDesc()}
              >
                {this.state.desc ? "↓" : "↑"}
              </button>
            </div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }