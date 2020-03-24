import React from 'react';
import '../App.css';

import { PageHeader } from '../Components/PageHeader'
import { Graph } from '../Components/Graph'
import { GridTransition } from "../Components/GridTransition"
import { NavLink, Switch, Route } from 'react-router-dom';
import { screenHeight, screenWidth } from '../Scripts/Global'
import DelayLink from 'react-delay-link';
import { graphObjects } from "../Scripts/Nodes"
import { GraphLine } from '../Components/GraphLine'
import { GraphNode } from '../Components/GraphNode'

class Home extends React.Component {
    constructor(props){
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
            nodeDisplay.push(<GraphNode handleClick={this.handleClick} id={"Node_" + key} key={key} node={nodes[key]} />)
        }

        return (
            <div style={{
                marginTop: 120,
                overflow: "hidden",
                width: screenWidth,
                height: "100%",
                boxShadow: "5px 5px 10px 0 #060017, 5px 5px 5px #504080",
            }}> 

            <GridTransition pushURL={this.state.pushURL} history={this.props.history} />
            
            <div style={{
                    zIndex: 1,
                    width: screenWidth,
                    height: screenHeight,
                    position: "absolute",
                }}>
                    {nodeDisplay}
            </div>
       
               
            </div>)
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