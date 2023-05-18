import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <div className="featured-main">Featured Project</div>
        <div className="featured-title">Lia's Candles</div>
        <div className="featured-body-text">
          Lia's Candles is my first full stack project designed around an
          ecommerce site. The only thing Lia's Candle lacks in order for full
          functionality is a payment gateway, for example Stripe. I used React
          and SASS for the front-end and created the back-end API with Strapi. I
          host the website on Hostinger, and the API on DigitalOcean. While the
          design itself is sort of bland, I learned alot throughout this project
          and I am very proud of completing a project that involves building the
          back-end. This project is also the site that introduced me to React
          Router DOM, a very seamless router package.
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
      <div className="featured-item">
        <div className="featured-main">Featured Project</div>
        <div className="featured-title">Weather App</div>
        <div className="featured-body-text">
          One of the first projects I completed without guidance, my weather app
          was made using React, SASS, and two primary API calls. The first API
          call is to the google maps API, which allows for my auto-complete
          search bar and to locate the coords of the place searched. Using these
          coordinates, I make an API call to the openweathermap API, which
          gathers all of the data I display including daily and hourly
          predictions, sunrise and sunset times, etc. In order to translate the
          data from the weather API to readable information, I use luxon.{" "}
          <b>Best viewed on mobile devices.</b>
        </div>
        <div className="featured-buttons">
          <a
            href="https://pmcmahan1.github.io/weather-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg">View Site</button>
          </a>
          <a
            href="https://github.com/pmcmahan1/weather-app"
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
