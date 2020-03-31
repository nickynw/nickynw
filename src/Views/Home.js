import React from 'react';
import '../App.css';
import { GridTransition } from "../Components/GridTransition"
import { screenHeight, screenWidth } from '../Scripts/Global'
import { graphObjects } from "../Scripts/Nodes"
import { GraphObject } from '../Components/GraphObject'
import { FadeTransition } from "../Components/FadeTransition"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pushURL: ""
        }
    }

    handleClick = (url) => {
        this.setState({
            pushURL: url
        });
    }

    /*this.state.pushURL is passed to graphnodes, which can change it to a new url, 
    gridtransition looks for a change in this.state.pushURL and triggers a transition to move there*/
    render() {
        var nodes = graphObjects()
        var nodeDisplay = [];
        for (var key in nodes) {
            nodeDisplay.push(<GraphObject handleClick={this.handleClick} id={"Node_" + key} key={key} node={nodes[key]} />)
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
                        <p style={{ marginLeft: "auto", marginRight: "auto", color: "grey" }}>Please select a project from the chart to view.</p>
                        {nodeDisplay}
                    </div>}
            />
        )
    }
}



export { Home }


/*
 <DelayLink delay={2000} to="/project" clickAction={this.action} replace={false}>HELLO IM A LINK</DelayLink>

class Home extends React.Component (

    <div className="mainContainer" style={{
        marginTop: 120,
        overflow: "hidden",
        overflowX:" hidden",
        width: screenWidth,
        height: "100%",
        boxShadow: "5px 5px 10px 0 #060017, 5px 5px 5px #504080",
      }}>

      <DelayLink delay={2000} to="/" clickAction={action} replace={false}>
    <p>Hello, I'm a clickable link.</p>
 </DelayLink>
    </div>
  );


export {Home}*/