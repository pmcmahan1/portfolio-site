import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="projects-text">Featured Project</div>
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
  );
};

export default Featured;
