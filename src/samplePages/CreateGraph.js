/*Entry point:
restDistance = distance nodes will aim to be floating from eachother.
nodes must be objects with an id, x and y, edges are objects with parent and child (id).*/

function createGraph(width, height, restDistance, nodes, edges) {
    let screenHeight = 1000;
    restDistance = 21;
    let length = getThirdSide(3, restDistance);
    for (var x = 0; x < 100; x++) {
        unrelatedDisperse(nodes, edges, length, restDistance)
        relatedJoin(nodes, edges, restDistance);
        relatedDisperse(nodes, edges, restDistance);
        dontExitScreen(nodes, screenHeight);
    }
    /*
    1366 584
    while(breaker<10){
        breaker++;
        for (var x = 0; x < 20; x++) {
            relatedDisperse(nodes, edges, restDistance);
            unrelatedDisperse(nodes, edges, length, restDistance)
            relatedJoin(nodes, edges, restDistance);
            dontExitScreen(nodes, screenHeight);
        }
    }*/

    var positions = calculateRealPositions(width, height, nodes);
    var lines = calculateLines(nodes, edges)
    return [positions, lines]
}

function calculateLines(nodes, edges) {
    var lines = [];
    for (var i = 0; i < edges.length; i++) {
        let parent = getNode(nodes, edges[i].parent);
        let child = getNode(nodes, edges[i].child);
        let line = {
            "parentx": parent.x,
            "parenty": parent.y,
            "childx": child.x,
            "childy": child.y
        }
        lines.push(line);
    }
    return lines
}

function getNode(nodes, id) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].id == id) {
            return nodes[i]
        }
    }
}

function hasLink(edges, node1, node2) {
    for (var i = 0; i < edges.length; i++) {
        if (node1.id == edges[i].parent && node2.id == edges[i].child) {
            return true
        }
        if (node1.id == edges[i].child && node2.id == edges[i].parent) {
            return true
        }
    }
    return false
}

//Unrelated Nodes move away from eachother
function unrelatedDisperse(nodes, edges, restDistance) {
    for (var i = 0; i < nodes.length; i++) {
        for (var j = 0; j < nodes.length; j++) {
            if (i != j) {
                if (!hasLink(edges, nodes[i], nodes[j])) {

                    if (getDist(nodes[i], nodes[j]) < 5) {
                        updatePosition(nodes[i], nodes[j], -15)
                        updatePosition(nodes[j], nodes[i], -15)
                    }
                    else if (getDist(nodes[i], nodes[j]) < 10) {
                        updatePosition(nodes[i], nodes[j], -10)
                        updatePosition(nodes[j], nodes[i], -10)
                    }
                    else if (getDist(nodes[i], nodes[j]) < 20) {
                        updatePosition(nodes[i], nodes[j], -2)
                        updatePosition(nodes[j], nodes[i], -2)
                    }
                    else if (getDist(nodes[i], nodes[j]) < 30) {
                        updatePosition(nodes[i], nodes[j], -0.5)
                        updatePosition(nodes[j], nodes[i], -0.5)
                    }
                }
            }
        }
    }
}

//Related Nodes attract eachother
function relatedJoin(nodes, edges, restDistance) {
    for (var i = 0; i < edges.length; i++) {
        let parent = getNode(nodes, edges[i].parent);
        let child = getNode(nodes, edges[i].child);
        if (parent.hierarchy==2 && child.hierarchy==3 && getDist(parent, child) > restDistance/2) {
            let step = getDist(parent, child) - restDistance/2;
            updatePosition(child, parent, step)
        }
        if (parent.hierarchy==2 && child.hierarchy==2.5 && getDist(parent, child) > restDistance/1.8) {
            let step = getDist(parent, child) - restDistance/1.8;
            updatePosition(child, parent, step)
        }
        else if (getDist(parent, child) > restDistance) {
            let step = getDist(parent, child) - restDistance;
            updatePosition(child, parent, step)
        }
    }
}

//Related Nodes move away from eachother if too close
function relatedDisperse(nodes, edges, restDistance) {
    for (var i = 0; i < edges.length; i++) {
        let parent = getNode(nodes, edges[i].parent);
        let child = getNode(nodes, edges[i].child);
        if (getDist(child, parent) == 0) {
            child.x += getRandom(-2, +2)
            child.y += getRandom(-2, +2)
        }
        if (getDist(child, parent) < restDistance) {
            let step = restDistance - getDist(child, parent)
            if(parent.hierarchy==1){
                step/=2;
            }
            if(parent.hierarchy==2){
                step/=4;
            }
            updatePosition(child, parent, -step)
        }
        
    }
}

function dontExitScreen(nodes, screenHeight) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].hierarchy > 1) {
            if (nodes[i].y < 6) {
                nodes[i].y += 2
            }
            if (nodes[i].y > screenHeight - 6) {
                nodes[i].y -= 2
            }
        }
    }
}

function calculateRealPositions(screenWidth, screenHeight, nodes) {
    for (var i = 0; i < nodes.length; i++) {
        var xoffset = screenWidth / 2;
        var yoffset = screenHeight / 2;
        nodes[i].x = xoffset + nodes[i].x * 10;
        nodes[i].y = yoffset + nodes[i].y * 10;
    }
    return nodes
}


/*MATHEMATICAL FUNCTIONS*/

//Lets an node step towards/away from target based on step
function updatePosition(node, target, step) {
    if (node.hierarchy <= 1) {
        return
    }
    if (target.hierarchy == 0) {
        step -= 5;
    }
    let angle = getAngle(target, node);
    let new_x = node.x + step * Math.cos(angle * Math.PI / 180)
    let new_y = node.y + step * Math.sin(angle * Math.PI / 180)
    node.x = new_x;
    node.y = new_y;
}

//c^2 = (a^2 * b^2) - (2abCosC)
function getThirdSide(n, length) {
    let angle = 360 / n;
    let x = (length * length * 2) - (2 * length * length * Math.cos(angle));
    return x;
}

function getAngle(obj1, obj2) {
    var dy = obj1.y - obj2.y;
    var dx = obj1.x - obj2.x;
    var theta = Math.atan2(dy, dx);
    theta *= 180 / Math.PI;
    if (theta < 0) theta = 360 + theta;
    return theta;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDist(parent, child) {
    return Math.hypot(child.x - parent.x, child.y - parent.y)
}




export { getAngle, updatePosition, getThirdSide, createGraph }

/*
for each node o1
   force[o1] = 0
   for each node o2
      if o1 and o2 are linked
         force[o1] += attraction_force(o1, o2)
      else
         force[o1] += repulsion_force(o1, o2)

for each node o1
   move(o1, force[o1])


   function getRoot(nodes, edges) {
    var nodeList = nodes.map(x => x.id);
    for (var i = 0; i < nodes.length; i++) {
        for (var j = 0; j < edges.length; j++) {
            if (nodes[i].id === edges[j].child) {
                nodeList = nodeList.filter(function (item) {
                    return item !== nodes[i].id
                })
            }
        }
    }
    return nodeList;
}

function determineHierarchy() {
    let x = 0;
    children of root = 1,
    children of children = 2,
    children of children = 3,
}
*/