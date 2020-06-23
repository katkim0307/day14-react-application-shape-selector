import React, {Component} from 'react';
import Shape from './Shape';

// STATEFUL CLASS COMPONENT
class Selector extends Component {
  constructor() {
    super();
    this.state={
      selectedShape: 'Select the shape',
    }
  }

  selectShape = (shape) => {
    this.setState({
      selectedShape: shape,
    })
  };


  render() {
    return (
      // MUST HAVE ONLY ONE PARENT DIV!!!
      // Parent div with navbar & shape-list children divs
      <div className='container'>
        <div className='navbar'>
          <div>Selected: </div>
          <div>{this.state.selectedShape}</div>
        </div>
        <div className='shape-list'>
          <Shape shape="square" selectShape={this.selectShape}/>
          <Shape shape="circle" selectShape={this.selectShape}/>
          <Shape shape="triangle" selectShape={this.selectShape}/>
        </div>
      </div>
    );
  };
};

export default Selector;
