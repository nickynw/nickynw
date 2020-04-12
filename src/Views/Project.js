import React from 'react';
import '../App.css';
import { projectIndex, projects } from '../Scripts/CreateProjects'
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

const divStyle = {
    width: "100%",
    minWidth: document.documentElement.clientWidth-25,
    display: "flex",
    flexDirection: "column",
    marginBottom: 80
}

const bulletSectionStyle = {
    marginLeft: "auto", 
    marginRight: "auto", 
    width: "60%" 
}

const descriptionStyle = {
    marginLeft: "auto", 
    marginRight: "auto", 
    width: "70%"
}

class Project extends React.Component {
    constructor(props) {
        super(props);
        var index = projectIndex(this.props.match.params.id)
        this.state = {
            project: projects[index],
            nextProject: (index > 0) ? projects[index - 1].id : "",
            prevProject: (index < projects.length - 1) ? projects[index + 1].id : "",
            pushURL: "",
            fadeKey: ""
        };
    }

    pushToURL = (url) => {
        console.log(url)
        this.setState({pushURL: url});
    }

    changeProject = (url) => {
        var index = projectIndex(url)
        this.setState({
            project: projects[index],
            nextProject: (index > 0) ? projects[index - 1].id : "",
            prevProject: (index < projects.length - 1) ? projects[index + 1].id : "",
        })
    }

    render() {
        /*If user typed in project themselves into url bar*/
        if (this.state.project === undefined || this.state.project.WIP === true) {
            return (
                <FadeTransition
                    history={this.props.history}
                    pushURL={this.state.pushURL}
                    content={<Missing
                        pushToURL={this.pushToURL}
                        message="This project does not exist, or is currently a Work In Progress. Please try choosing a (different) project from the chart!"
                    />} />)
        }
        /*Otherwise, all is well, show them the projects!*/
        return (
            <FadeTransition
                history={this.props.history}
                pushURL={this.state.pushURL}
                changeProject={this.changeProject}
                url={this.props.location.pathname}
                content={
                    <div style={divStyle}>

                        <ProjectsNavigator pushToURL={this.pushToURL} nextProject={this.state.nextProject} prevProject={this.state.prevProject} />
                             
                        <p style={mainTitleStyle}>
                            {this.state.project.title} {`\t`}
                            <span style={{fontSize: 15}}>({this.state.project.date})</span>
                        </p>

                        <p style={titleStyle}>Goals</p>
                        <ul style={bulletSectionStyle}>
                            {this.state.project.goals.map((goal) => <li>{goal}</li>)}
                        </ul>

                        <p style={titleStyle}>Stack</p>
                        <StackList stack={this.state.project.stack} />

                        <p style={titleStyle}>Description and Review</p>
                        <div style={descriptionStyle}>{this.state.project.content}</div>

                        <p style={titleStyle}>Future Developments</p>
                        <ul style={bulletSectionStyle}>
                            {this.state.project.future.map((item) => <li>{item}</li>)}
                        </ul>

                        <ProjectsNavigator pushToURL={this.pushToURL} nextProject={this.state.nextProject} prevProject={this.state.prevProject} />

                    </div>} />)
    }
}

export { Project }