import {projects} from './CreateProjects'

const types = {
  "A": {
    width: 120,
    height: 120,
    color: "#17084f",
    style: {
      display: "block",
      color: "white",
      fontSize: 20,
      fontFamily: "Lucida Console"
    }
  },
  "B": {
    width: 90,
    height: 90,
    color: "#604f9e",
    style: {
      display: "block",
      color: "#bfbfb0",
      fontSize: 14,
    }
  },
  "C": {
    width: 120,
    height: 60,
    color: "#ccc5b1",
    style: {
      display: "block",
      color: "#1e0a40",
      fontSize: 13,
    }
  },
  "D": {
    width: 100,
    height: 50,
    color: "#7f7094",
    style: {
      display: "block",
      color: "#1e0a40",
      fontSize: 13,
    }
  },
  "E": {
    width: 80,
    height: 50,
    color: "#898fab",
    style: {
      display: "block",
      color: "#1e0a40",
      fontSize: 13,
    }
  }
}

function createNodes(){
  let nodes = {
    //root
    "1": {x:0, y:6, type:"A", text:"nickynw"},
    //categories
    //"2": {x:6, y:21, type:"B", text:"Art and Design (WIP)", value:1},
    "3": {x:6, y:6, type:"B", text:"Software Engineering", value:0},
    //projects
    "4": {x:10, y:2, type:"C", project: projects[0]},
    "5": {x:12, y:5, type:"C", project: projects[1]},
    "6": {x:13.5, y:8, type:"C", project: projects[2]},
    "7": {x:15, y:11, type:"C", project: projects[3]},
    "8": {x:16, y:14, type:"C", project: projects[4]},
    /*
    //subcategories
    "9": {x:10.5, y:19, type:"D", text:"Graphic Design"},
    "10": {x:10.5, y:27, type:"D", text:"Painting"},
    //galleries
    "11": {x:15, y:17, type:"E", text:"Patterns"},
    "12": {x:15, y:20, type:"E", text:"Pixel Art"},
    "13": {x:15, y:24, type:"E", text:"Portraiture"},
    "14": {x:15, y:27, type:"E", text:"3D Geographical Acrylic"},
    "15": {x:15, y:30, type:"E", text:"Nature and Space (Oil)"},*/
  }
  return nodes;
}

function createEdges(){
  var edges = {
    "1": ["3"], 
    //"2": ["9", "10"], 
    "3": ["4", "5", "6", "7", "8"],
    //"9": ["11", "12"],
    //"10": ["13", "14", "15"]
   }
   return edges
}

function setLines(nodes, edges){
  for(var key in edges) {
    edges[key].forEach(
        (child) => {
          nodes[child].parentx = nodes[key].x;
          nodes[child].parenty = nodes[key].y;
          nodes[child].parenttype= nodes[key].type;
        })
  }
}

function graphObjects(){
    let nodes = createNodes()
    let edges = createEdges()
    setLines(nodes, edges)
    return nodes;
}

export {graphObjects, setLines as getLines, types}