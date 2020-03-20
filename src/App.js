import React from 'react';
import './App.css';
import {GraphLine} from './Components/GraphLine' 
import { GraphNode } from './Components/GraphNode'
import { PageHeader } from './Components/PageHeader'
import { graphObjects } from "./Scripts/Nodes"

export const add = (x, y) => x + y;
export const total = (shipping, subTotal) => "$" + (add(shipping, subTotal)).toString();

const screenWidth = getWidth() - 20
const screenHeight = getHeight() - 150

function App() {

  var [nodes, edges, lines] = graphObjects()
  var lineDisplay = [];
  var nodeDisplay = [];

  /*For each node in list of nodes from graphObjects script, produce a GraphNode JSX component to display.*/
  for (var key in nodes) {
    nodeDisplay.push(<GraphNode node={nodes[key]} />)
  }
  /*And again, for each line (x1,y1, x2,y2) draw a bezier graph curve GraphLine JSX component to display.*/
  lines.forEach((a) => lineDisplay.push(<GraphLine values={a} />));
  return (

    <div style={{}} >

      <PageHeader />

      <div style={{ position: "absolute", marginLeft: 120, width: screenWidth - 120, height: screenHeight }} >
        {nodeDisplay}
        <svg style={{ zIndex: -1, position: "absolute", width: screenWidth - 120, height: screenHeight }}>
          {lineDisplay}
        </svg>
      </div>

    </div>
  );
}

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}


  export default App;