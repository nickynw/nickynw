import React from 'react';
import '../App.css';
import { types } from '../Scripts/Nodes'
import { tileSize } from '../Scripts/Global'

class CircleImageList extends React.Component {

    render() {
        var imageDisplay = [];
        var imageSize = 50;
        var images = this.props.node.images;
        var imageSeperation = (this.props.hoverState) ? 13: 8;
        var imagesOffset = types[this.props.node.type].width + 90 + imageSeperation;
 
        images.forEach((url, index) => {
            const imageStyle = {
                width: imageSize,   
                height: imageSize,
                display: "flex",
                position: "absolute",
                marginLeft: (this.props.node.x * tileSize ) + imagesOffset + (imageSize + imageSeperation) * index,
                marginTop: (this.props.node.y * tileSize ) - imageSize/2,
                borderRadius: 50,
                transition: "opacity 0.4s ease, margin 0.4s ease",
                opacity: (this.props.hoverState) ? 1:0.7
            }
            let imageurl = "/images/" + url + ".png"
            let imageNode = <img style={imageStyle} src={imageurl} />
            imageDisplay.push(imageNode)
        })

        return (
            <div style={{position:"relative"}}> {imageDisplay} </div>
        )
    }
}

export { CircleImageList }