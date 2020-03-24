import React from 'react';
import '../App.css';
import { graphObjects } from "../Scripts/Nodes"
import { GraphLine } from '../Components/GraphLine'
import { GraphNode } from '../Components/GraphNode'

class Graph extends React.Component {

    render() {
        var nodes = graphObjects()
        var nodeDisplay = [];

        /*For each node in list of nodes from graphObjects script, produce a GraphNode JSX component to display.*/
        for (var key in nodes) {
            nodeDisplay.push(<GraphNode handleClick={this.props.handleClick} id={"Node_" + key} key={key} node={nodes[key]} />)
        }


        return (
    

                <div style={{
                    zIndex: 1,
                    width: this.props.screenWidth,
                    height: this.props.screenHeight,
                    position: "absolute",
                }}>
                    {nodeDisplay}
                </div>


        );
    }
}


export { Graph }