import React, { View } from 'react';
import './App.css';
import { createNodes } from './Scripts/CreateNodes'
import { createGraph } from './Scripts/CreateGraph'
import { NodeCircle } from './Components/NodeCircle'
import { Line } from './Components/Line'

export const add = (x, y) => x + y;
export const total = (shipping, subTotal) => "$" + (add(shipping, subTotal)).toString();

const funFacts = [
  "Fun fact: My first pet hamster was called ... wait actually nevermind.",
  "Fun fact: I learnt how to whistle when I was 18!",
  "Fun fact: I am half thai, half english, and possibly italian.",
  "Fun fact: I can't think of any more fun facts about myself.",
  "Fun fact: I was invited to the private beta for a software when I was 12! display: flex",
  "Fun fact: I painted a portrait of Amanda Palmer, and gave it to her when I went to her book signing.",
  "Fun fact: I got a detention in my first day of school, for swearing during the register.",
  "Fun fact: I've held many different human brains in my hands.",
  "Fun fact: I can tell you the difference between an ox and a sheep's gall bladders.",
  "Fun fact: I did Muay Thai kickboxing at uni, I'd recommend it.",
  "Fun fact: I ran the first Neuroscience society wine, cheese, and arts evening!",
  "Fun fact: I love coriander, there I said it.",
]

function App() {
  return (
    <div>
      <div className="centered">
        <p style={{ position: "absolute", color: "#9179b0" }}>{funFacts[getRandom(0, funFacts.length - 1)]}</p>
      </div>

      <div><Graph /></div>
      <SoftwareList />

    </div>
  );
}

/*<div className="Fixed" style={{marginLeft: 20}}>Hello
      </div>*/

class SoftwareList extends React.Component {
  render() {
    return (
      <div className="centered" style={{ position:"absolute", margin: 25}}>
        <ul>
  <li style={{color: "#8e9294"}}>Languages: Python, Javascript, Java, HTML/CSS, C#, C, SQL, CYPHER</li>
  <li style={{color: "#7a6e8a"}}>Frameworks: React/React Native, Expo, Django, Flask, Unity, JavaFX</li>
  <li style={{color: "#655c70"}}>Software: Stencyl, SPSS, Blender, Inkscape, Oculus Go, Neo4J</li>
</ul>
      </div>
    )
  }
}

class Graph extends React.Component {
  componentDidMount() {
    window.scrollBy(0, 250)
  }

  render() {

    var circles = [];
    var lines = [];
    var [nodes, edges] = createNodes();
    [nodes, edges] = createGraph(getWidth(), getHeight(), nodes, edges)
    for (var i = 0; i < nodes.length; i++) {
      circles.push(<NodeCircle node={nodes[i]} />)
    }
    for (var i = 0; i < edges.length; i++) {
      lines.push(<Line edge={edges[i]} />)
    }

    return (
      <div ref={this.myRef} style={{
        height: getHeight(),
        width: getWidth()
      }}>
        <svg height={getHeight()} width={getWidth()} style={{ overflow: "hidden" }}>
          {lines}
        </svg>
        {circles}
      </div>
    )
  }
}

/*
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
  }

  componentDidMount() {
    window.scrollTo(700 - document.documentElement.clientWidth/2, 700-document.documentElement.clientHeight/2);
    console.log(getHeight())
  }
*/

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  ) - 20
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  ) + 400;
}

export default App;
