import React from 'react';
import '../App.css';

const imageurl = (url) => "/images/" + url + ".png"

const figureStyle = {
    margin: 20, 
    marginLeft: "auto", 
    marginRight: "auto", 
    borderRadius: 10, 
    padding: 10,
    opacity: 0.8, 
    maxWidth: 600, 
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    background:"white"
}

const figureImage = {
    maxWidth: 600, 
    maxHeight: 600, 
    padding: 10
}

var nickynwsite = () => {
    var WIP = false
    var id = "nickynwsite"
    var date = "Recent"
    var title = "Personal Portfolio Website"
    var stack = [
        { image: "javascript", description: "Principal language, along with JSX for working with React." },
        { image: "react", description: "React, a Javascript Library, was used to build a component-based web app." },
        { image: "githubpages", description: "Github pages was is currently being used to deploy the site for free." }
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

            <p>I actually started working on this site after already using React Native to make an app (see previous project).
            As I had a positive experience with React Native, I thought I'd also make my personal website using React.js, which would also have the added benefit of consolidating some of the shared concepts that I covered using these frameworks.
            I've learnt a lot building this site. It made me really think about how to organise and reuse my components, and how children components can manipulate the states of parents in a 'React' way (e.g. setting the url via the graph nodes).
                There has also been lots of opportunity to learn css tricks to make the UI nicer to look at and more interactive.
            </p>

            <p>
            The site has gone through a couple iterations in terms of UI. 
            For my first attempt I actually wanted to do a forced-direction graph, and spent a while working on an algorithm that works.
            In the end however I realised a flow-chart looked better. Alas. For the time being I've decided to take out the Art and Design section,
            just to keep the site a bit less cluttered. If you are really interested, recently I've been working on making repeatable pattern
            designs for wallpapers and fabrics. Some of them can be found on <a style={{color:"black"}} href="https://www.redbubble.com/people/awwpaper/">redbubble.com/people/awwpaper. </a> 
            If this is the first project you've looked at so far on my website, feel free to keep exploring. In my opinion, my other projects are more exciting.
            </p>

            <div style={figureStyle}>
            <img alt=""style={figureImage} src={imageurl("oldstylepreview")}></img>
            Figure 1: Screenshot taken of the first version of the website, which used an algorithm to do a forced-direction graph for project navigation.
            </div>


        

        </div>)
    var future = [
        "Add the Art and Design section - Subject to feedback",
        "I haven't looked into accessibility for this website yet, in terms of colour, layout etc.",
        "Develop a dynamic site where users can fill forms to contact myself, comment/like images, and serve information on projects from a database as opposed to from static files.",
        "Make the graph nodes in the flow chart move in an automatic, force-directed fashion rather than hard-coded coordinates.",
        "Finish Misc Java Projects (this is mainly because they're all graphic Java programs I'm thinking of taking a screen video)"
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
        { image: "expo", hideInChart:true, description: "The Expo framework for React Native was used as a testing suite and to publish the app." },
        { image: "firebase", description: "Google Firebase was used as a NoSQL database to store the names of existing Cafe Chains online to check against." },
        { image: "googlemaps", description: "Google Maps API was used to search for nearby places, retrieve details, photos and distances." },
        { image: "googleadmob", description: "Google AdMob was used to monetize the app, as api requests cost a small amount of money." }
    ]
    var goals = [
        "Introduce myself to the React Native and develop my skills in javascript.",
        "Create a new App for both iOS and Android that fills a gap in the market / provides a service me and my friends actually wanted to use. (Easily searching for independent cafes nearby)"
    ]
    var content =
        (<div style={{ display: "flex", flexDirection: "column" }}>
            <p>This project is available on github at <a href="https://github.com/nickynw/Unchained">https://github.com/nickynw/Unchained</a>, however apikeys for the firebase, google maps api and google ads will need to be replaced for it to work, alternatively there is dummy data that can be used.</p>

                <p>Unchained is a mobile app I made as practise for working with React Native and working with external API's such as google maps.
                This app aims to create an easy-to-read list of nearby cafes, with information on distance and open-times, with cafes that are part of chain groups (e.g. Costa, Starbucks) filtered out.
                   Based on this list, user's can make an easy decision about which cafe they want to go to, if it's open long enough, too far away, and is not part of a chain. </p>

               <div style={figureStyle}>
                    <img alt=""style={figureImage} src={imageurl("unchainedoverview")}></img>
                    Figure 1: Screenshots of the working app taken from my android phone, on the left is the initial screen, on the right is taken after a results search performed in Camden, London.
                 </div>

                <p>In hindsight, it may have been easier to learn React first, however I am happy with how the app turned out.
                I learnt how to work with multiple nested asynchronous callbacks when making multiple HTTP requests to retrieve data from google maps.
                There was also an opportunity to think about user-testing, and what might go wrong, such as missing/denied permissions, lack of internet, and users straight up just mashing buttons.
                I also got to implement the use of a NoSQL database with Firebase, however this was only for very limited use, in updating and accessing a list of cafe chains.
                Furthermore, I had the opportunity to gather user-feedback, which allowed me develop the UI. As part of this I also learned how to use InkScape to produce custom-made SVG graphics.
            Lastly, I am happy I got to see at the very least, an amateur perspective on app development, from the initial concept, to publishing on the playstore, thanks to the Expo framework. </p>

            </div>)
    var future = [
        "In terms of future direction for this app, as of march, once the google ads are approved I will hopefully upload the app on the google play store so my friends can use it. This has been delayed due to the COVID-19 Pandemic (As I am unsure if the google data will reflect quarantine closings)",
        "Possibly develop an iOS version (At the moment I am having difficulties emulating without access to apple products, and I can't borrow anything due to quarantine)",
        "I may also look into applying the same concept for restaurant and shopping results too.",
        "I also want to introduce searching for other areas, however making these requests costs a bit of money."
    ]
    return {
        WIP: WIP, id: id, date: date, title: title, stack: stack, goals: goals, content: content, future: future
    }
}

