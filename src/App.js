import React, { Component } from 'react'
import './components/reset.css'
import './App.css'
import NavBar from './components/NavBar'
import First from './components/first'

export default class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }


  render() {
    return (
      <div>
        <NavBar />
        <First />
      </div>
    )
  }
}