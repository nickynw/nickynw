
import React, { View } from 'react';
import image from '../python.png'

function commonStyle(size, props, color){
    return {
        width: size,
        height: size,
        left: props.node.x - size/2,
        top: props.node.y - size/2,
        textAlign: "center",
        border: "2px solid #bdc3de",
        backgroundColor: color
    }
}



function NodeCircle(props) {
    var Node = <p></p>
    if (props.node.hierarchy == 0) {
        const style = commonStyle(250, props, "#738fff");
        Node = (
            <div style={style} className="dot">
            <p style={{ color: 'white', marginTop: 5 }}>{props.node.id}</p>
            <p style={{marginTop: -10}}>{props.node.info}</p>
            </div>
        )
    }
    if (props.node.hierarchy == 1) {
        const style = commonStyle(120, props, "#292469");
        Node = (
            <div style={style} className="dot">
            <p style={{ color: 'white', marginTop: 5 }}>{props.node.id}</p>
            <p style={{marginTop: -10}}>{props.node.info}</p>
            </div>
        )
    }
    if (props.node.hierarchy == 2) {
        const style = commonStyle(120, props, "#a1aad1");
        Node = (
            <div style={style} className="dot">
            <p style={{ color: 'white', marginTop: 5 }}>{props.node.id}</p>
            <p style={{marginTop: -10}}>{props.node.info}</p>
            </div>
        )
    }
    if (props.node.hierarchy == 2.5) {
        const style = commonStyle(70, props, "#898991");
        Node = (
            <div style={style} className="dot">
            <p style={{ color: 'white', marginTop: 5 }}>{props.node.id}</p>
            <p style={{marginTop: -10}}>{props.node.info}</p>
            </div>
        )
    }
    if (props.node.hierarchy == 3) {
        const style = {
                width:"50px",
                left: props.node.x - 50/2,
                top: props.node.y -50/2,
                position: "absolute",
                borderRadius: 25,
                maxHeight: "50px",
                maxWidth: "50px"
            }
        
        Node = (
            <img src = {image} style={style}></img>
        )
    }


    return (
      <div>
        {Node}
      </div>
    )
  }



  /*
  function mainCircle(props){
    const style = {
        backgroundColor: "",
    }
    return (
    <div style={[style, commonStyle(200, 200)]} className="dot">
    <p style={{ color: 'white', marginTop: 5 }}>{props.node.id}</p>
    </div>
    )
}

function categoryCircle(props){
    const style = {
        backgroundColor: "#8291d1",
        width: 100,
        height: 100,
    }

}

function projectCircle(props){
    const style = {
        backgroundColor: "#8291d1",
        width: 90,
        height: 90,
    }
    return (
    <div style={[style, commonStyle]} className="dot">
    <p style={{ color: 'white', marginTop: 5 }}>{props.node.id}</p>
    </div>
    )*/



  //<img src={image} width="100" height="100"></img>
  export {NodeCircle}