
import './HelloWorld.css'
import React, { Component } from 'react'

export default class HelloWorld extends Component {
   
    /*mine
    constructor(props) {
        console.log('props in HW constructor', props)
        super(props)
        this.state = {who:'me' }
    }*/
    /*sol*/
    state = {
      who: 'world',
    };
/*mine
    handleButtonClickWorld = () => {
        this.setState({ who: 'world' })
      }
    handleButtonClickFriend = () => {
      this.setState({ who: 'friend' })
      }
    handleButtonClickReact = () => {
      this.setState({ who: 'react' })
    } 

    render() {
        return (
        <div className="hello-world">
         <p>Hello {this.state.who}</p>
         <div className="button-container">
            <button onClick={this.handleButtonClickWorld}>
             World 
            </button>
            <button onClick={this.handleButtonClickFriend}>
              Friend 
            </button>
            <button onClick={this.handleButtonClickReact}>
             React 
            </button>
         </div>
        </div>
    )*/

  /*sol*/
  render() {
    return (
      <div className='HelloWorld'>
        <p>Hello, {this.state.who}!</p>
        <div className="button-container">
          <button
            onClick={() => this.setState({ who: 'world' })}
          >
            World
          </button>
          <br/>
          <button
            onClick={() => this.setState({ who: 'friend' })}
          >
            Friend
          </button>
          <br />
          <button
            onClick={() => this.setState({ who: 'React' })}
          >
            React
          </button>
        </div>
      </div>
    )

  }
}

