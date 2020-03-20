import {getLines} from "./Nodes"


test('<Lines>', () => {
    let nodes = {
      "1": {x:5, y:5},
      "2": {x:7, y:5}
    }
    var edges = {
      "1": "2", 
     }
    expect(true).toBeTruthy()
    expect(getLines(nodes, edges)).toStrictEqual([ { x1: 5, x2: 7, y1: 5, y2: 5 } ])
  });