import React from 'react';
import '../App.css';
import { types } from '../Scripts/Nodes'
import { tileSize, imageSize } from '../Scripts/Global'
import { GraphLine } from '../Components/GraphLine'
import {CircleImageList} from '../Components/CircleImageList'



class GraphNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
  }

  onMouseClick = () => this.props.handleClick(this.props.node.url)

  onMouseEnter = () => this.setState({ isHover: true })

  onMouseLeave = () => this.setState({ isHover: false })

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
      background: (this.props.node.type === "C" && this.state.isHover) ? "white" : types[this.props.node.type].color,
      boxShadow: "5px 5px 5px 0 #060017, 5px 5px 5px #504080",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      transition: "1s",
      cursor: 'pointer'
    }

    const dateStyle = {
      position: "absolute",
      marginLeft: x + 5,
      marginTop: y + 22,
      color: "rgb(200,190,200,0.8)",
      fontSize: 12
    }

    const fontStyle = types[this.props.node.type].style;


    return (
      <div id={"Node_" + this.props.node.key} >

        <p style={dateStyle}>{this.props.node.date}</p>

        <div style={style} onMouseEnter={this.onMouseEnter} onClick={this.onMouseClick} onMouseLeave={this.onMouseLeave}>
          <p style={fontStyle}>
            {this.props.node.text}
          </p>
          
        </div>

        {this.props.node.images != undefined &&
          <CircleImageList images={this.props.node.images} x={this.props.node.x} y={this.props.node.y} />
        }

        {this.props.node.parenttype != undefined &&
          <GraphLine values={{ type: this.props.node.parenttype, x1: this.props.node.parentx, y1: this.props.node.parenty, x2: this.props.node.x, y2: this.props.node.y }} />
        }

      </div>
    )
  }
}

export { GraphNode }