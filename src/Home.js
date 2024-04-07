import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MainTemplate, { Spacer } from "./layout/MainTemplate";
// import MainNav from './layout/MainNav'
import Portfolio from "./modules/Portfolio";
import Technologies from "./modules/Technologies";

const Home = () => (
  <MainTemplate>
    {/* <MainNav/> */}
    <section id="above-the-fold">
      <div className="container-fluid p-md-5 p-2">
        <div className="row align-items-center minheight-66vh p-5">
          <div className="col-sm-5 p-md-5 py-2 mb-2">
            {/* <p className="clearfix h1 mb-2">Hello :)</p> */}

            <h1>
              I'm {" "}
              <span className="h1 underline-yellow strong">
                Macci Macaranas
              </span>
              ,<br/> Front-end Developer + <br/>UI/UX Designer
            </h1>

            <div className="d-flex">
              <a
                href="https://twitter.com/maccidothello"
                target="_blank"
                className="m-2"
              >
                <i class="fab fa-twitter text-blue"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/maccimacaranas/"
                target="_blank"
                className="m-2"
              >
                <i class="fab fa-linkedin text-blue"></i>
              </a>
              <a
                href="https://github.com/maccimac"
                target="_blank"
                className="m-2"
              >
                <i class="fab fa-github text-blue"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-7 py-3">
            <p className="">
            Hi :) I'm a trained <strong>Full-Stack Software Engineer with 4+ years experience in web development and 5+ years in web design</strong>.
              {/* I’ve been crafting beautiful websites for 10 years.{" "} */}
            </p>

            <p>
            I have well-rounded experience of building web applications — <strong>from design & architecture, to engineering,</strong> to deployment & troubleshooting, to SEO & digital marketing.
              {/* I’ve worked as a{" "}
              <strong>
                developer, designer, project manager, and marketing strategist
              </strong>{" "}
              for teams, companies, and clients. */}
            </p>

            <p>I code web applications for smooth user experience. I enjoy diving into new technologies.</p>

            <p className="mb-4"><strong>
              Based in British Columbia, Canada.
            </strong>
            </p>

            <div className="d-inline align-items-center">
              <a
                className="btn btn-secondary align-middle mr-3 my-3 d-inline-block"
                target="_blank"
                href="/asset/Margaret-Macaranas-Software-Engineer-Designer-Resume.pdf"
              >
                Download Resume &nbsp;
                <i class="btn-arrow fas fa-arrow-right text-white"></i>
              </a>
              <strong
                id="meet-the-dev m-3"
                className="text-sans d-inline-block"
              >
                <a className="text-red animated-underline" href="#skillset">
                  About the Developer
                </a>
              </strong>
            </div>

            <div className="minheight-2rem"> </div>
          </div>
        </div>{" "}
        {/* /row */}
      </div>
    </section>
    {/* <Switch>
      <Route path="/" exact component={Client} />
    </Switch> */}
    <Portfolio />

    <section id="skillset">
      <Spacer num="4" />
      <div className="container p-5">
        <div className="row mb-5">
          <div className="col-12 px-5">
            <h2 className="d-inline underline-yellow">Skillset</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 my-3 px-5">
            <h3 className="mb-3">Overview</h3>
            <p>
              {/* I have the well-rounded experience of building websites — from planning & design, to development, to deployment &
              maintenance. I enjoy coding websites using technologies that focus
              on seamless user experience. */}
              I enjoy coding web applications for smooth user experience. 
            </p>
            <p>
              I have a <strong>strong design background</strong> with a meaningful
              digital marketing experience (<strong>I grow brands</strong>).
            </p>
            <p>
              I craft websites to build businesses or bring ideas to life. I’ve
              repeatedly found that <strong>good design</strong> and{" "}
              <strong>clean code</strong> adds value to clients by solving
              problems.
            </p>

            <Spacer num="2" />
            <h3 className="mb-3">Philosophies / Schools of thought</h3>
            <p>
              I love a lot of <strong>white space</strong> and I love{" "}
              <strong>Javascript</strong>.
            </p>
            <p>
              <strong>Good content</strong>, clear and useful, is the starting
              point of every effective idea launched in the web.
            </p>
            <p>
              People tend to use what is pleasing see.{" "}
              <strong>Mindful interface design</strong> is important getting
              your audience do what you hope they’ll do.
            </p>
            <Spacer num="2" />
            <h3>Other Skills</h3>
            <p>
            <strong>
              UI / UX, Project Management, Branding, SEO, Campaign Management
              (Google Adwords, FB & IG Ads, Twitter Ads), General Digital
              Marketing Management
            </strong>
            </p>

            <Spacer num="2" />
            <h3>Personal</h3>
            <p>
            I enjoy fitness and non-fiction.
            </p>
          </div>
          <div className="col-lg-6 my-3 px-5">
            <h3>Technologies</h3>
            <Technologies />
            <p>
              This website is made using{" "}
              <strong>React, Javascript, SASS, and Bootstrap</strong>.
            </p>
            <Spacer num="2" />
          </div>
        </div>
      </div>

      <Spacer num="4" />
    </section>
  </MainTemplate>
);

export default Home;
