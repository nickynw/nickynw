import React from 'react';
import '../App.css';
import {types} from '../Scripts/Nodes'

class GraphNode extends React.Component {
    render() {
      var x = this.props.node.x * 40
      var y = this.props.node.y * 40 - types[this.props.node.type].height / 2
  
      const style = {
        position: "absolute",
        marginLeft: x,
        marginTop: y,
        width: types[this.props.node.type].width,
        height: types[this.props.node.type].height,
        borderRadius: 12,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "white",
        background: types[this.props.node.type].color,
        boxShadow: "5px 5px 5px 0 #060017, 5px 5px 5px #504080",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        padding: 5,
      }
  
      const fontStyle = types[this.props.node.type].style;
  
      var imageDisplay = [];
      var images = this.props.node.images;
      if (images !== undefined) {
        images.forEach((url, index) => {
          const imageStyle = {
            width: 50,
            height: 50,
            display: "flex",
            position: "absolute",
            marginLeft: x + 150 + 60 * index,
            marginTop: y,
            borderRadius: 50,
          }
          let imageurl = "/images/" + url + ".png"
          let imageNode = <img style={imageStyle} src={imageurl} ></img>
          imageDisplay.push(imageNode)
        })
      }
  
      return (
        <div id={"Node_"+this.props.node.key}>
          <div style={style}>
            <p style={fontStyle}>
              {this.props.node.text}
            </p>
          </div> {imageDisplay}
        </div>
      )
    }
  }

  export {GraphNode}