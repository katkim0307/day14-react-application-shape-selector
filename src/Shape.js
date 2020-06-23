import React from 'react';

// FUNCTIONAL COMPONENT 
const Shape = (props) => {
    // DECONSTRUCTING THE OBJECT KEY
    // same as: const value = props.shape;
    // If there are more keys, {shape, selectShape, etc.} = props;
    // const {shape} = props;
    // console.log('this is props: ', props);
    // console.log('shape: ', shape);

    return (
      // <div className={shape}/>
      <div className={props.shape} onClick={()=>props.selectShape(props.shape)}/>
    )
  }
  
export default Shape;