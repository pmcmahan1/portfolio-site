import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
      <div className="featured-main">Featured Project</div>
      <div className="featured-title">Lia's Candles</div>
      <div className="featured-body-text">
        Lia's Candles is an ecommerce site that is only lacking a payment
        gateway for full functionality. The frontend was built using React and
        SASS, and the backend API was built using Strapi. The site was hosted
        using Hostinger, and the API was hosted using DigitalOcean. Items can be
        added and filtered with ease using Strapi's admin interface, making a
        seamless user experience. No framework or libraries were used in making
        the site's styling. Please follow the links below to view the site and
        source code.{" "}
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
        One of the first projects I completed without guidance, my weather app was made
        using React, SASS, and two primary API calls. The first API call is to the google maps API, which
        allows for my auto-complete search bar and to locate the coords of the place searched.
        Using these coordinates, I make an API call to the openweathermap API, which gathers all of the data I display including daily and hourly predictions,
        sunrise and sunset times, etc. In order to translate the data from the weather API to readable
        information, I use luxon. <b>Best viewed on mobile devices.</b>
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
