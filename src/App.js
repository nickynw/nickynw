import React from 'react';
import './App.css';

import { PageHeader } from './Components/PageHeader'
import { Graph } from './Components/Graph'
import { GridTransition } from "./Components/GridTransition"

export const add = (x, y) => x + y;
export const total = (shipping, subTotal) => "$" + (add(shipping, subTotal)).toString();

//const screenWidth = getWidth() - 20
const screenHeight = getHeight()
const screenWidth = getWidth();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: false
    };
  }

  render() {
    console.log(screenWidth, screenHeight)

    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        width: screenWidth,
        overflow: "hidden",
        position:"absolute",
        height: screenHeight,
        marginLeft: "50"
      }}>

      <PageHeader screenWidth={screenWidth} />

          <div className="mainContainer" style={{
            marginTop: 120,
            overflow: "hidden",
            overflowX:" hidden",
            width: screenWidth,
            height: "100%",
            boxShadow: "5px 5px 10px 0 #060017, 5px 5px 5px #504080",
          }}>
          
         <GridTransition screenWidth={screenWidth} screenHeight={screenHeight} />
          <Graph screenWidth={screenWidth} screenHeight={screenHeight} />
        </div>

      </div>

    );
  }
}

function getWidth() {
  let width = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )
  if (width < 1000) {
    return 1000
  }
  if (width > 1500) {
    return 1500
  }
  return width
}

function getHeight() {
  let height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
  if (height < 800) {
    return 800
  }
  if (height > 1000) {
    return 1000
  }
  return height
}


export default App;