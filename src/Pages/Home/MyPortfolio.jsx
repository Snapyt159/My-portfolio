import React from 'react';
import data from "../../data/index.json";
import { Fade } from "react-awesome-reveal";

export default function MyPortfolio() {
  return (
    <Fade>
      <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <p className="sub-title">Recent Projects</p>
            <h2 className="section--heading">My Portfolio</h2>
          </div>
          <div>
            <button className="btn btn-github">
              <a
                href="https://github.com/Snapyt159"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="98"
                  height="96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ... SVG path */}
                </svg>
                Visit My GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="portfolio--section--container">
          {data?.portfolio?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">
                    {item.title}
                  </h3>
                  <p className="text-md">{item.description}</p>
                </div>                       
                <a href={item.repository} className="text-sm portfolio--link">
                  {item.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    {/* ... SVG path */}
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
