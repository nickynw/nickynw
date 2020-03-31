import React from 'react';
import '../App.css';

function createProjects() {
    let projects = {
        "unchained": nickynwsite(),
        "nickynwsite": nickynwsite()
    }
    return projects
}

var nickynwsite = () => {
    var title = "Personal Portfolio Website"
    var stack = [
        { image: "javascript", description: "Principal language, along with JSX for working with React." },
        { image: "react", description: "React, a Javascript Library, was used to build a component-based web app." },
        { image: "react", description: "Github pages was used to deploy the web application for free." }
    ]
    var goals = [
        "Introduce myself to the React javascript framework",
        "Develop my skills in javascript",
        "Write-up/collate previous projects together in one location for easy reading and summaries."
    ]
    var content =
        (<div style={{ display: "flex", flexDirection: "column" }}>
            "This project involved building a personal website to use as a portfolio for my work.
            It is focused more on my software development, covering work I have done in my free time since graduating with my Master's degree in September.
            I am not including any screenshots as the website project kind of speaks for itself here."
        </div>)
    var future = [
        "Develop a dynamic site where users can fill forms to contact myself, comment/like images, and serve information on projects from a database as opposed to from static files."
    ]
    return {
        title: title, stack: stack, goals: goals, content: content, future: future
    }
}

var unchained = () => {
    return (
        <img></img>
    )
}



export { createProjects }