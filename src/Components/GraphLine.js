import React from 'react';
import '../App.css';
import {types} from '../Scripts/Nodes'
import {tileSize} from '../Scripts/Global'

const conv = (n) => n * tileSize

class GraphLine extends React.Component {
  render() {
    let x1 = this.props.values.x1 + types[this.props.values.type].width/ tileSize
    let x2 = this.props.values.x2
    let y1 = this.props.values.y1
    let y2 = this.props.values.y2
    let xa = (x1) + (x2 - x1) / 2 * 0.8
    let ya = (this.props.values.y1) - (y2 - y1) * 0.01
    let xb = (x2) - (x2 - x1) * 0.4
    let yb = (this.props.values.y2) - (y2 - y1) * 0.5
    console.log(types[this.props.values.type].width / tileSize)

    return (
      <svg style={{
        zIndex: -1,
        position: "absolute",
        width: 1500,
        height: 1000
      }}>
        <path style={{}} d={`M  ${conv(x1)},${conv(y1)}  Q ${conv(xa)},${conv(ya)} ${conv(xb)},${conv(yb)} T ${conv(x2)} ${conv(y2)}`}
          fill="none" stroke="white" strokeWidth="1" />
        <rect x={conv(x2)+1} y={conv(y2)-10} width="60" height="20"
          style={{
            fill:"none",
            stroke:"rgb(255,255,255,1)",
            strokeWidth:1,}} />
          <line x1={conv(x2)+60} y1={conv(y2)} x2={conv(x2)+80} y2={conv(y2)} 
          style={{stroke:"rgb(255,255,255)",
          strokeWidth:1}} />

      </svg>

    )
  }
}

export {GraphLine}

/*
          <circle cx={`${conv(x1)}`} cy={`${conv(y1)}`}  r="4" stroke="black" stroke-width="1" fill="green" />
          <circle cx={`${conv(x2)}`} cy={`${conv(y2)}`}  r="4" stroke="black" stroke-width="1" fill="yellow" />

           <polyline points={[conv(x2),conv(y2),conv(x2)+10,conv(y2), conv(x2)+10,conv(y2)+20, conv(x2)+80,conv(y2)+20, conv(x2)+80,conv(y2)]}
  style={{fill:"none", stroke:"white", strokeWidth:1}} />


  <polyline points=`
  ${conv(x2)},${conv(y2)} ${conv(x2)+20},${conv(y2)} ${conv(x2)+20},${conv(y2)+20} ${conv(x2)+80},${conv(y2)+20} ${conv(x2)+80},${conv(y2)}`
  style={{fill:"none", stroke:"white", strokeWidth:1}} />



For drawin bezier quadratic points to determine curve. (Just plug in next to path to see)

<circle cx={`${conv(xa)}`} cy={`${conv(ya)}`}  r="4" stroke="black" stroke-width="1" fill="red" />
<circle cx={`${conv(xb)}`} cy={`${conv(yb)}`}  r="4" stroke="black" stroke-width="1" fill="blue" />
<circle style={{}}cx={`${conv(x1)+2}`} cy={`${conv(y1)}`}  r="8" stroke="white" stroke-width="2" fill="#b4a3d1" />

*/