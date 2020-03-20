import React from 'react';
import '../App.css';

function PageHeader(props){
    return (
        <div style={{

             width:props.screenWidth, height: 120,
            justifyContent: "center", alignItems: "center", display: "flex",
            backgroundColor: "rgb(15,10,15,0.6)"
          }} >
            <p style={{ color: "white" }}>nickynw.github.io</p>
          </div>
    )
}

export {PageHeader}