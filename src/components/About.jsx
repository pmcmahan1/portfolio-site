import { FaHtml5, FaCss3Alt, FaReact, FaGitSquare, FaNodeJs} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { Tooltip, IconButton } from "@mui/material";


export default function About() {

    return (
        <div className="about">
            <div className="about-head-text">About Me</div>
            <div className="about-body-text">Hello again! My name is Patrick McMahan and ever since I was a child I have enjoyed
                creating things on the internet. My interest in coding started back when I was a child
                coding and creating levels for the popular video game Roblox in a language called Lua.
                Since then, I pursued a Bachelors degree in History with a minor in Business Administration
                at the University of South Carolina and enjoyed computer-related activities as a hobby.
            </div>
            <div className="about-body-text">Fast forward to today, I have decided to take my interest in web development and attempt
                to turn it into a full-time passion. I started my journey though the Odin Project, and following
                that with free learning resources such as Scrimba and freeCodeCamp. Learning HTML, CSS, and Javascript
                lead me to discover React, a powerful Javascript library that I instantly enjoyed building applications
                with. Here are a few examples of technologies that I have been learning with recently:
            </div>
            <div className="skills">
                <Tooltip title="HTML5" disableInteractive disableRipple className="skill-logo"><IconButton><FaHtml5 size={50} /></IconButton></Tooltip>
                <Tooltip title="CSS3" disableInteractive disableRipple className="skill-logo"><IconButton>< FaCss3Alt size={50} /></IconButton></Tooltip>
                <Tooltip title="JavaScript ES6" disableInteractive disableRipple className="skill-logo"><IconButton>< IoLogoJavascript size={50}/></IconButton></Tooltip>
                <Tooltip title="React" disableInteractive disableRipple className="skill-logo"><IconButton>< FaReact size={50}/></IconButton></Tooltip>
                <Tooltip title="Git" disableInteractive disableRipple className="skill-logo"><IconButton>< FaGitSquare size={50}/></IconButton></Tooltip>
                <Tooltip title="Node.js" disableInteractive disableRipple className="skill-logo"><IconButton>< FaNodeJs size={50}/></IconButton></Tooltip>
            </div>
        </div>
    )
}