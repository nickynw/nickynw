import React from 'react';
import '../App.css';
import { tileSize } from '../Scripts/Global'




class GridTransition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: 0,
            grid: [],
            altered: [],
            condition: ""
        };
    }

    //Initialises the grid and performs entrance transition
    componentDidMount() {
        var grid = []
        var xSize = (Math.round(this.props.screenWidth / tileSize)) + 1
        var ySize = (Math.round(this.props.screenHeight / tileSize)) + 1
        for (var x = 0; x < xSize; x++) {
            for (var y = 0; y < ySize; y++) {
                grid.push({ x: x, y: y, z: 3 })
            }
        }
        var altered = [...Array(grid.length).keys()]
        this.setState({ grid: grid, altered: altered })
        this.triggerTransition(-1)
    }

    triggerTransition(z, onExit = ""){
        this.timerID = setInterval(
            () => this.tick(z, onExit),
            0.05
        );
    }

    handleClick = () => {
        if (this.state.trigger === 0) {
            var altered = [...Array(this.state.grid.length).keys()]
            this.setState({ altered: altered })
            this.triggerTransition(3, '/project')
        }   
    }

    //Changes one tile's zValue
    alterTile(new_grid, alteredList, zValue) {
        if (alteredList.length > 0) {
            var randomIndex = getRandom(0, alteredList.length - 1)
            var indexToChange = alteredList[randomIndex];
            new_grid[indexToChange].z = zValue;
            alteredList.splice(randomIndex, 1);
        }
    }

    tick(zValue, onExit) {
        //If there are no more tiles left to change
        if (this.state.altered.length == 0) {
            this.setState({ trigger: 0 })
            clearInterval(this.timerID);
            if(onExit!=""){
                this.props.history.push(onExit)
            }
        } else {
            //Set state grid to new grid with tiles altered 10 at a time per interval
            var new_grid = [...this.state.grid]
            var alteredList = [...this.state.altered]
            for (var i = 0; i < 10; i++) {
                this.alterTile(new_grid, alteredList, zValue)
            }
            this.setState({
                grid: new_grid,
                altered: alteredList,
                trigger: this.state.trigger + 10,
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const style = (x, y, z) => ({
            position: "absolute",
            width: tileSize,
            height: tileSize,
            left: x * tileSize,
            top: y * tileSize,
            background: "rgb(28,24,52,1)",
            zIndex: z,
            border: "1px #2A253A solid"
        })

        return (
            <div style={{ position: "absolute" }}>

                <button style={{ position: "absolute", zIndex: 4, left: 200, top: 200 }} onClick={this.handleClick}>
                    {this.state.trigger}
                </button>

                {this.state.grid.map(function (tile) {
                    return (
                        <div style={style(tile.x, tile.y, tile.z)} />
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