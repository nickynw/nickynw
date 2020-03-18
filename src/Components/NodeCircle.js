
import React, { View } from 'react';
import '../App.css';



function nodeStyleTemplate(size, props, color) {
    return {
        width: size,
        height: size,
        left: props.node.x - size / 2,
        top: props.node.y - size / 2,
        border: "2px solid #bdc3de",
        backgroundColor: color,
        boxShadow: "3px 3px rgb(5,5,25,0.6)"
    }
}

function textStyleTemplate(size, color){
    return {
         fontSize: size,
         color: color,
         marginTop: 25,
         marginLeft: 10,
         marginRight: 10,
         textAlign: "center",
         display: "flex",
         justifyContent: "center" ,
         fontFamily: "verdana   "
    }
}

const greetingStyle = {
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 12,
    textAlign: "center",
    fontFamily: "verdana   "
}

function selectStyle(props){
    var nodeStyle = {}
    var textStyle = {}
    if (props.node.hierarchy == 0) {
        nodeStyle = nodeStyleTemplate(250, props, "#6c649c");
        textStyle = textStyleTemplate(20, "black")
    }
    //CATEGORY NODE
    if (props.node.hierarchy == 1) {
        nodeStyle = nodeStyleTemplate(120, props, "#292469");
        textStyle = textStyleTemplate(18,"#829599")
    }
    //MAJOR PROJECT NODE
    if (props.node.hierarchy == 2) {
        nodeStyle = nodeStyleTemplate(130, props, "#4c4769");
        textStyle = textStyleTemplate(13, "#c2c1b4")
    }
    //MINOR PROJECT NODE
    if (props.node.hierarchy == 2.5) {
        nodeStyle = nodeStyleTemplate(70, props, "#898991");
        textStyle = textStyleTemplate(12, "#242829")
    }
    return [nodeStyle, textStyle]
}



function NodeCircle(props) {
    //ORDINARY NODE
    var [nodeStyle, textStyle] = selectStyle(props)
    var Node = (
        <div style={nodeStyle} className="dot">
           <p style={textStyle}>
                {props.node.info} </p>
           
        </div>
    )
    //IMAGE NODE
    if (props.node.hierarchy == 3) {
        const style = {
            width: "50px",
            left: props.node.x - 50 / 2,
            top: props.node.y - 50 / 2,
            position: "absolute",
            borderRadius: 25,
            maxHeight: "50px",
            maxWidth: "50px",
            boxShadow: "3px 3px rgb(5,5,25,0.6)"
        }
        let imageurl = "/images/" + props.node.info + ".png"
        Node = <img src={imageurl} style={style}></img>
    }
    if (props.node.hierarchy == 0){
    //ROOT NODE 
        Node = (
            <div style={nodeStyle} className="dot">
            <p style={textStyle}><b><br/>{props.node.info}</b></p>
            <span  ><p style={greetingStyle}>
            Hello, and welcome to my website! <br/>
                Here are my latest projects together in one place for you to explore. 
                <span className="highlight"><u>I am currently looking for a job as a junior software engineer.</u> </span> You can contact me via <a href="https://www.linkedin.com/in/nicknwilson/">LinkedIn</a>, <a href="https://github.com/nickynw">Github</a> or email (nicknwilson@outlook.com).
                <br/><br/>Cheers, Nick.</p></span>
            
            </div>
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
export { NodeCircle }