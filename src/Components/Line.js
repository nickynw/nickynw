import React, { View } from 'react';

function Line(props) {
    const style = {
      stroke: "#bdc3de",
      strokeWidth: 2,
      position: "absolute"
    }
    return (
      <line
        x1={props.edge.parentx} y1={props.edge.parenty}
        x2={props.edge.childx} y2={props.edge.childy}
        style={style} />
    )
  }

  
  export {Line}