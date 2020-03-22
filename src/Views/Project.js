import React from 'react';
import '../App.css';

import { PageHeader } from '../Components/PageHeader'
import { Graph } from '../Components/Graph'
import { GridTransition } from "../Components/GridTransition"
import { NavLink, Switch, Route } from 'react-router-dom';
import { screenHeight, screenWidth } from '../Scripts/Global'


class Project extends React.Component{
  render(){
    return(
    <div className="mainContainer" style={{
        marginTop: 120,
        overflow: "hidden",
        overflowX: " hidden",
        width: screenWidth,
        height: "100%",
        boxShadow: "5px 5px 10px 0 #060017, 5px 5px 5px #504080",
    }}> 
        <GridTransition history={this.props.history} screenWidth={screenWidth} screenHeight={screenHeight} />

       

    </div>)
}
}

export {Project}