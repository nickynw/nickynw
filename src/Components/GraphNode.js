import React from 'react';
import '../App.css';
import { types } from '../Scripts/Nodes'
import { tileSize, imageSize } from '../Scripts/Global'



class GraphNode extends React.Component {


  onMouseClick = () => this.props.handleClick(this.props.node.url)

  onMouseEnter = () => this.props.setHoverState(true)

  onMouseLeave = () => this.props.setHoverState(false)

  render() {
    var x = this.props.node.x * tileSize
    var y = this.props.node.y * tileSize - types[this.props.node.type].height / 2

    const style = {
      position: "absolute",
      marginLeft: (this.props.node.type == "C") ? x + 70 : x,
      marginTop: y,
      width: types[this.props.node.type].width,
      height: types[this.props.node.type].height,
      borderRadius: 12,
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "white",
      padding: 5,
      background: (this.props.node.type === "C" && this.props.hoverState) ? "white" : types[this.props.node.type].color,
      boxShadow: "5px 5px 5px 0 #060017, 5px 5px 5px #504080",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      transition: "1s",
      cursor: 'pointer'
    }

    const fontStyle = types[this.props.node.type].style;

    return (
        <div style={style} onMouseEnter={this.onMouseEnter} onClick={this.onMouseClick} onMouseLeave={this.onMouseLeave}>
          <p style={fontStyle}>
            {this.props.node.text}
          </p>
          </div>
    )
  }
}

export { GraphNode }