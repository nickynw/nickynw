import React from 'react';
import '../App.css';
import { graphObjects } from "../Scripts/Nodes"
import { GraphLine } from '../Components/GraphLine'
import { GraphNode } from '../Components/GraphNode'

class Graph extends React.Component {

  
  
    render() {
      var [nodes, edges, lines] = graphObjects()
      var lineDisplay = [];
      var nodeDisplay = [];
  
      /*For each node in list of nodes from graphObjects script, produce a GraphNode JSX component to display.*/
      for (var key in nodes) {
        nodeDisplay.push(<GraphNode key={key.toString()} node={nodes[key]} />)
      }
      /*And again, for each line (x1,y1, x2,y2) draw a bezier graph curve GraphLine JSX component to display.*/
      lines.forEach((n) => lineDisplay.push(<GraphLine values={n} />));
  
      return (
          <div style={{
            marginLeft: "50%",
            overflow:"hidden"
          }} >
  
            <div style={{ 
              marginLeft: -500,
              width: 1000,
              height: 500,
              position: "absolute",
              }} id="HELLO">
              {nodeDisplay}
            </div>
  
            <div><svg style={{
              marginLeft:-500,
              zIndex: -1,
              position: "absolute",
              width: 1000,
              height: 500
            }}>
              {lineDisplay}
            </svg></div>
  
          </div>
  
      );
    }
  }


  export {Graph}