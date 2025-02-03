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
              I'm{" "}
              <span className="h1 underline-yellow strong">
                Macci Macaranas
              </span>
              ,<br /> Front-end Developer<span class="h1 ml-3">+</span> UI/UX
              Designer
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
            <h3 className="mb-3">
              <strong>
                I'm a Software Front-end Engineer and User Experience / User
                Interface Designer, with over a decade of experience building
                web applications.
              </strong>
            </h3>

            <p>
              With practical hands-on design and development expertise in
              building websites — from design and architecture, to development,
              to deployment.{" "}
              <strong>I build websites you like seeing and using.</strong>
            </p>

            <p className="mb-4">Based in British Columbia, Canada.</p>

            <div>
              <Technologies />
            </div>

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
            <h2 className="d-inline underline-yellow">About</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 my-3 px-5">
            <h3 className="mb-3">Professional Overview</h3>
            <p>
              <strong class="text-regular">
                I am a trained{" "}
                <span class=" text-dark">Full-Stack Software Engineer</span>{" "}
                with strong professional{" "}
                <span class=" text-dark">UI/UX Design experience</span>. I have{" "}
                <span class=" text-dark">
                  <span class="underline-yellow text-dark">10+ years</span>{" "}
                  hands-on expertise building web applications
                </span>
                .{" "}
              </strong>
            </p>

            <p>
              I have worked as a designer, developer, and marketing strategist,
              helping businesses craft high-performing digital experiences.
            </p>

            <p>
              I specialize in front-end development with{" "}
              <strong class="underline-yellow text-dark">
                Vue, React, and AngularJS,
              </strong>{" "}
              and have experience in backend development using{" "}
              <strong class="underline-yellow text-dark">
                Laravel and WordPress
              </strong>
              . My design expertise includes{" "}
              <strong class="underline-yellow text-dark">
                Figma and Adobe Suite
              </strong>
              (Photoshop, Illustrator, InDesign, XD, Lightroom).
            </p>

            <p>
              With a background in Advertising Arts, I’ve{" "}
              <strong class="underline-yellow text-dark">
                designed brands and visual identities{" "}
              </strong>{" "}
              while implementing successful SEO strategies and digital marketing
              campaigns.
            </p>

            <p>
              <strong class="underline-yellow text-dark">
                As a Front-End Software Engineer, my focus is on building fast,
                seamless, and user-friendly interfaces{" "}
              </strong>{" "}
              that make key actions effortless. I enjoy learning new
              technologies and frameworks to enhance optimization and user
              experience.
            </p>

            <Spacer num="2" />
          </div>
          <div className="col-lg-6 col-md-12 my-3 px-5">
            <h3 className="mb-3">Academics</h3>

            <p>
              I earned degrees in (2){" "}
              <strong class=" text-dark">Computer Science</strong> major in
              Emerging Technology and (1){" "}
              <strong class=" text-dark">Fine Arts</strong> major in Advertising
              —{" "}
              <strong class="underline-yellow text-dark">
                both completed with honors
              </strong>
              .
            </p>

            <Spacer num="2" />
            <h3>Personal</h3>
            <p>
              I believe coming from a family of architects significantly
              contributed to my balanced adeptness in both creativity and logic.
            </p>
            <p>
              I have been practising yoga for 15 years, which I compliment with
              running, strength-training, and surfing. I'm an avid fan of
              non-fiction. The act of writing is also something I profoundly
              enjoy. My other interests include meditation, fashion, and
              language learning.
            </p>
            <p>
              And, most importantly, I am excited to start every day because of
              good coffee. I live with my husband in Vancouver, Canada.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 my-3 px-5">
            <h3>Technologies</h3>

            {/* <Spacer num="2" /> */}

            <Technologies />
            <p className="">
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
