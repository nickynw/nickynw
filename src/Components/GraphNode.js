import React from 'react';
import '../App.css';
import { types } from '../Scripts/Nodes'
import { tileSize, imageSize } from '../Scripts/Global'

class GraphNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
  }

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
      padding: 5,
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

    var imageDisplay = [];
    var images = this.props.node.images;
    var imagesOffset = 220;
    if (images !== undefined) {
      images.forEach((url, index) => {
        const imageStyle = {
          width: imageSize,
          height: imageSize,
          display: "flex",
          position: "absolute",
          marginLeft: x + imagesOffset + (imageSize + 10) * index,
          marginTop: y + 12,
          borderRadius: 50,
        }
        let imageurl = "/images/" + url + ".png"
        let imageNode = <img style={imageStyle} src={imageurl} ></img>
        imageDisplay.push(imageNode)
      })
    }

    return (
      <div id={"Node_" + this.props.node.key} >
        <p style={dateStyle}>{this.props.node.date}</p>
        <div style={style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <p style={fontStyle}>
            {this.props.node.text}
          </p>
        </div> {imageDisplay}
      </div>
    )
  }
}

export { GraphNode }