import React from 'react';
import '../App.css';

const projectButtonStyle = {
        width: 150,
        height: 30,
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        border: "2px solid #615b75",
        background: "#615b75",
        transition: "opacity 0.3s ease",
        margin: 5,
}

const divStyle = {
    marginTop: 120,
    width: "100%",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center"
}

class Missing extends React.Component {

    render() {

        return (
            <div style={divStyle}>

                <div className="img"
                    onClick={() => this.props.pushToURL("/")}
                    style={projectButtonStyle}>
                    <span style={{ color: "white" }}>Return to Chart</span>
                </div>
                <p style={{ color: "white" }}>{this.props.message}</p>
                
            </div>
        )

    }
}

export { Missing }
