import React, { Component } from "react";
import Mycars from "./components/Mycars";
import "./App.css";

class App extends Component {
  state = {
    titre: "My catalogue",
  }

  changeTitle =(e) => {
    this.setState({
titre: 'new title'
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />

        <button onClick={this.changeTitle}>the new title</button>
  
      </div> 
}
export default App;
