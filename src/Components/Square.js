import React from "react";

export default class Square extends React.Component {
  
    render() {
      return (
        <button 
          className="square" 
          onClick={this.props.onClick}
          style={{backgroundColor: this.props.isHighlight? "red" : "white"}}
         >
          {this.props.value}
        </button>
      );
    }
  }