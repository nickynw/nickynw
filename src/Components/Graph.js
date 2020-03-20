import React from 'react';
import '../App.css';
import { graphObjects } from "../Scripts/Nodes"
import { GraphLine } from '../Components/GraphLine'
import { GraphNode } from '../Components/GraphNode'

class Graph extends React.Component {



    render() {
        var [nodes, lines] = graphObjects()
        var lineDisplay = [];
        var nodeDisplay = [];

        /*For each node in list of nodes from graphObjects script, produce a GraphNode JSX component to display.*/
        for (var key in nodes) {
            nodeDisplay.push(<GraphNode id={"Node_" + key} key={key} node={nodes[key]} />)
        }
        /*And again, for each line (x1,y1, x2,y2) draw a bezier graph curve GraphLine JSX component to display.*/
        lines.forEach((n) => lineDisplay.push(<GraphLine values={n} />));

        return (
            <div style={{}} >

                <div style={{
                    zIndex: 1,
                    width: this.props.screenWidth,
                    height: this.props.screenHeight,
                    position: "absolute",
                }}>
                    {nodeDisplay}
                </div>

                <div><svg style={{
                    zIndex: 0,
                    position: "absolute",
                    width: this.props.screenWidth,
                    height: this.props.screenHeight
                }}>
                    {lineDisplay}
                </svg></div>

            </div>

        );
    }
}


export { Graph }