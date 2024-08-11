import React, { Component } from 'react'
import '../App.css'
export default class Counter extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }
  increment = () => {
    this.setState({
      count : this.state.count + 1
    })
  }
  decrement = () => {
    this.setState({
      count : this.state.count - 1
    })
  }
  reset = () => {
    this.setState({
      count : 0
    })
  }
  render() {


    return (
      <div className='count-box'>
        <h1>Count : {this.state.count}</h1>
        <div className="main-box">

        <button onClick={this.increment} disabled={this.state.count === 10 ? true : false}>Increment</button>
        <button onClick={this.decrement} disabled={this.state.count === 0 ? true : false}>Decrement</button>
        <button onClick={this.reset} >Reset</button>

        </div>
        
      </div>
    )
  }
}
