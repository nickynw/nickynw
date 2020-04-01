import React from 'react';
import '../App.css';

const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: 5,
}

/*This will be used or adapted for use in art and design section*/
class VerticalThumbnails extends React.Component {

    clickEvent = (index) => {
        this.props.shiftIndex(index)
    }

    render() {
        let thumbnailSize = this.props.mainPictureSize / this.props.sections.length - 13
        var thumbnails = []
        this.props.sections.forEach((section, index) => {
            let imageurl = "/images/" + section.image + ".png"
            thumbnails.push(

                <div onClick={() => this.clickEvent(index)}
                    className="container"
                    style={{
                        margin: 2,
                        position: "relative",
                        width: thumbnailSize,
                        height: thumbnailSize,
                        maxWidth: 133,
                        maxHeight: 133,
                        padding: 5,
                        border: (this.props.index == index) ? "2px solid grey" : "0px solid grey",
                        borderRadius: 5,
                        background: (this.props.index == index) ? "rgb(100,100,100,0.8)" : "rgb(0,100,100,0.4)",
                        transition: "background 0.3s ease"
                    }}>

                    <img style={imageStyle(index, this.props.index, thumbnailSize)} src={imageurl} />

                    <div className="overlay"
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            left: 0,
                            top: 0,
                            borderRadius: 5,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                        {this.props.sections[index].title}

                    </div>
                </div>


            )
        })


        return (

            <div style={{ width: 100, height: 400 }}>{thumbnails}</div>

        )
    }
}

export { VerticalThumbnails }