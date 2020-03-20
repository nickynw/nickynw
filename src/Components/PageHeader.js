import React from 'react';
import '../App.css';

function PageHeader(){
    return (
        <div style={{
            width: "100%", height: 120,
            justifyContent: "center", alignItems: "center", display: "flex",
            backgroundColor: "rgb(5,5,5,0.4)"
          }} >
            <p style={{ color: "white" }}>nickynw.github.io</p>
          </div>
    )
}

export {PageHeader}