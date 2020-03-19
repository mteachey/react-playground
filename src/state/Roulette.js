import React, {Component} from 'react';

export default class Roulette extends Component{
    //chamber can be a number from 1-8
    state={
       chamber : null,
       spinningTheChamber : false
    }
    static defaultProps = {
        bulletInChamber:8
      };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleButtonClick = () =>{
        this.setState({
            spinningTheChamber : true
        })

    this.timeout = setTimeout(()=>{
       const randomChamber = Math.ceil(Math.random() * 8)
    
       this.setState({
        chamber:randomChamber,
        spinningTheChamber:false,
       })
  
        },2000)
    }

   

    renderDisplay()
    {
     const {chamber, spinningTheChamber}=this.state;
     const {bulletInChamber} = this.props;
     if(spinningTheChamber){
         return 'spinning the chamber and pulling the trigger!...'
     }
     else{
        if (chamber === bulletInChamber)
        {return 'BANG!!!!'}
        else {return 'you\'re safe!!'}
     }
    }

    render(){
        return(
            <div className="roulette">
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButtonClick}>
                    Pull the trigger!
                </button>
            <p>{this.luck}</p>
            </div>
        )
    }

}