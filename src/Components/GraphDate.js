import React from 'react';
import '../App.css';
import { types } from '../Scripts/Nodes'
import { tileSize } from '../Scripts/Global'



class GraphDate extends React.Component {
 
  render() {
    var x = this.props.node.x * tileSize
    var y = this.props.node.y * tileSize - types[this.props.node.type].height / 2
    const dateStyle = {
        position: "absolute",
        marginLeft: x + 5, 
        marginTop: y + 22, //half text height
        color: (this.props.hoverState) ? "rgb(255,255,240,1)" : "rgb(200,190,200,0.8)",
        fontSize: 12
    }

    return (

        <p style={dateStyle}>{this.props.node.date}</p>
 
    )
  }
}

export { GraphDate }