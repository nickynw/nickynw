var nodes = []
var edges = []
var lines = []

function getNodes(){
  let nodes = {
    "1": {x:0, y:8, type:"A", text:"nickynw"},
    "2": {x:4, y:10, type:"B", text:"Art and Design"},
    "3": {x:4, y:6, type:"B", text:"Software Engineering"},
    "4": {x:8, y:2, type:"C", text:"Unchained - An Independent Cafe Finding App", images:["reactnative", "javascript"]},
    "5": {x:10, y:5, type:"C", text:"This Website", images:["react", "javascript"]},
    "6": {x:11.5, y:8, type:"C", text:"Qbot: An Online Multiple-choice Question Generator", images:["python", "django", "flask"]},
    "7": {x:13, y:11, type:"C", text:"(MSc) Learning about Parkinson's through Haptic VR", images:["unity", "csharp"]},
  }
  return nodes;
}

function getEdges(){
  var edges = {
    "1": ["2" ,"3"], 
    "3": ["4", "5", "6", "7"],
   }
   return edges
}

function getLines(nodes, edges){
  var lines = [];
  for(var key in edges) {
    Array.from(edges[key]).forEach(
        child => {lines.push({x1: nodes[key].x, x2:nodes[child].x, y1: nodes[key].y, y2:nodes[child].y, type: nodes[key].type})})
  }
  return lines;
}

function graphObjects(){
    let nodes = getNodes()
    let edges = getEdges()
    let lines = getLines(nodes, edges)
    return [nodes, edges, lines];
}

export {graphObjects, getLines}