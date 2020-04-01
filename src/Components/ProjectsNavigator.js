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
        background: (url) ? "#615b75" : "#3b3a36",
        transition: "opacity 0.3s ease",
        margin: 5,
        cursor: (!url) && "not-allowed"
    }
}


class ProjectsNavigator extends React.Component {

    changeProject = (url, remount) => {
        if (url) {
            this.props.pushToURL(url, remount)
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
          
            }}>
                <div className="img"
                    onClick={() => this.changeProject(this.props.prevProject, true)}
                    style={projectButtonStyle(this.props.prevProject)}>
                    <span style={{ color: "white" }}>{"<"} Previous Project</span>
                </div>

                <div className="img"
                    onClick={() => this.props.pushToURL("/", false)}
                    style={projectButtonStyle("/")}>
                    <span style={{ color: "white" }}>Return to Chart</span>
                </div>

                <div className="img"
                    onClick={() => this.changeProject(this.props.nextProject, true)}
                    style={projectButtonStyle(this.props.nextProject)}>
                    <span style={{ color: "white" }}>Next Project {">"}</span>
                </div>

            </div>
        )
    }
}

export { ProjectsNavigator }