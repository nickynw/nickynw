import React from 'react';
import '../App.css';
import {types} from '../Scripts/Nodes'

const conv = (n) => n * 40

class GraphLine extends React.Component {
  render() {
    let x1 = this.props.values.x1 + (types[this.props.values.type].width + 10) / 40
    let x2 = this.props.values.x2
    let y1 = this.props.values.y1
    let y2 = this.props.values.y2
    let xa = (x1) + (x2 - x1) / 2 * 0.8
    let ya = (this.props.values.y1) - (y2 - y1) * 0.01
    let xb = (x2) - (x2 - x1) * 0.4
    let yb = (this.props.values.y2) - (y2 - y1) * 0.5

    return (
      <svg>
        <path style={{}} d={`M  ${conv(x1)},${conv(y1)}  Q ${conv(xa)},${conv(ya)} ${conv(xb)},${conv(yb)} T ${conv(x2)} ${conv(y2)}`}
          fill="none" stroke="white" strokeWidth="1" />
      </svg>

    )
  }
}

export {GraphLine}

/* For drawin bezier quadratic points to determine curve. (Just plug in next to path to see)
<circle cx={`${conv(x1)}`} cy={`${conv(y1)}`}  r="4" stroke="black" stroke-width="1" fill="green" />
<circle cx={`${conv(xa)}`} cy={`${conv(ya)}`}  r="4" stroke="black" stroke-width="1" fill="red" />
<circle cx={`${conv(xb)}`} cy={`${conv(yb)}`}  r="4" stroke="black" stroke-width="1" fill="blue" />
<circle style={{}}cx={`${conv(x1)+2}`} cy={`${conv(y1)}`}  r="8" stroke="white" stroke-width="2" fill="#b4a3d1" />

*/