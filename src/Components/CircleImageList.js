import React from 'react';
import '../App.css';
import { types } from '../Scripts/Nodes'
import { tileSize, imageSize } from '../Scripts/Global'
import { GraphLine } from '../Components/GraphLine'

class CircleImageList extends React.Component {

    render() {


        var imageDisplay = [];
        var images = this.props.images;
        var imagesOffset = 220;
        images.forEach((url, index) => {
            const imageStyle = {
                width: imageSize,   
                height: imageSize,
                display: "flex",
                position: "absolute",
                marginLeft: (this.props.x * tileSize )+ imagesOffset + (imageSize + 10) * index,
                marginTop: (this.props.y * tileSize ) - imageSize/2,
                borderRadius: 50,
            }
            let imageurl = "/images/" + url + ".png"
            let imageNode = <img style={imageStyle} src={imageurl} ></img>
            imageDisplay.push(imageNode)
        })


        return (
            <div style={{position:"relative"}}> {imageDisplay} </div>
        )
    }
}

export { CircleImageList }