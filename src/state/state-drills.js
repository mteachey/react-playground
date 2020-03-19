import React, {Component} from 'react';
import './state-drills.css';

export default class Accordian extends Component{
    static defaultProps = { sections: [] };

    state = {
        currentSectionIndex: null
    };

    handleButtonClick(index){
       this.setState({ currentSectionIndex: index })
    }

    renderListElements(){
        return this.props.sections.map((section, index)=>(
            <li key={index}>
                <button onClick={()=>this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {(index===this.state.currentSectionIndex) && this.renderContent()}
            </li>
        ))
    }

    renderContent(){
        const currentSection = this.props.sections[this.state.currentSectionIndex];
        return(
            <p>
                {currentSection.content}
            </p>
        )
    }

    render(){
        return(
            <div className="accordian">
                <ul>
                {this.renderListElements()}
               
                </ul>
            </div>
        )
    }

}