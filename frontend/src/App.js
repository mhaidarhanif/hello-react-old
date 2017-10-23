import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import Header from "./Header"
import Paragraph from "./Paragraph"

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Impact Byte"
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header name={this.state.name} />
        <Paragraph />
      </div>
    )
  }
}

export default App
