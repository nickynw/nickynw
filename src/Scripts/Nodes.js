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
  }
}



function getNodes(){
  let nodes = {
    "1": {x:1, y:8, type:"A", text:"nickynw"},
    "2": {x:6, y:10, type:"B", text:"Art and Design"},
    "3": {x:6, y:6, type:"B", text:"Software Engineering"},
    "4": {x:10, y:2, type:"C", text:"This Website", images:["react", "javascript"], date:"**NEW**"},
    "5": {x:12, y:5, type:"C", text:"Unchained - An Independent Cafe Finding App", images:["reactnative", "javascript"], date:"03/2020"},
    "6": {x:13.5, y:8, type:"C", text:"Qbot: An Online Multiple-choice Question Generator", images:["python", "django", "flask", "postgres", "neo4j"], date:"01/2020"},
    "7": {x:15, y:11, type:"C", text:"(MSc) Learning about Parkinson's through Haptic VR", images:["unity", "csharp", "oculus"], date:"09/2019"},
    "8": {x:16, y:14, type:"C", text:"Misc. Java Projects", images:["java", "javafx"], date:"04/2019"},
  }
  return nodes;
}

function getEdges(){
  var edges = {
    "1": ["2" ,"3"], 
    "3": ["4", "5", "6", "7", "8"],
   }
   return edges
}

function getLines(nodes, edges){
  var lines = [];
  for(var key in edges) {
    edges[key].forEach(
        child => {lines.push({x1: nodes[key].x, x2:nodes[child].x, y1: nodes[key].y, y2:nodes[child].y, type: nodes[key].type})})
  }
  return lines;
}

function graphObjects(){
    let nodes = getNodes()
    let edges = getEdges()
    let lines = getLines(nodes, edges)
    return [nodes, lines];
}

export {graphObjects, getLines, types}