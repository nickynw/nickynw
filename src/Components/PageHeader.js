import React from 'react';
import '../App.css';
import {tileSize} from '../Scripts/Global'

function PageHeader(props){
    return (
        <div style={{
            position:"absolute",
             width:props.screenWidth, height: tileSize*3,
            justifyContent: "center", alignItems: "center", display: "flex",
            backgroundColor: "rgb(15,10,15,0.6)"
          }} >
            <p style={{ color: "white" }}>nickynw.github.io</p>
            
          </div>

    )
}

export {PageHeader}