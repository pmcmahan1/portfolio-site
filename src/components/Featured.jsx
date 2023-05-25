import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <div className="featured-main">Featured Project</div>
        <div className="featured-title">Gym Site</div>
        <div className="featured-body-text">
        This website is primarily a CSS showcase. Gym site is a static site which makes one API call,
        to the google maps API to display the location of the business. Sign up page
        is available but only for display purposes. I used React and SASS to build 
        the website, along with a few npm.js components such as for the google maps
        and the simple setup for smooth scrolling. The overall site is very simple 
        but at the same time clean and could be used for an actual businesses site.
        </div>
        <div className="featured-buttons">
          <a
            href="https://pmcmahan1.github.io/gym-site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg">View Site</button>
          </a>
          <a
            href="https://github.com/pmcmahan1/gym-site"
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
