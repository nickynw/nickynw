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
import { ProjectsNavigator } from '../Components/ProjectsNavigator'
import { StackList } from '../Components/StackList'
import { FadeTransition } from "../Components/FadeTransition"



const titleStyle = {
    fontSize: 20,
    color: "#e6e5dc",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto"
}

const mainTitleStyle = {
    fontSize: 30,
    color: "#e6e5dc",
    marginLeft: "auto",
    marginRight: "auto"
}


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
        /*If user typed in project themselves into url bar*/
        if (this.state.projects[this.state.id] == undefined) {
            return (
                <FadeTransition
                    history={this.props.history}
                    pushURL={this.state.pushURL}
                    content={<Missing />} />)
        }
        /*Otherwise, all is well, show them the projects!*/
        return (
            <FadeTransition
                history={this.props.history}
                pushURL={this.state.pushURL}
                content={
                    <div style={{
                        width: screenWidth,
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 80
                    }}>


                        <ProjectsNavigator pushHome={this.pushHome} />

                        <p style={mainTitleStyle}>{this.state.projects[this.state.id].title}</p>

                        <p style={titleStyle}>Goals</p>
                        <ul style={{ marginLeft: "auto", marginRight: "auto", width: "40%" }}>
                            {this.state.projects[this.state.id].goals.map((goal) => <li>{goal}</li>)}
                        </ul>

                        <p style={titleStyle}>Stack</p>
                        <StackList stack={this.state.projects[this.state.id].stack} />

                        <p style={titleStyle}>Description and Review</p>
                        <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>{this.state.projects[this.state.id].content}</div>

                        <p style={titleStyle}>Future Developments</p>
                        <ul style={{ marginLeft: "auto", marginRight: "auto", width: "40%" }}>
                            {this.state.projects[this.state.id].future.map((item) => <li>{item}</li>)}
                        </ul>

                    </div>} />)
    }
}

export { Project }