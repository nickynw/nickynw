import React from 'react';
import '../App.css';


function projectButtonStyle(url) {
    return {
        width: 150,
        height: 30,
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        border: "2px solid #615b75",
        background: (url) ? "#615b75" : "black",
        transition: "opacity 0.3s ease",
        margin: 5,
    }
}


class ProjectsNavigator extends React.Component {

    changeProject = (url) => {
        if (url) {
            this.props.pushToURL(url)
        }
    }


    render() {
        return (
            <div style={{

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 80,
                width: "100%",
                background: "rgb(100,100,0,0.0)",
                cursor: "pointer"
            }}>
                <div className="img"
                    onClick={() => this.changeProject(this.props.prevProject)}
                    style={projectButtonStyle(this.props.prevProject)}>
                    <span style={{ color: "white" }}>{"<"} Previous Project</span>
                </div>

                <div className="img"
                    onClick={() => this.props.pushToURL("/")}
                    style={projectButtonStyle("/")}>
                    <span style={{ color: "white" }}>Return to Chart</span>
                </div>

                <div className="img"
                    onClick={() => this.changeProject(this.props.nextProject)}
                    style={projectButtonStyle(this.props.nextProject)}>
                    <span style={{ color: "white" }}>Next Project {">"}</span>
                </div>

            </div>
        )
    }
}

export { ProjectsNavigator }