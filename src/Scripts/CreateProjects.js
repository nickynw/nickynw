import React from 'react';
import '../App.css';




function createProjects() {
    let projectss = {
        "unchained": nickynwsite(),
        "nickynwsite": nickynwsite()
    }
    return projectss
}

var nickynwsite = () => {
    var WIP = false
    var id = "nickynwsite"
    var date = "Recent"
    var title = "Personal Portfolio Website"
    var stack = [
        { image: "javascript", description: "Principal language, along with JSX for working with React." },
        { image: "react", description: "React, a Javascript Library, was used to build a component-based web app." },
        { image: "githubpages", description: "Github pages was used to deploy the web application for free." }
    ]
    var goals = [
        "Introduce myself to the React javascript framework",
        "Develop my skills in javascript",
        "Write-up/collate previous projects together in one location for easy reading and summaries."
    ]
    var content =
        (<div style={{ display: "flex", flexDirection: "column" }}>
            This project involved building a personal website to use as a portfolio for my work.
            It is focused more on my software development, covering work I have done in my free time since graduating with my Master's degree in September.
            I am not including any screenshots as the website project kind of speaks for itself here.
        </div>)
    var future = [
        "Develop a dynamic site where users can fill forms to contact myself, comment/like images, and serve information on projects from a database as opposed to from static files.",
        "Make the graph nodes move in an automatic, force-directed fashion rather than hard-coded coordinates."
    ]
    return {
        WIP: WIP, id: id, date: date, title: title, stack: stack, goals: goals, content: content, future: future
    }
}

var unchained = () => {
    var WIP = false
    var id = "unchained"
    var date = "03/2020"
    var title = "Unchained - An Independent Cafe Finding App"
    var stack = [
        { image: "javascript", description: "Principal language, along with JSX for working with React." },
        { image: "reactnative", description: "React Native, a Javascript Library, was used to build a mobile application for both iOS and Android." },
        { image: "firebase", description: "Google firebase was used as a NoSQL database to store the names of existing Cafe Chains online to check against dynamically." },
        { image: "googlemaps", description: "Google Maps API was used to search for nearby places, retrieve details, photos and distances." },
        { image: "googleads", description: "Google admob was used to monetize the app, as api requests cost a small amount of money." }
    ]
    var goals = [
        "Introduce myself to the React Native and develop my skills in javascript.",
        "Create a new App that fills a gap in the market / provides a service me and my friends actually wanted to use."
    ]
    var content =
        (<div style={{display:"in-line"}}>
            This project is available on github at <a href="https://github.com/nickynw/Unchained">https://github.com/nickynw/Unchained</a>, however apikeys for the firebase, google maps api and google ads will need to be replaced for it to work, alternatively there is dummy data that can be used. 
       
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Unchained is a mobile app I made as practise for working with React Native and working with external API's such as google maps. 
            This app aims to create an easy-to-read list of nearby cafes, with information on distance and open-times, with cafes that are part of chain groups (e.g. Costa, Starbucks) filtered out.
            Based on this list, user's can make an easy decision about which cafe they want to go to, if it's open long enough, too far away, and is not part of a chain. </p>

            <p>In hindsight, it may have been easier to learn React first, however I am happy with how the app turned out. 
            I learnt how to work with multiple nested asynchronous callbacks when making multiple HTTP requests to retrieve data from google maps.
            There was also an opportunity to think about user-testing, and what might go wrong, such as missing/denied permissions, lack of internet, and users straight up just mashing buttons.
            Furthermore, I had the opportunity to gather user-feedback to think about and develop the UI and as part of this I also learned how to use InkScape to produce custom-made SVG graphics.
            Lastly, I am happy I got to see at the very least, an amateur perspective on app development, from the initial concept, to publishing on the playstore, thanks to the Expo framework. </p>

           

        </div></div>)
    var future = [
        "In terms of future direction for this app, as of march, once the google ads are approved I will hopefully upload the app on the google play store so my friends can use it. This has been delayed due to the COVID-19 Pandemic (As I am unsure if the google data will reflect quarantine closings)",
        "Possibly develop an iOS version (At the moment I am having difficulties emulating without access to apple products, and I can't borrow anything due to quarantine)",
        "I may also look into applying the same concept for restaurant and shopping results too."
    ]
    return {
        WIP:WIP, id: id, date: date, title: title, stack: stack, goals: goals, content: content, future: future
    }
}

const projects = [
    nickynwsite(), unchained()
]

function projectIndex(id){
    for(var i = 0; i < projects.length; i++){
        if(projects[i].id==id){
            return i
        }
    }
}




export { createProjects , projects , projectIndex }