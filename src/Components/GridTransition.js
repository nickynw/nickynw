import React from 'react';
import '../App.css';

function style(x, y, color){
    if(color==="rgb(0,0,0,0)"){
        var border = "0px"
    }
    else {
        border = "1px #2A253A solid";
    }
    return {
        position: "absolute",
        width: 40,  
        height: 40,
        left: x * 40,
        top: y * 40,
        background: color,
        border: border
    }
}

class GridTransition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: 0,
            grid: [],
            altered: []
        };
    }


    componentDidMount() {
        var grid = []
        var altered = []
        for (var x = 0; x < 38; x++) {
            for (var y = 0; y < 17; y++) {
                grid.push({ x: x, y: y, color:"rgb(0,0,0,0)"})
                altered.push(altered.length);
            }
        }
        this.setState({ grid: grid, altered:altered })
    }

    handleClick = () => {
        if (this.state.trigger === 0) {
            this.timerID = setInterval(
                () => this.tick(),
                0.05
            );
        }
    }   

    alterTile(new_grid, alteredList){
        if(alteredList.length>0){
            var randomIndex = getRandom(0, alteredList.length-1)
            var indexToChange = alteredList[randomIndex];
            new_grid[indexToChange].color = "rgb(28,24,52,1)"
            alteredList.splice(randomIndex, 1);
        }
    }

    tick() {
        if(this.state.trigger < this.state.grid.length){
            if(this.state.altered.length!==0){
                var new_grid = [...this.state.grid]
                var alteredList = [...this.state.altered]
                for(var i=0; i < 10; i++){
                    this.alterTile(new_grid, alteredList)
                }
                this.setState({
                    grid: new_grid,
                    altered: alteredList
                });
            }
            this.setState({
                trigger: this.state.trigger + 1,
            });
        }

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div style={{position:"absolute"}}>
   
                
                <button style={{position: "absolute", zIndex:2, left:200, top:200}} onClick={this.handleClick}>
                    {this.state.trigger}
                </button>

                {this.state.grid.map(function (square) {
                    return (
                        <div style={style(square.x, square.y, square.color)} />
                    );
                })}
             </div>
        );
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { GridTransition }