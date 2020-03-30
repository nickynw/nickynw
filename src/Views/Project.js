import React from 'react';
import '../App.css';

import { PageHeader } from '../Components/PageHeader'
import { Graph } from '../Components/Graph'
import { GridTransition } from "../Components/GridTransition"
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { screenHeight, screenWidth } from '../Scripts/Global'
import { createProjects, getTitle } from '../Scripts/CreateProjects'
import { VerticalThumbnails } from "../Components/VerticalThumbnails"
import { SectionArrow } from '../Components/SectionArrow'
import { Missing } from './Missing'

const mainPictureSize = 500;

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            projects: createProjects(),
            index: 0
        };
    }

    pushHome = () => {
        this.setState({
            pushURL: "/"
        });
    }

    shiftIndex = (newIndex) => {
        this.setState({ index: newIndex })
    }

    render() {
        /*Declare variables*/
        let imageurl = "/images/" + this.state.projects[this.state.id][this.state.index].image + ".png"
        var projectButtonStyle = {
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

        /*If user typed in project themselves into url bar*/
        if (this.state.projects[this.state.id] == undefined) {
            return (<Missing />)
        }




        return (
            <div className="mainContainer" style={{
                marginTop: 120,
                overflow: "hidden",
                overflowX: " hidden",
                width: screenWidth,
                height: "100%",
                boxShadow: "5px 5px 10px 0 #060017, 5px 5px 5px #504080",
            }}>


                <GridTransition history={this.props.history} pushURL={this.state.pushURL} />

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 60,
                    width: "100%",

                }}>
                  <p style={{color:"white"}}>  {getTitle(this.state.id)}</p>
                </div>

                <div style={{ height: mainPictureSize, width: "100%", display: "flex" }}>

                    <div style={{ marginLeft: "5%", float: "left", width: "10%", background: "rgb(0,0,100,0.2)" }}>
                        <VerticalThumbnails shiftIndex={this.shiftIndex} mainPictureSize={mainPictureSize} index={this.state.index} sections={this.state.projects[this.state.id]} />
                    </div>

                    <div style={{ marginLeft: "2%", float: "left", width: mainPictureSize, background: "rgb(0,100,0,0.2)", justifyContent: "center", display: "flex" }}>
                        <img style={{ width: "100%", height: "100%", borderRadius: 5 }} src={imageurl} ></img>
                    </div>

                    <div style={{
                        marginLeft: "1%",
                        display: "flex",
                        justifyContent: "center",
                        float: "left",
                        width: "38%",
                        borderWidth: 1,
                        borderRadius: 5,
                        background: "rgb(210,205,210,0.45"
                    }}>
                        <SectionArrow shiftIndex={this.shiftIndex} index={this.state.index} size={this.state.projects[this.state.id].length} direction={-1} />
                        <p style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>{this.state.projects[this.state.id][this.state.index].title}</p>
                        <SectionArrow shiftIndex={this.shiftIndex} index={this.state.index} size={this.state.projects[this.state.id].length} direction={1} />
                    </div>

                </div>

                <div style={{

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 80,
                    width: "100%",
                    background: "rgb(100,100,0,0.0)",
                    cursor: "pointer"
                }}>
                    <div className="img" style={projectButtonStyle}><span style={{ color: "white" }}>{"<"} Previous Project</span></div>
                    <div className="img" onClick={() => this.pushHome()} style={projectButtonStyle}><span style={{ color: "white" }}>Return to Chart</span></div>
                    <div className="img" style={projectButtonStyle}><span style={{ color: "white" }}>Next Project {">"}</span></div>

                </div>



            </div>)
    }
}

export { Project }