import React from 'react';
import '../App.css';
import { tileSize } from '../Scripts/Global'
import { screenHeight, screenWidth } from '../Scripts/Global'

//Changes one tile's zValue at random from remaining unchanged tiles
function alterTile(grid, alteredList, opacity) {
    if (alteredList.length > 0) {
        var randomIndex = getRandom(0, alteredList.length - 1)
        var indexToChange = alteredList[randomIndex];
        grid[indexToChange].o = opacity;
        alteredList.splice(randomIndex, 1);
    }
}

const style = (x, y, o) => ({
    position: "absolute",
    width: tileSize,
    height: tileSize,
    left: x * tileSize,
    top: y * tileSize,
    background: "rgb(28,24,52,1)",
    opacity: o,
    border: "1px #2A253A solid",
    transition: "0.2s linear",
    zIndex: 3,
    pointerEvents:"none",
    willChange: "opacity"
})

class GridTransition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: 0,
            grid: [],
            altered: [],
        };
    }

    //Initialises the grid and performs entrance transition
    componentDidMount() {
        var grid = []
        var xSize = (Math.round(screenWidth / tileSize)) +1
        var ySize = (Math.round(screenHeight / tileSize)) +1
        for (var x = 0; x < xSize; x++) {
            for (var y = 0; y < ySize; y++) {
                grid.push({ x: x, y: y, o: 1 })
            }
        }
        var altered = [...Array(grid.length).keys()]
        this.setState({ grid: grid, altered: altered })
        this.triggerTransition(0)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.pushURL !== prevProps.pushURL) {
          this.start()
        }
     }

    start = () => {
        if (this.state.trigger === 0) {
            var altered = [...Array(this.state.grid.length).keys()]
            this.setState({ altered: altered })
            this.triggerTransition(1)
        }   
    }

    //o = opacity, onExit = push to this location when transition finishes ( or don't if left blank)
    triggerTransition(opacity){
        this.timerID = setInterval(
            () => this.tick(opacity),
            0.04
        );
    }


    tick(opacity) {
        //If there are no more tiles left to change
        if (this.state.altered.length == 0) {
            this.setState({ trigger: 0 })
            clearInterval(this.timerID);
            if(this.props.pushURL!=undefined){
                this.props.history.push(this.props.pushURL)
            }
        } else {
            //Set state grid to new grid with tiles altered 10 at a time per interval
            for (var i = 0; i < 20; i++) {
                alterTile(this.state.grid, this.state.altered, opacity)
            }
            this.setState({
                trigger: this.state.trigger + 10,
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div style={{ position: "absolute" }}>
                {this.state.grid.map(function (tile) {
                    return (
                        <div style={style(tile.x, tile.y, tile.o)} />
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