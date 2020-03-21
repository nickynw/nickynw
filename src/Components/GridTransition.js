import React from 'react';
import '../App.css';
import { tileSize } from '../Scripts/Global'



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
        var xSize = (Math.round(this.props.screenWidth / tileSize)) + 1
        var ySize = (Math.round(this.props.screenHeight / tileSize)) + 1
        console.log(xSize, ySize)
        for (var x = 0; x < xSize; x++) {
            for (var y = 0; y < ySize; y++) {
                grid.push({ x: x, y: y, color: "rgb(0,0,0,0)" })
                altered.push(altered.length);
            }
        }
        this.setState({ grid: grid, altered: altered })
    }

    handleClick = () => {
        if (this.state.trigger === 0) {
            this.timerID = setInterval(
                () => this.tick(),
                0.05
            );
        }
    }

    alterTile(new_grid, alteredList) {
        if (alteredList.length > 0) {
            var randomIndex = getRandom(0, alteredList.length - 1)
            var indexToChange = alteredList[randomIndex];
            new_grid[indexToChange].color = "rgb(28,24,52,1)"
            alteredList.splice(randomIndex, 1);
        }
    }

    tick() {
        if (this.state.altered.length == 0) {
            clearInterval(this.timerID);
            return;
        } else {

            var new_grid = [...this.state.grid]
            var alteredList = [...this.state.altered]
            for (var i = 0; i < 10; i++) {
                this.alterTile(new_grid, alteredList)
            }
            this.setState({
                grid: new_grid,
                altered: alteredList
            });
        }
        this.setState({
            trigger: this.state.trigger + 10,
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const style = (x, y, color) => ({
                position: "absolute",
                width: tileSize,
                height: tileSize,
                left: x * tileSize,
                top: y * tileSize,
                background: color,
                border: color!=="rgb(0,0,0,0)" && "1px #2A253A solid",
                zIndex: (this.state.trigger==0) ? -1 : 3  
        })
        
        return (
            <div style={{ position: "absolute" }}>


                <button style={{ position: "absolute", zIndex: 4, left: 200, top: 200 }} onClick={this.handleClick}>
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