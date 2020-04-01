import React from 'react';
import '../App.css';

function shift(n, direction, size) {
    let x = n + direction
    if (x < 0) {
        x = size - 1
    }
    if (x > size - 1) {
        x = 0
    }
    return x
}

/*This will be used or adapted for use in art and design section*/
class SectionArrow extends React.Component {

    clickEvent = () => {
        this.props.shiftIndex(shift(this.props.index, this.props.direction, this.props.size))
    }

    render(){
        var style = {
            transform: this.props.direction==1 && "rotateY(180deg)",
            height:40, 
            width:40,
            padding: 6,
        }
        return (
            <img className="img" onClick={this.clickEvent} style={style} src={"/images/arrowleft.png"}/>
        )
    }
}

export {SectionArrow}