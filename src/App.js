import React from 'react';
import './App.css';

import { PageHeader } from './Components/PageHeader'
import { Graph } from './Components/Graph'
import { GridTransition } from "./Components/GridTransition"
import { NavLink, Switch, Route } from 'react-router-dom';
import {Home} from "./Views/Home";
import {Project} from "./Views/Project";
import {Error404} from './Views/Error404'
import {screenHeight, screenWidth} from './Scripts/Global'


export const add = (x, y) => x + y;
export const total = (shipping, subTotal) => "$" + (add(shipping, subTotal)).toString();

//const screenWidth = getWidth() - 20


const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route path='/project' component={Project}></Route>
    <Route path='/' component={Error404}></Route>
  </Switch>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: false
    };
  }
  
  render() {


    
    return (
    <div className="mainContainer" 
    style={{
            display: "flex",
            justifyContent: "center",
            width: screenWidth,
            overflow: "hidden",
            position:"absolute",
            height: screenHeight,
      }}>
 
      <PageHeader screenWidth={screenWidth} />

      <p style={{position:"absolute", marginTop:125, color:"grey"}}>Please select a project from the chart</p>
      
      <Main />
    </div>
    );
  }
}



export default App;

/*
 



      </div>

      */