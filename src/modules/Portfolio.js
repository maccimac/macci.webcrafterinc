import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PortfolioItems from "./PortfolioItems";
import { Spacer } from "../layout/MainTemplate";

const Portfolio = props => {
  return (
    <section id="portfolio" className="container-fluid p-4">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 p-5 text-center">
          <div className="d-flex  minheight-16rem justify-content-center align-items-center">
            <h2 className="">
              We design{" "}
              <span className="h2 underline-yellow strong">
                websites you like seeing and using
              </span>{" "}
              , coupled with{" "}
              <span className="h2 underline-yellow strong">
                strong consistent branding
              </span>{" "}
              and{" "}
              <span className="h2 underline-yellow strong">
                beautiful online presence
              </span>
              .
            </h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <ul id="portfolio-nav" className="list-inline">
            <li className="list-inline-item active">Featured Works</li>
            {/* <li className="list-inline-item">
              Projects
            </li>
            <li className="list-inline-item">
              Case Studies
            </li>
            <li className="list-inline-item">
              All
            </li> */}
          </ul>
        </div>
      </div>

      <div id="portfolio-container" className="row">
        <PortfolioItems
          title="THINC (The In-House Company)"
          contribution={[
            "Web Development",
            "Project Management",
            "Digital Marketing",
            "Design",
            "Branding"
          ]}
          img="thinc-square.png"
          priTech={["WordPress"]}
          secTech={["SEO", "Slider Revolution", "Bootstrap", "HTML-CSS"]}
          url="https://theinhouseco.com"
        >
          <p>
            I developed and designed the website to playfully combine elegance
            and hipness. The website showcases the range of sectors our best
            lawyers specialise in, as well as illustrate the benefit of choosing
            us.
          </p>
          <p>The website is heavily SEO-optimized</p>
        </PortfolioItems>
        <PortfolioItems
          title="Phoenix Publishing House"
          img="phoenix-square.png"
          contribution={["Project Management", "Web Development", "Web Design"]}
          priTech={["WordPress"]}
          url="https://phoenix.com.ph"
        >
          <p>
            Designed with strong emphasis on the company’s values: Alagang
            Mahalaga. Developed with a team. The website acts as a directory of
            hundreds of books by the publication.
          </p>
          <p>
            Website also features a members-only section for teachers to access
            their resources.
          </p>
          <p>
            <small>
              <em>Credits to Andi Ong as part of the Development Team.</em>
            </small>
          </p>
        </PortfolioItems>
        <PortfolioItems
          title="Neo-Arch Design Build"
          url="http://www.neoarchdesignbuild.com"
          img="nadb-square.png"
          priTech={["WordPress"]}
          contribution={["Project Management", "Web Design"]}
        >
          <p
            className="
                "
          >
            Portfolio that displays the achitectural details of the studio’s
            favourite works.
          </p>
          <p>
            <small>
              <em>Credits to Andi Ong as part of the Development Team.</em>
            </small>
          </p>
        </PortfolioItems>
        <PortfolioItems
          title="PCIA (Philippine Concrete Industry Association)"
          contribution={["Web Development", "Web Design", "Project Management"]}
          img="pcia-square.png"
          priTech={["ReactJS", "MongoDB", "Javascript"]}
          secTech={["Bootstrap", "HTML-CSS"]}
          url="https://philconcrete.com/"
        >
          <p>
            PCIA is a network of construction companies and suppliers promoting
            the high standard of concrete products and services in the
            Philippines.
          </p>
          <p>
            {" "}
            Philconcrete.com enables the team to showcase its continuous
            activity, to make membership registration easier, and to have outlet
            for exclusive resource materials.
          </p>
          <ul>
            <li> Event registration</li>
            <li> Member registration</li>
            <li> Member's only directory</li>
            <li> Admin dashboard </li>
            <li> Edit member details </li>
          </ul>
          <p>
            <small>
              <em>Admin Access upon request.</em>
            </small>
          </p>
        </PortfolioItems>

        <PortfolioItems
          title="Precision Golf"
          contribution={["Web Development", "Web Design", "Project Management"]}
          img="pg-square.png"
          priTech={["WordPress", "Elementor"]}
          secTech={["Bootstrap", "HTML-CSS"]}
          url="http://precisiongolf.com/"
        >
          <p>
            PCIA is a network of construction companies and suppliers promoting
            the high standard of concrete products and services in the
            Philippines.
          </p>
          <p>
            {" "}
            Philconcrete.com enables the team to showcase its continuous
            activity, to make membership registration easier, and to have outlet
            for exclusive resource materials.
          </p>
          <ul>
            <li> Event registration</li>
            <li> Member registration</li>
            <li> Member's only directory</li>
            <li> Admin dashboard </li>
            <li> Edit member details </li>
          </ul>
          <p>
            <small>
              <em>Admin Access upon request.</em>
            </small>
          </p>
        </PortfolioItems>

        <PortfolioItems
          title="WaveKo"
          contribution={["Web Development", "Web Design"]}
          img="waveko-square.png"
          priTech={["Javascript", "WordPress", "SASS/SCSS"]}
          secTech={["Bootstrap", "HTML-CSS"]}
          url="http://waveko.com/"
        >
          <p>
            PCIA is a network of construction companies and suppliers promoting
            the high standard of concrete products and services in the
            Philippines.
          </p>
          <p>
            {" "}
            Philconcrete.com enables the team to showcase its continuous
            activity, to make membership registration easier, and to have outlet
            for exclusive resource materials.
          </p>
          <ul>
            <li> Event registration</li>
            <li> Member registration</li>
            <li> Member's only directory</li>
            <li> Admin dashboard </li>
            <li> Edit member details </li>
          </ul>
          <p>
            <small>
              <em>Admin Access upon request.</em>
            </small>
          </p>
        </PortfolioItems>
      </div>
      <Spacer num="8" />
    </section>
  );
};

export default Portfolio;
