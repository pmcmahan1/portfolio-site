import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <div className="featured-main">Featured Project</div>
        <div className="featured-title">Project Zomboid Builder</div>
        <div className="featured-body-text">
        This React application was inspired by the game Project Zomboid. You can 
        select different occupations and positive or negative traits that will
        impact your character's starting statistics. This project was incredibly fun 
        for me and has some pretty intricate React/Javascript functionality. I learned 
        alot about custom components, conditional renders, and properly tracking and 
        modifying state variables.
        </div>
        <div className="featured-buttons">
          <a
            href="https://pmcmahan1.github.io/pz-builder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg">View Site</button>
          </a>
          <a
            href="https://github.com/pmcmahan1/pz-builder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-secondary btn-lg">Source Code</button>
          </a>
        </div>
      </div>
      <div className="featured-item">
        <div className="featured-main">Featured Project</div>
        <div className="featured-title">Lia's Candles</div>
        <div className="featured-body-text">
        Lia's Candles is my first full stack project designed around an
          ecommerce site. Lia's Candle lacks a payment gateway in order for full
          functionality, for example Stripe. I used React
          and SASS for the front-end and created the back-end API with Strapi. I
          host the website on Hostinger, and the API on DigitalOcean. While the
          design itself is sort of bland, I learned alot throughout this project, especially
           completing a project that involves building the
          back-end API.
        </div>
        <div className="featured-buttons">
          <a
            href="https://liascandles.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg">View Site</button>
          </a>
          <a
            href="https://github.com/pmcmahan1/ecommerce-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-secondary btn-lg">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
