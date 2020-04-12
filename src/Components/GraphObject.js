import React from 'react';
import '../App.css';
import { GraphLine } from '../Components/GraphLine'
import { GraphNode } from '../Components/GraphNode'
import { CircleImageList } from '../Components/CircleImageList'
import { GraphDate } from '../Components/GraphDate'

class GraphObject extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            hoverState: false
        };
    }

    setHoverState = (state) => {
        this.setState({ hoverState: state })
    }

    render() {
        return (
            <div id={"Node_" + this.props.node.key}>

                {this.props.node.project !== undefined &&
                    <GraphDate node={this.props.node} hoverState={this.state.hoverState} />
                }

                <GraphNode node={this.props.node} setHoverState={this.setHoverState} hoverState={this.state.hoverState} handleClick={this.props.handleClick} />

                {this.props.node.project !== undefined &&
                    <CircleImageList hoverState={this.state.hoverState} node={this.props.node} />
                }

                {this.props.node.parenttype !== undefined &&
                    <GraphLine hoverState={this.state.hoverState} values={{ type: this.props.node.parenttype, x1: this.props.node.parentx, y1: this.props.node.parenty, x2: this.props.node.x, y2: this.props.node.y }} />
                }

            </div>
        )
    }
}

export { GraphObject }