var qbot = () => {
    var WIP = false
    var id = "qbot"
    var date = "01/2020"
    var title = "Qbot: An Online Multiple-choice Question Generator"
    var stack = [
        { image: "python", description: "Python was chosen for the backend to provide an opportunity to develop my skills in this language." },
        { image: "webtech", hideInChart:true, description: "HTML, CSS and Javascript were the standard web technology used to provide the front-end web UI." },
        { image: "heroku", hideInChart:true, description: "Heroku was used to host both versions of the site, the databases, and static files." },
        { description: "Version 1 (05/2017)" },
        { image: "django", description: "Django was used as a python web framework, with an admin system for updating the database." },
        { image: "postgres", description: "A Postgresql Database was configured as the backend database using Django." },
        { description: "Version 2 (01/2020)" },
        { image: "flask", description: "Flask was used as a more lightweight python web framework to work with a graph database in the backend." },
        { image: "neo4j", description: "Neo4J provided a DBMS for the graph database and provided a driver for connecting to the database using Python." }
    ]
    var goals = [
        "Develop my skills in Python, including by finding uses for higher-order functions and by using libraries and drivers.",
        "Create a live website with dynamic pages connected to a back-end database.",
        "Learn how to implement Graph databases (and learn CYPHER) as well as a relational Database (with PostgreSQL) and compare them.",
        "Produce a website that provides unlimited, randomised and difficult to answer Multiple Choice Questions, using the relationships between data points with a focus on medicine."
    ]
    var content =
        (<div style={{ display: "flex", flexDirection: "column" }}>
            This project will soon be made available on github. To summarise the project, the MCQ generator is a web application for use primarily by medical students.
            Using the relationships between data in a back-end database, it forms questions which are difficult to answer, as fake alternative answers are drawn from nearby, related nodes.
            Question and answer combinations are randomised, and answers can be grouped together to form another layer of complexity. (See previews at bottom of page)

            Both websites are hosted for free online via Heroku, however after visiting it will take ~1 minute to load as the web worker sleeps after inactivity.

            <ul>
                <li> Version 1 (05/2017): <a style={{ color: "#d1d0c9" }} href="http://exambot5000.herokuapp.com/"> http://exambot5000.herokuapp.com/ </a>(NOTE: Will take ~1 minute to initially load)</li>
                <li> Version 2 (01/2020): <a style={{ color: "#d1d0c9" }} href="http://qbot5000.herokuapp.com/"> http://qbot5000.herokuapp.com/ </a>(NOTE: Will take ~1 minute to initially load)</li>
            </ul>

            <p>If you want to be spared the time to visit these sites, which is understandable, preview images are shown below. </p>

            <p>The original concept for this project came from when I was preparing materials for my job during third year neuroscience as a 'PASS Leader'.
            This role was in essence, to help reinforce first year's learning at university by tutoring them.
            I have always felt I've had a knack for preparing MCQ's, and thought that it would be cool if I could find a way to programmatically produce randomised questions in various topics to print and give out to my students.
            The first version of the website was built before I had any formal introduction to coding, and so I had to self-teach python, html, css and javascript and learn how Django and PostgreSQL worked to create a prototype website (Version 1, Exambot).
            </p>

            <p>After completing my third year of Neuroscience and then my master's in Computer Science, I decide to revisit this idea in January 2020.
            However this time I wanted to try with a graph database, as modelling questions based on relationships with nodes, rather than with tables, better reflected my idea of how MCQ's should be generated.
            I also took the opportunity to try Flask this time, so I could compare the two python frameworks for the same task to see which I felt more comfortable using.
            After producing the second version (Version 2, Qbot), I felt that I had a much better understanding of Python.
            I had used a library to convert excel spreadsheets pythonically into CYPHER scripts to add nodes to the graph database. This experience which later proved useful when doing technical tests for some potential jobs.
            This also meant I had to learn CYPHER, which is similar to SQL, where I experimented with preparing the scripts I needed for gathering data to form MCQ questions.
            One problem is that because I've spent time working on graph databases but these are far less common than relational databases.
            So in the future I may need to work more in PostgreSQL or other SQL DBMS to consolidate my understanding of RDBMS.
            </p>

            <br></br>


                <div style={figureStyle}>
                    <img alt=""style={figureImage} src={imageurl("exambotpreview")}></img>
                    Figure 1: Preview of Exambot: Left is index/home view, Right is example of MCQ question generated. The user has got one answer correct and one answer wrong.
                 </div>

                 <div style={figureStyle}>
                    <img alt=""style={figureImage} src={imageurl("qbotpreview")}></img>
                    Figure 2: Preview of Qbot: Left is index/home view, Right is example of MCQ question generated. The user got the question correct.
                 This appearance change in contrast to exambot reflects my intention to make this a potential mobile app in the future.
                 </div>

         
         </div>)
    var future = [
        "Develop a mobile app version, possibly using React Native",
        "Add a lot more data to the graph database to work with and create questions from, in multiple categories.",
        "Implement a user system with progress/score tracking.",
        "Work on the language used to make it seems more natural/have more variants.",
        "Extend questions to be beyond MCQ, or alternatively, explore new ways to produce questions from the same data. (E.g. shared relationships)"

    ]
    return {
        WIP: WIP, id: id, date: date, title: title, stack: stack, goals: goals, content: content, future: future
    }
}

