import React from 'react';
import '../App.css';
import { screenHeight, screenWidth } from '../Scripts/Global'

class Missing extends React.Component {

    render() {

        return (
            <div className="mainContainer" style={{
                marginTop: 120,
                width: screenWidth,
                height: "100%",
                boxShadow: "5px 5px 10px 0 #060017, 5px 5px 5px #504080",
                display: "flex",
                justifyContent: "center",
            }}>
                <p style={{ color: "white" }}>This project does not exist, or is currently a Work In Progress. Try choosing a (different) project from the chart!</p>
            </div>
        )

    }
}

export { Missing }
