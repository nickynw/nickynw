import React from 'react';
import '../App.css';

import { PageHeader } from '../Components/PageHeader'
import { Graph } from '../Components/Graph'
import { GridTransition } from "../Components/GridTransition"
import { NavLink, Switch, Route } from 'react-router-dom';
import { screenHeight, screenWidth } from '../Scripts/Global'
import DelayLink from 'react-delay-link';

class Home extends React.Component {
    action = () => {
        this.props.history.push('/project')
    }

    render() {
        return (
            <div className="mainContainer" style={{
                marginTop: 120,
                overflow: "hidden",
                overflowX: " hidden",
                width: screenWidth,
                height: "100%",
                boxShadow: "5px 5px 10px 0 #060017, 5px 5px 5px #504080",
            }}> 
                <GridTransition history={this.props.history} screenWidth={screenWidth} screenHeight={screenHeight} />
                <Graph screenWidth={screenWidth} screenHeight={screenHeight} />
               

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