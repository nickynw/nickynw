import React from 'react';
import '../App.css';
import { graphObjects } from "../Scripts/Nodes"
import { GraphObject } from '../Components/GraphObject'
import { FadeTransition } from "../Components/FadeTransition"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pushURL: "",
            mode: 0
        }
    }

    handleClick = (input) => {
        if(Number.isInteger(input)){
            this.setState({
                mode: input
            });
        } else {
            this.setState({
                pushURL: input
            });
        }
    }

    /*this.state.pushURL is passed to graphnodes, which can change it to a new url*/
    render() {
        var nodes = graphObjects()
        var nodeDisplay = [];
        for (var key in nodes) {
            nodeDisplay.push(<GraphObject handleClick={this.handleClick} mode={this.state.mode} id={"Node_" + key} key={key} node={nodes[key]} />)
        }

        return (
            <FadeTransition
            history={this.props.history}
                pushURL={this.state.pushURL}
                content={
                    <div style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: 50, 
                    }}>
                        <p style={{ marginLeft: "auto", marginRight: "auto", color: "#a8a8a0" }}>Please select a project from the chart to view.</p>
                        {nodeDisplay}
                    </div>}
            />
        )
    }
}

export { Home }