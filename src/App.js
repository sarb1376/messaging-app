import React, { Component } from 'react'
import './App.css'
import Chat from './Chat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="box">
        <Chat />
        </div>
      </div>
    )
  }
}

export default App