var mscparkinsons = () => {
    var WIP = false
    var id = "mscparkinsons"
    var date = "09/2019"
    var title = "(MSc) Learning about Parkinson's through Haptic VR"
    var stack = [
        { image: "csharp", description: "C# was the principal language used for scripts in Unity." },
        { image: "unity", description: "Specifically Unity3D, which has native VR support." },
        { image: "oculus", description: "Oculus GO was the device provided to users for my VR experience." },
        { image: "blender", hideInChart:true, description: "Blender was used to produce custom-made 3D models and animate them." }
    ]
    var goals = [
        "Learn how to code using C#, and how to use Unity to produce 3D/VR experiences as well as produce my own 3D models, textures and animations.",
        "Investigate how VR and haptic technology could serve as an effective medium for people to share experiences of health conditions",
        "Identify potential methods available for simulating physical symptoms of Parkinson's and implement some of them into a VR experience using passive haptic devices."
    ]
    var content =
        ( <div style={{ display: "flex", flexDirection: "column" }}>
            For my Master's Thesis project, I developed an educational Virtual Reality Experience with integrated haptics (physical feedback devices) that serve to simulate physical symptoms of Parkinson's and compare user experience for this experience with a non-haptic control.
            The full title was "Does the integration of Haptics into Virtual Reality enhance shared experiences of Parkinson’s?"
            For the abstract, please see the bottom of this project page.

            <p>
                As a summary, I created a VR experience for Oculus Go using Unity lasting roughly 10 minutes.
                In this experience, users were guided along a track, where they visit different cells in the brain.
                Narration, combined with graphic effects and interactive elements, are used to point to and describe how healthy brain cells are affected by Parkinson's.
                Symptoms of Parkinson's are also described to participants, who are also provided with physical devices to simulate physical symptoms that affect mobility and elicit tremors.
                Half the partipants were not given any of these physical devices. I then used surveys and questions to see whether using these devices lead to noticeable differences in self-reported empathy, and short-term memory of information regarding Parkinson's.
            </p>

            The project had several stages which are summarised in a list below:
            
            <li>Preparing a research proposal and experimental method/setup for gathering and evaluating user-feedback.</li>
            <li>Developing the concept, designing and planning the virtual scene and content.</li>
            <li>Graphic and audio design to build an immersive VR experience and base the designs on existing Neuroscience Research. (see Figure 1)</li>

            <div style={figureStyle}>
            <img alt=""style={figureImage} src={imageurl("graphicspreview")}></img>
            Figure 1: A) A microscopic photograph of microglia brain cells adapted from <a href="https://www.neuroscienceassociates.com/neurosafety-testing/evaluation-of-perturbationsinflammation/">NeuroScience Associates online material.</a> B) A 3D model based of Microglia made in Blender as seen in VR experience.
            </div>
                    
            <li>Software development, implementing animations, interactive elements, phases/checkpoints, narration, physics, obstacles for a 3D space. (See Figures 2, 3)</li>

            <div style={figureStyle}>
            <img alt=""style={figureImage} src={imageurl("algorithmpreview")}></img>
            Figure 2: An example of a problem faced during development: producing an algorithm to recognise directed paths across highly branched 3D models. Blue lines depict successfully identified paths.
            </div>

            <div style={figureStyle}>
            <img alt=""style={figureImage} src={imageurl("vrpreview")}></img>
            Figure 3: Screenshots taken during the completed VR experience showing typical gameplay an interactive elements.
            A) Typical narrated scene B) Player aiming at targets using Go controller C) Circling features in the environment using the controller.
            </div>

            <li>Organising meetings through Parkinson's UK with people with Parkinson's to discuss simulation of their experiences in VR, and creating physical haptic devices to reflect those experiences.</li>
            <li>Preparing the hardware (Oculus Go), and preparing the physical setup for testing the participants. (see Figure 4)</li>
            <div style={figureStyle}>
            <img alt=""style={figureImage} src={imageurl("setuppreview")}></img>
            Figure 4: It's me! I'm geared up to start the experience in a quiet space at the University of Bristol, wearing some of the haptic devices used in this experiment.
            </div>

            <li>Collection results, statistical analysis, and evaluation/write-up. (see Figure 5)</li>

            <div style={figureStyle}>
            <img alt=""style={figureImage} src={imageurl("resultspreview")}></img>
            Figure 5: One of the things measured following the experiment was participant's ability to remember symptoms and facts relating to Parkinson's. Overall there was no statistical difference between the group with haptics and the group without.
            </div>

                <p>The Full Abstract:</p>

                There has recently been a resurgence of interest in the field of Virtual Reality (VR), alongside advancements in haptic technology which convey physical sensations from the virtual environment. 
                It is currently unclear whether the integration of haptics in VR supports empathetic perspective-taking when sharing experiences of health conditions in VR, or whether it promotes learning when utilised as part of immersive `Serious Games' in education. 
                The current project ran a workshop with Parkinson's UK to discuss how the experiences of people with Parkinson's could be simulated in VR, and particularly how their physical symptoms might be simulated using haptic devices. 
                A novel educational Virtual Reality experience (VRE) was developed which reveals some of the biological changes that occur in a Parkinson's-affected brain. Based on discussion in the workshop, the VRE also implemented a first-person narration of some of the thoughts and feelings of people with Parkinson's, alongside passive haptic devices aiming to simulate a number of physical symptoms with low fidelity. 
                The VRE was deployed to members of the public as part of a pilot study, under an integrated-haptics or non-haptic (control) condition. Under both conditions, participants reported feeling more empathetic towards people with Parkinson's following their experience and generally agreed the VRE could be useful for teaching empathy and for learning. 
                The study found that there was no significant difference in subjective measures of engagement, presence, and empathetic perspective-taking, or in information recall tests between the two conditions. 
                However, qualitative discussions with participants in the haptic condition revealed that people felt their perspective-taking was indeed supported by the passive simulating haptics, suggesting that differences in empathy may not be reflected in the survey used in the current study, or there may be a ceiling effect for empathy when utilising VR for sharing experiences of health.
            
        </div>)
    var future = [
        "I am not currently working on this project anymore, however potential future improvements and routes for research are listed in the thesis.",
        "Implement a number of changes/fix a small number of errors based on user-feedback following the experiment.",
        "Improved accessibility, as the experience is currently only available on Oculus Go.",
        "Higher fidelity simulation, due to limited use of haptics and the time constraints, there may be a misrepresentation of people's experiences in the simulation.",
        "There was a focus on a few physical symptoms, however situations rooted in anxiety and social interactions could be represented in the future using VR."

    ]
    return {
        WIP: WIP, id: id, date: date, title: title, stack: stack, goals: goals, content: content, future: future
    }
}

var miscjava = () => {
    var WIP = false
    var id = "miscjava"
    var date = "04/2019"
    var title = "Misc Java/JavaFX Projects"
    var stack = [
        { image: "java", description: "Java was used to introduce us to object orientated programming and unit testing." },
        { image: "javafx", description: "Allows GUI with (current version) Java without using any external libraries." },
    ]
    var goals = [
        "Produce various Java projects to consolidating learning of the language"
    ]
    var content =
    ( <div style={{ display: "flex", flexDirection: "column" }}>
            For our final project in my Computer Science course for Java we were tasked with building a java program with a GUI.
            The style is geared towards an 'arcade' feel. I chose to use JavaFX and work in 3D so that I could apply some mathematical concepts I wanted to work with at the time. 
            
            <br/><br/>The game is called U.F.O.O.P (Unidentified Flying Object Orientated Programming).
            I've prepared a short video (with no audio) showcasing the four different game modes you can play at various difficulties in a random order. The aim is to fire your laser beam to destroy the sphere to collect points, whilst avoiding generated 3D obstacles.
            <div style={{padding: 50}}><iframe width="560" height="315" src="https://www.youtube.com/embed/8YVE0CmONRw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            Other projects waiting to be added:

            <ul>Group Software Engineering Project in Java: Building an educational Game </ul>
            <ul>DatabaseBot: Simple database management application (terminal + Gui)</ul>



        </div>)
    var future = [
        "Continue to develop new applications in Java outside of the course. So far I have delved into Java only for minor projects.",
        "Utilise Java alongside API's / libraries like spring or swagger."

    ]
    return {
        WIP: WIP, id: id, date: date, title: title, stack: stack, goals: goals, content: content, future: future
    }
}

const projects = [
    nickynwsite(), unchained(), qbot(), mscparkinsons(), miscjava()
]

function projectIndex(id) {
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === id) {
            return i
        }
    }
}




export { projects, projectIndex }