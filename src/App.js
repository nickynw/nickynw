import React, { View } from 'react';
import './App.css';
import { createNodes } from './Scripts/CreateNodes'
import { createGraph } from './Scripts/CreateGraph'
import { NodeCircle } from './Components/NodeCircle'
import { Line } from './Components/Line'
import { graphObjects } from "./Nodes"

export const add = (x, y) => x + y;
export const total = (shipping, subTotal) => "$" + (add(shipping, subTotal)).toString();

const screenWidth = document.documentElement.clientWidth - 20
const screenHeight = document.documentElement.clientHeight - 150


function App() {

  var [nodes, edges, lines] = graphObjects()
  var lineDisplay = [];
  var nodeDisplay = [];
  for (var key in nodes) {
    nodeDisplay.push(<Node node={nodes[key]} />)
  }
  lines.forEach((a) => lineDisplay.push(<Curve values={a} />));
  return (
    <div style={{}} >

      <div style={{
        width: "100%", height: 120,
        justifyContent: "center", alignItems: "center", display: "flex",
        backgroundColor: "rgb(5,5,5,0.4)"
      }} >
        <p style={{ color: "white" }}>nickynw.github.io</p>
      </div>


      <div style={{ position: "absolute", marginLeft: 120, width: screenWidth - 120, height: screenHeight }} >
        {nodeDisplay}
        <svg style={{ zIndex: -1, position: "absolute", width: "100%", height: "100%" }}>
          {lineDisplay}
        </svg>
      </div>
    </div>
  );
}


const types = {
  "A": {
    width: 120,
    height: 120,
    color: "#17084f",
    style: {
      display: "block",
      color: "white",
      fontSize: 20,
      fontFamily: "Lucida Console"
    }
  },
  "B": {
    width: 90,
    height: 90,
    color: "#604f9e",
    style: {
      display: "block",
      color: "#bfbfb0",
      fontSize: 14,
    }
  },
  "C": {
    width: 120,
    height: 60,
    color: "#ccc5b1",
    style: {
      display: "block",
      color: "#1e0a40",
      fontSize: 13,
      
    }
  }
}


class Node extends React.Component {
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
    if (images!=undefined) {
      images.forEach((url, index) => {
        const imageStyle = {
          width:50, 
          height: 50,
          display: "flex",
          position: "absolute",
          marginLeft: x + 150 + 60 * index,
          marginTop: y + 10,
          borderRadius: 50,
        }
        let imageurl = "/images/" + url + ".png"
        let imageNode = <img style={imageStyle} src={imageurl} ></img>
        imageDisplay.push(imageNode)
      })
    }

    return (
      <div>
      <div style={style}>
        <p style={fontStyle}>
          {this.props.node.text}
        </p>  
      </div> {imageDisplay}
      </div>
    )
  }
}

const conv = (n) => n * 40

class Curve extends React.Component {
  render() {
    let x1 = this.props.values.x1 + (types[this.props.values.type].width+10)/40
    let x2 = this.props.values.x2
    let y1 = this.props.values.y1
    let y2 = this.props.values.y2
    let xa = (x1) + (x2-x1)/2 * 0.8
    let ya = (this.props.values.y1) 
    let xb = (x2) - (x2 - x1) * 0.4
    let yb = (this.props.values.y2) - (y2 - y1) * 0.5

    return (
      <svg>
        <path  style={{ }} d={`M  ${conv(x1)},${conv(y1)}  Q ${conv(xa)},${conv(ya)} ${conv(xb)},${conv(yb)} T ${conv(x2)} ${conv(y2)}`}
          fill="none" stroke="white" strokeWidth="1" />
      </svg>

    )
  }
}

/*
 <circle style={{}}cx={`${conv(x1)+2}`} cy={`${conv(y1)}`}  r="8" stroke="white" stroke-width="2" fill="#b4a3d1" />
  <circle cx={`${conv(x1)}`} cy={`${conv(y1)}`}  r="4" stroke="black" stroke-width="1" fill="green" />
         <circle cx={`${conv(xa)}`} cy={`${conv(ya)}`}  r="4" stroke="black" stroke-width="1" fill="red" />
         <circle cx={`${conv(xb)}`} cy={`${conv(yb)}`}  r="4" stroke="black" stroke-width="1" fill="blue" />
         */


export default App;

//background-image: linear-gradient(#301e78,#060014);

/*

class oldNode extends React.Component {
  render() {
    var x = this.props.node.x * 40 - 20
    var y = this.props.node.y * 40 - 20
    console.log(x, y)
    return (
      <g transform={`translate(${x},${y})`}>
        <rect width="40" height="40"
          style={{position: "absolute",  fill: "white", stroke: "pink", strokeWidth: 2, fillOpacity: 1, strokeOpacity: 0.9 }} />
      </g>
    )
  }
}
*/