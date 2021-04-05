import React, { Component } from "react";
import Cars from "./Cars";

class Mycars extends Component {
  noCopy = () => {
    alert("me takhtafch");
  };
  addstyle = (e) => {
    if (e.target.classList.contains("styled")) {
      e.target.classList.remove("styled");
    } else {
      e.target.classList.add("styled");
    }
  };

  render() {
    return (
      <div>
        <h1 onMouseOver={this.addstyle}>{this.props.title}</h1>
        <p onCopy={this.nocopy}>hawel aamel copier</p>
        <Cars color=" red">Ford </Cars>
        <Cars color=" black">Mercedes </Cars>
        <Cars color=" green">Audi </Cars>
      </div>
    );
  }
}
export default Mycars;
