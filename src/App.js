import React, { View } from 'react';
import logo from './logo.svg';
import './App.css';
import {createNodes} from './Scripts/CreateNodes'
import {createGraph} from './Scripts/CreateGraph'

export const add = (x, y) => x + y;

export const total = (shipping, subTotal) => "$" + (add(shipping, subTotal)).toString();

function App() {
  var circles = [];
  var lines = [];
  var [nodes, edges] = createNodes();
  [nodes, edges] = createGraph(getWidth(), getHeight(), 10, nodes, edges)
  for(var i = 0; i < nodes.length; i++){
    circles.push(<Circle node = {nodes[i]}/>)
  }
  for(var i = 0; i < edges.length; i++){
    lines.push(<Line edge = {edges[i]}/>)
  }
  console.log(circles)
  return (
    <div style = {{backgroundColor: '#281847'}}>
      <svg height={getHeight()-5} width={getWidth()-5}>
        {lines}
      </svg>
      {circles}
    </div>
  );
}


function Circle(props) {
  var width = 0;
  var height = 0;
  if(props.node.hierarchy==0){
    width = 180;
    height = 180;
  }
  if(props.node.hierarchy==1){
    width = 80;
    height = 80;
  }
  if(props.node.hierarchy==2){
    width = 50;
    height = 50;
  }
  if(props.node.hierarchy==3){
    width = 40;
    height = 40;
  }
  const style = {
    backgroundColor: '#aebdd6',
    left: props.node.x-width/2,
    top: props.node.y-height/2,
    width: width,
    height: height,
    textAlign: "center",
    border:"2px solid #75a3f0",
    
  }
  return (
    <div>
      <div style={style} className="dot">
        <p style={{color: 'white', marginTop: 5}}>{props.node.id}</p>
      </div>
    </div>
  )
}

function Line(props) {
  const style = {
    stroke:"#75a3f0",
    strokeWidth: 2,
    position: "absolute"
  }
  return (
    
      <line 
      x1={props.edge.parentx} y1={props.edge.parenty}
      x2={props.edge.childx} y2={props.edge.childy}
      style={style}/>
   
  )
}


function getWidth() {
  return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
  );
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
