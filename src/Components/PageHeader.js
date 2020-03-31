import React from 'react';
import '../App.css';
import { tileSize } from '../Scripts/Global'


const profileStyle = {
  width: 80,
  height: 80,
}

const linkedinStyle = {
  width: 30,
  height: 30,
  margin: 8,
}

const githubStyle = {
  width: 30,
  height: 30,
  margin: 8,
}

const emailStyle = {
  width: 30,
  height: 20,
  margin: 5,
  opacity: 0.8
}


function PageHeader(props) {
  return (


    <div className="headerContainer" style={{
      width: "100%", height: tileSize * 3,
      justifyContent: "center", alignItems: "center", display: "flex",
    }} >

      <div style={{
        width: "20%",
        padding: 30,
      }}>
        <a href="https://nickynw.github.io/"><span className="img" style={{ color: "white", fontSize: 22 }}>nickynw.github.io</span> </a>
        <br /><span style={{ color: "grey", fontSize: 16 }}>personal project website</span>
      </div>

      <div style={{
        width: "37%",
      }}>
        <p style={{ color: "#b7bcc4", fontSize: 13 }}>
          Hello, my name is Nick Wilson. I am a (BSc) Neuroscience and (MSc) Computer Science graduate. This site presents my personal projects together in one place for you to explore.
         <span className="highlight"> <u>I am currently looking for a job as a junior software engineer in London (as of March 2020).</u> </span>
         Also, please feel free to contact me about purchasing any available art pieces, or for commissioning new projects (art or software). Cheers, Nick.
          </p>
      </div>



      <div style={{
        width: "37%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <img style={profileStyle} src={"/images/profile.png"} ></img>
        <a href="https://www.linkedin.com/in/nicknwilson/"><img className="img" style={linkedinStyle} src={"/images/linkedin.png"} ></img></a>
        <a href="https://github.com/nickynw"><img className="img" style={githubStyle} src={"/images/github.png"} ></img></a>
        <img style={emailStyle} src={"/images/email.png"} ></img>
        <p style={{ color: "white", fontSize: 13 }}><a href="mailto:nicknwilson@outlook.com">nicknwilson@outlook.com</a></p>
      </div>




    </div>

  )
}

export { PageHeader }