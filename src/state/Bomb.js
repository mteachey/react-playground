import React, { Component } from 'react';

export default class Bomb extends Component{

    state = {
        count: 0,
        word: 2,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
          this.setState({
            count: this.state.count + 1
          })
         
        }, 1000)
      }

      componentWillUnmount() {
        clearInterval(this.interval)
      }
  // if(state.count)
   renderDisplay(){
       const {count} = this.state;
       if (count >=8){
        clearInterval(this.interval)
        return 'BOOM!!!!'
       }
       if(count%2===0 && count < 8)
        {return 'tick'}
       else if(count%2!==0 && count < 8)
        {return 'tock'}
    } 

render(){
       return(
           <div className="bomb">
               <p>{this.renderDisplay()}</p>
              
           </div>
       )
   }
}