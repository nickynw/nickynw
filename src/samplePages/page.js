
function drawNodes() {
    var width = getWidth();
    var height = getHeight();
    var nodes = initNodes();
    var edges = initEdges();
    [nodes, edges] = run(width, height, 10, nodes, edges);
    draw(width, height, edges, nodes);
}

function initPosition(node, angle) {
    let step = 10;
    let new_x = node.x + step * Math.cos(angle * Math.PI / 180)
    let new_y = node.y + step * Math.sin(angle * Math.PI / 180)
    node.x = new_x;
    node.y = new_y;
}

const createNode = (id, x, y, hierarchy) => ({ "id": id, "x": x, "y": y, "hierarchy": hierarchy });



function initNodes() {
    var nodes = [];
    let start = 0;
    nodes.push(createNode("#", start, start, 0));
    nodes.push(createNode("1", start, start, 1));
    nodes.push(createNode("2", start, start, 1));
    nodes.push(createNode("3", start, start, 1));
    nodes.push(createNode("A", start, start, 2));
    nodes.push(createNode("B", start, start, 2));
    nodes.push(createNode("C", start, start, 2));
    nodes.push(createNode("L", start, start, 2));
    nodes.push(createNode("M", start, start, 2));
    nodes.push(createNode("N", start, start, 2));
    nodes.push(createNode("X", start, start, 2));
    nodes.push(createNode("Y", start, start, 2));
    nodes.push(createNode("Z", start, start, 2));
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
    edges.push({ "parent": "Z", "child": "." })
    edges.push({ "parent": "Z", "child": "," })
    edges.push({ "parent": "Y", "child": "," })
    edges.push({ "parent": "Z", "child": "'" })
    edges.push({ "parent": "X", "child": "'" })
    return edges
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

function draw(screenWidth, screenHeight, edges, nodes) {
    var c = document.getElementById("canvas");
    c.width = screenWidth;
    c.height = screenHeight;
    for (var i = 0; i < nodes.length; i++) {
        var node = document.createElement("span");
        node.className = "dot";
        node.style.left = nodes[i].x
        node.style.top = nodes[i].y
        if (nodes[i].hierarchy == 0) {
            node.style.backgroundColor = "#a1a3c7";
        }
        if (nodes[i].hierarchy == 1) {
            node.style.backgroundColor = "#a1c7c5";
        }
        if (nodes[i].hierarchy == 2) {
            node.style.backgroundColor = "#91ad8e";
        }
        var y = document.createTextNode("." + nodes[i].id + "\t");
        node.appendChild(y);
        document.getElementById("main").appendChild(node);
    }
    for (var i = 0; i < edges.length; i++) {
        let parent = getNode(nodes, edges[i].parent);
        let child = getNode(nodes, edges[i].child);
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(parent.x, parent.y);
        ctx.lineTo(child.x, child.y);
        ctx.stroke();
    }
}

drawNodes();
