//Entry point, get these nodes and edges (for production - to replace with database)
function createNodes() {
    var nodes = initNodes();
    var edges = initEdges();
    return [nodes, edges]
}

function initPosition(node, angle) {
    let step = 20;
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
    nodes.push(createNode("1", start, start, 1, "Contact"));
    nodes.push(createNode("2", start, start, 1, "Art"));
    nodes.push(createNode("3", start, start, 1, "Software Engineering"));
    nodes.push(createNode("A", start, start, 2.5, "LinkedIn"));
    nodes.push(createNode("B", start, start, 2.5, "Github"));
    nodes.push(createNode("C", start, start, 2.5, "Email"));
    nodes.push(createNode("L", start, start, 2, "Graphics"));
    nodes.push(createNode("M", start, start, 2, "Paintings"));
    nodes.push(createNode("N", start, start, 2, "Patterns"));
    nodes.push(createNode("X", start, start, 2, "Multiple-Choice Question Generator"));
    nodes.push(createNode("Y", start, start, 2, "(MSc) Learning about Parkinson's through Haptic VR"));
    nodes.push(createNode("Z", start, start, 2, "Unchained - Independent Cafe finder"));
    nodes.push(createNode("W", start, start, 2, "This Website"));
    nodes.push(createNode(".", start, start, 3));
    nodes.push(createNode(",", start, start, 3));
    nodes.push(createNode("'", start, start, 3));
    initPosition(getNode(nodes, "1"), 270)
    initPosition(getNode(nodes, "2"), 30)
    initPosition(getNode(nodes, "3"), 150)
    return nodes;
}

function initEdges() {
    var edges = [];
    edges.push({ "parent": "#", "child": "1" })
    edges.push({ "parent": "#", "child": "2" })
    edges.push({ "parent": "#", "child": "3" })
    edges.push({ "parent": "1", "child": "A" })
    edges.push({ "parent": "1", "child": "B" })
    edges.push({ "parent": "1", "child": "C" })
    edges.push({ "parent": "2", "child": "L" })
    edges.push({ "parent": "2", "child": "M" })
    edges.push({ "parent": "2", "child": "N" })
    edges.push({ "parent": "3", "child": "X" })
    edges.push({ "parent": "3", "child": "Y" })
    edges.push({ "parent": "3", "child": "Z" })
    edges.push({ "parent": "3", "child": "W" })
    edges.push({ "parent": "Z", "child": "." })
    edges.push({ "parent": "Z", "child": "," })
    edges.push({ "parent": "Y", "child": "," })
    edges.push({ "parent": "X", "child": "'" })
    return edges
}

export {createNodes}