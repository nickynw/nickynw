import React, { View } from 'react';
import './App.css';
import { createNodes } from './Scripts/CreateNodes'
import { createGraph } from './Scripts/CreateGraph'
import { NodeCircle } from './Components/NodeCircle'
import { Line } from './Components/Line'

export const add = (x, y) => x + y;
export const total = (shipping, subTotal) => "$" + (add(shipping, subTotal)).toString();

function App() {
  return (
    <div>

  <div><Graph /></div>
    </div>
  );
}

class SoftwareList extends React.Component {
  render() {
    return (
    <div className="Fixed" style={{marginLeft: 20}}>
      Python <br/>
      Javascript <br/>
      C# <br/>
      Java <br/>
      HTML/CSS <br/>
      CYPHER<br/>
      SQL<br/>
      <br/>
      Django  <br/>
      Flask  <br/>
      React  <br/>
      React Native  <br/>
      Neo4J  <br/>
      Unity3D  <br/>
      Blender 
      </div>
    )
  }
}

class Graph extends React.Component {
  componentDidMount(){
    window.scrollBy(500,1000)
  }

  render() {

    var circles = [];
    var lines = [];
    var [nodes, edges] = createNodes();
    [nodes, edges] = createGraph(getWidth(), getHeight(), nodes, edges)
    for (var i = 0; i < nodes.length; i++) {
      circles.push(<NodeCircle node={nodes[i]} />)
    }
    for (var i = 0; i < edges.length; i++) {
      lines.push(<Line edge={edges[i]} />)
    }

    return (
      <div ref={this.myRef} style={{
        height: getHeight(),
        width: getWidth()
      }}>
        <svg height={getHeight()} width={getWidth()} style={{overflow: "hidden"}}>
          {lines}
        </svg>
        {circles}
      </div>
    )
  }
}

/*
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
  }

  componentDidMount() {
    window.scrollTo(700 - document.documentElement.clientWidth/2, 700-document.documentElement.clientHeight/2);
    console.log(getHeight())
  }
*/

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )-20
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  )+200;
}

export default App;
