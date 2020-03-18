//Entry point, get these nodes and edges (for production - to replace with database)
function createNodes() {
    var nodes = initNodes();
    var edges = initEdges();
    return [nodes, edges]
}

function initPosition(node, angle) {
    let step = 25;
    let new_x = node.x + step * Math.cos(angle * Math.PI / 180)
    let new_y = node.y + step * Math.sin(angle * Math.PI / 180)
    node.x = new_x;
    node.y = new_y;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createNode (id, x, y, hierarchy, info = "") {
return { 
    "id": id, 
    "x": 0, 
    "y": 0, 
    "hierarchy": hierarchy, 
    "info":info,
    "force": 0,
    "direction": 0
}
}

function getNode(nodes, id) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].id == id) {
            return nodes[i]
        }
    }
}

function initNodes() {
    var nodes = [];
    let start = 0;
    nodes.push(createNode("#", start, start, 0, "nickynw.github.io"));
    nodes.push(createNode("c1", start, start, 1, "Art and Design"));
    nodes.push(createNode("c2", start, start, 1, "Software Engineering"));
    nodes.push(createNode("M", start, start, 2.5, "3D Acrylic"));
    nodes.push(createNode("I", start, start, 2.5, "Portraits"));
    nodes.push(createNode("O", start, start, 2.5, "Graphics"));
    nodes.push(createNode("U", start, start, 2.5, "Nature & Space"));
    nodes.push(createNode("N", start, start, 2.5, "Patterns"));
    nodes.push(createNode("J", start, start, 2.5, "Other Projects"));
    nodes.push(createNode("X", start, start, 2, "QBot - An Online Multiple-Choice Question Generator"));
    nodes.push(createNode("Y", start, start, 2, "The current website of nickynw.github.io"));
    nodes.push(createNode("Z", start, start, 2, "Unchained - An Independent Cafe Searching app"));
    nodes.push(createNode("W", start, start, 2, "(MSc) Learning about Parkinson's through Haptic VR"));
    nodes.push(createNode(".", start, start, 3, "reactnative"));
    nodes.push(createNode(",", start, start, 3, "javascript"));
    nodes.push(createNode("'", start, start, 3, "django"));
    nodes.push(createNode("4", start, start, 3, "csharp"));
    nodes.push(createNode("5", start, start, 3, "python"));
    nodes.push(createNode("6", start, start, 3, "react"));
    nodes.push(createNode("7", start, start, 3, "flask"));
    nodes.push(createNode("8", start, start, 3, "unity"));
    
    initPosition(getNode(nodes, "c1"), 0)
    initPosition(getNode(nodes, "c2"), 180)
    return nodes;
}

function initEdges() {
    var edges = [];
    edges.push({ "parent": "#", "child": "c1" })
    edges.push({ "parent": "#", "child": "c2" })
    edges.push({ "parent": "c1", "child": "M" })
    edges.push({ "parent": "c1", "child": "I" })
    edges.push({ "parent": "c1", "child": "O" })
    edges.push({ "parent": "c1", "child": "U" })
    edges.push({ "parent": "c1", "child": "N" })
    edges.push({ "parent": "c2", "child": "X" })
    edges.push({ "parent": "c2", "child": "Y" })
    edges.push({ "parent": "c2", "child": "Z" })
    edges.push({ "parent": "c2", "child": "J" })
    edges.push({ "parent": "c2", "child": "W" })
    edges.push({ "parent": "Z", "child": "." }) 
    edges.push({ "parent": "Z", "child": "," })
    edges.push({ "parent": "Y", "child": "," })
    edges.push({ "parent": "X", "child": "'" })
    edges.push({ "parent": "W", "child": "4" })
    edges.push({ "parent": "W", "child": "8" })
    edges.push({ "parent": "X", "child": "5" })
    edges.push({ "parent": "X", "child": "7" })
    edges.push({ "parent": "Y", "child": "6" })
    return edges
}

export {createNodes}