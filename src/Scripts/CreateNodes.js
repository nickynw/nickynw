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

const createNode = (id, x, y, hierarchy, info = "") => ({ "id": id, "x": x, "y": y, "hierarchy": hierarchy, "info":info});

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
    nodes.push(createNode("2", start, start, 1, "Art"));
    nodes.push(createNode("3", start, start, 1, "Software Engineering"));
    nodes.push(createNode("M", start, start, 2.5, "3D Acrylic"));
    nodes.push(createNode("I", start, start, 2.5, "Portraits"));
    nodes.push(createNode("O", start, start, 2.5, "Graphics"));
    nodes.push(createNode("U", start, start, 2.5, "Nature & Space"));
    nodes.push(createNode("N", start, start, 2.5, "Patterns"));
    nodes.push(createNode("J", start, start, 2.5, "Other Projects"));
    nodes.push(createNode("X", start, start, 2, "Multiple-Choice Question Generator"));
    nodes.push(createNode("Y", start, start, 2, "This Website"));
    nodes.push(createNode("Z", start, start, 2, "Unchained - Independent Cafe finder"));
    nodes.push(createNode("W", start, start, 2, "(MSc) Learning about Parkinson's through Haptic VR"));
    nodes.push(createNode(".", start, start, 3));
    nodes.push(createNode(",", start, start, 3));
    nodes.push(createNode("'", start, start, 3));
    nodes.push(createNode("4", start, start, 3));
    nodes.push(createNode("5", start, start, 3));
    nodes.push(createNode("6", start, start, 3));
    nodes.push(createNode("7", start, start, 3));
    nodes.push(createNode("8", start, start, 3));
    initPosition(getNode(nodes, "2"), 0)
    initPosition(getNode(nodes, "3"), 180)
    return nodes;
}

function initEdges() {
    var edges = [];
    edges.push({ "parent": "#", "child": "2" })
    edges.push({ "parent": "#", "child": "3" })
    edges.push({ "parent": "2", "child": "M" })
    edges.push({ "parent": "2", "child": "I" })
    edges.push({ "parent": "2", "child": "O" })
    edges.push({ "parent": "2", "child": "U" })
    edges.push({ "parent": "2", "child": "N" })
    edges.push({ "parent": "3", "child": "X" })
    edges.push({ "parent": "3", "child": "Y" })
    edges.push({ "parent": "3", "child": "Z" })
    edges.push({ "parent": "3", "child": "J" })
    edges.push({ "parent": "3", "child": "W" })
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