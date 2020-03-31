import React from 'react';
import '../App.css';

import { createProjects, projectIndex, projects } from '../Scripts/CreateProjects'
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
        var index = projectIndex(this.props.match.params.id)
        this.state = {
            project: projects[index],
            prevProject: (0) ? projects[index - 1].id : "",
            nextProject: (0) ? projects[index + 1].id : ""
        };
    }

    pushToURL = (url) => {
        this.setState({
            pushURL: url
        });
    }

    render() {
        /*If user typed in project themselves into url bar*/
        if (this.state.project == undefined || this.state.project.WIP==true) {
            return (
                <FadeTransition
                    history={this.props.history}
                    pushURL={this.state.pushURL}
                    content={<Missing pushToURL={this.pushToURL} 
                    message="This project does not exist, or is currently a Work In Progress. Please try choosing a (different) project from the chart!"/>} />)
        }
        /*Otherwise, all is well, show them the projects!*/
        return (
            <FadeTransition
                history={this.props.history}
                pushURL={this.state.pushURL}
                content={
                    <div style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 80
                    }}>


                        <ProjectsNavigator pushToURL={this.pushToURL} nextProject={this.state.nextProject} prevProject={this.state.prevProject} />

                        <p style={mainTitleStyle}>
                            {this.state.project.title} {`\t`}
                            <span style={{fontSize: 15}}>({this.state.project.date})</span>
                        </p>

                        <p style={titleStyle}>Goals</p>
                        <ul style={{ marginLeft: "auto", marginRight: "auto", width: "40%" }}>
                            {this.state.project.goals.map((goal) => <li>{goal}</li>)}
                        </ul>

                        <p style={titleStyle}>Stack</p>
                        <StackList stack={this.state.project.stack} />

                        <p style={titleStyle}>Description and Review</p>
                        <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>{this.state.project.content}</div>

                        <p style={titleStyle}>Future Developments</p>
                        <ul style={{ marginLeft: "auto", marginRight: "auto", width: "40%" }}>
                            {this.state.project.future.map((item) => <li>{item}</li>)}
                        </ul>

                    </div>} />)
    }
}

export { Project }