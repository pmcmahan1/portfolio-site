import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitSquare,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { Tooltip, IconButton } from "@mui/material";

export default function About() {
  return (
    <div className="about">
      <div className="about-head-text">About Me</div>
      <div className="about-body-text">
        Since I was a child I have enjoyed creating things on the internet. My
        interest in coding started by creating levels for the popular video game
        Roblox in a language called Lua, continuing that as I grew older in a
        game called Garry's Mod. Since then, I pursued a Bachelors degree in
        History with a minor in Business Administration at the University of
        South Carolina and enjoyed computer-related activities on the side 
        as a hobby.
      </div>
      <div className="about-body-text">
        Fast forward to today, I have decided to take my interest in web
        development and coding in general
         and attempt to turn it into a full-time passion. I started
        my journey though the Odin Project, and following that with other free
        learning resources such as Scrimba and freeCodeCamp. Primarily focusing on
        and learning HTML, CSS,
        and Javascript led me to discover React, a powerful Javascript library
        that I instantly enjoyed building applications with. Below are a few
        examples of the technologies that I have been learning with.
      </div>
      <div className="about-body-text">
        When I am not spending time at my computer, I enjoy lifting weights and
        playing sports such as volleyball and basketball. Recently, I have
        enjoyed hiking, traveling out west and seeing some of our great national
        parks, including the Grand Canyon and Zion. My future goals are to obtain
        a position as a junior web developer or junior software engineer to be able to
        pursue coding and development as a career.
      </div>
      <div className="skills">
        <Tooltip
          title="HTML5"
          disableInteractive
          disableRipple
          className="skill-logo"
        >
          <IconButton>
            <FaHtml5 size={50} />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="CSS3"
          disableInteractive
          disableRipple
          className="skill-logo"
        >
          <IconButton>
            <FaCss3Alt size={50} />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="JavaScript ES6"
          disableInteractive
          disableRipple
          className="skill-logo"
        >
          <IconButton>
            <IoLogoJavascript size={50} />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="React"
          disableInteractive
          disableRipple
          className="skill-logo"
        >
          <IconButton>
            <FaReact size={50} />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Git"
          disableInteractive
          disableRipple
          className="skill-logo"
        >
          <IconButton>
            <FaGitSquare size={50} />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Node.js"
          disableInteractive
          disableRipple
          className="skill-logo"
        >
          <IconButton>
            <FaNodeJs size={50} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
