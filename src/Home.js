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
              ,<br /> Front-end Developer + <br />
              UI/UX Designer
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
                Interface Designer,
                <br />
                with over a decade of expertise in building web applications.
              </strong>
            </h3>

            <p>
              My versatile background includes strong experience as an engineer
              and as a designer. I enjoy learning new technologies, supporting
              <strong> end-to-end website development </strong> — from system
              planning, interface design + architecture, to development,
              deployment, and troubleshooting.
            </p>

            {/* <p>
              My speciality is building user interfaces focusing on smooth user
              experience.
            </p> */}

            <p className="mb-4">
              <strong>I build websites you like seeing and using.</strong> Based
              in British Columbia, Canada.
            </p>

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
        {/* <div className="row">
          <div className="col-lg-6 offset-lg-3 p-1 text-center">
            <div className="d-flex  minheight-16rem justify-content-center align-items-center">
              <h2 className="">
                I build websites you like{" "}
                <span className="h2 underline-yellow strong">
                  seeing and using
                </span>
                .
              </h2>
            </div>
          </div>
        </div> */}
        <div className="row mb-5">
          <div className="col-12 px-5">
            <h2 className="d-inline underline-yellow">About</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 my-3 px-5">
            <h3 className="mb-3">Professional Overview</h3>
            <p>
              I am a trained Full-Stack Software Engineer with strong design
              background with meaninful marketing experience.
            </p>

            <p>
              <strong>
                I have 10+ years experience building and innovating websites.{" "}
              </strong>
              I have the versatile experience of building websites from system
              planning, design & architecture, to development, to digital
              marketing. I have been a designer, developer, and marketing
              strategist for clients and business teams.
            </p>

            <p>
              I have used three major Javascript Framewoks in my career: Vue,
              React, and AngularJS. My backend web frameworks are Laravel and
              Wordpress.
            </p>

            <p>
              For design I've used Figma ofcourse. But also the entire Adobe
              Suite from Photoshop, Illustrator, InDesign, XD, even Lightroom.
            </p>

            <p>
              I've also has my hand in marketing. My first major is Advertising
              Arts, and I've designed a handful of brands and visual identities.
              Aside from that, as with a lot of web development projects, I have
              implemented SEO strategies to help my clients. And to further
              support businesses, I've also had my hands on Digital Marketing
              specifically Google Ads and Social Media ads.
            </p>

            <p>
              My favorite thing to do for clients is to build smooth interfaces
              that makes it easy for users to access the the key actions in a
              product. My other favorite thing is to help grow my clients brand.
              And my other other favorite is to explore technological frameworks
            </p>

            <Spacer num="2" />
          </div>
          <div className="col-lg-6 col-md-12 my-3 px-5">
            <h3 className="mb-3">Academics</h3>

            <p>
              I graduated under two separate programs: (1) Fine Arts major in
              Advertising and (2) Computer Science major in Emerging Technology
              -- both of which I completed with honors.
            </p>

            <p>
              I profoundly enjoy the merge of the two programs design and
              techonology.
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
              Both of my parents are architects, which I believe has
              significantly contributed to my balanced adeptness in both
              creativity and logic.
            </p>
            <p>
              I have been practicing yoga for 15 years, which I supplement with
              running, strength-training, and surfing. I'm great fan of
              non-fiction. The act of writing is also something I profoundly
              enjoy. My other interests include meditation, fashion, and
              language learning.
            </p>
            <p>
              And, most importantly, every day I am excited to start the day
              because of good coffee. I live with my husband in Vancouver,
              Canada.
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
