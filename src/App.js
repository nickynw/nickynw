import React from 'react';
import './App.css';

import { PageHeader } from './Components/PageHeader'
import { Graph } from './Components/Graph'
import { GridTransition } from "./Components/GridTransition"


export const add = (x, y) => x + y;
export const total = (shipping, subTotal) => "$" + (add(shipping, subTotal)).toString();

const screenWidth = getWidth() - 20
const screenHeight = getHeight() - 150

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: false
    };
  }


  render() {


    return (
      <div>
          <PageHeader />
          <Graph/>
      </div>

    );
  }
}
/*
      </div>
        <div style={{position:"absolute", overflow:"inherit", width: screenWidth, height: screenHeight }}>
          <GridTransition screenWidth={screenWidth} screenHeight={screenHeight}/>
          </div>
*/

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