import React from 'react';
import './Tooltip.css';

//function component
/*function Tooltip(props) {
    return (
      <span className='Tooltip'>
        <span
            className='Tooltip-content'
            style={{ color: props.color }}
        >
            {props.children}
        </span>
        <div className='Tooltip-message'>
          {props.message}
        </div>
      </span>
    )
  }*/

//Class component (add 'this.' to props statements ^)
class TooltipClass extends React.Component {
    static defaultProps = {
        color: '#01A800', // green
      };

    render() {
      
      return (
        <span className='Tooltip'>
          <span
            className='Tooltip-content'
            style={{ color: this.props.color }}
          >
            {this.props.children}
          </span>
          <div className='Tooltip-message'>
            {this.props.message}
          </div>
        </span>
      )
    }
  }
export default TooltipClass;
//export default Tooltip;