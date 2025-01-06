import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import PortfolioItems from "./PortfolioItems";
import { Spacer } from "../layout/MainTemplate";

const Portfolio = (props) => {
  return (
    <section id="portfolio" className="container-fluid p-4">
      <div className="row">
        <div className="col-lg-12">
          <ul id="portfolio-nav" className="list-inline">
            <li className="list-inline-item active">Featured Project</li>
          </ul>
        </div>
      </div>

      <div id="project-container" className="row">
        <PortfolioItems
          key="sq"
          wide={true}
          title="ScopeCliq - A Freelancing Toolkit "
          contribution={[
            "Web Development",
            "UI/UX Design",
            "Database Design",
            "Documentation",
            "Deployment",
          ]}
          img="scopecliq-square-wide.png"
          priTech={["React", "Laravel"]}
          secTech={["SQL", "SASS", "Figma"]}
          url="https://www.scopecliq.com"
        >
          <div className="mb-2">
            <a
              href="https://github.com/maccimac/scopecliq"
              target="_blank"
              className=""
            >
              <small className="text-blue underline-yellow">
                <i className="fab fa-github text-blue mr-1"></i> Github Repo
              </small>
            </a>
            <small className="text-mid mx-2"></small>

            <a
              href="/asset/ScopeCliq-Project-Documentation.pdf"
              target="_blank"
            >
              <small className="text-blue underline-yellow">
                <i className="fas fa-book text-blue mr-1"></i> Documentation
              </small>
            </a>
          </div>

          <p className="col-lg-8 mx-0 px-0">
            <strong>
              ScopeCliq is a straightforward freelancing toolkit that helps you
              focus on your core tasks by reducing client update requests,
              improving client alignment, and supporting account + project
              management.{" "}
            </strong>
            With ScopeCliq you get the following:
          </p>
          <p></p>
          <div className="row mb-2">
            <p className="col-lg-4">
              <strong className="mr-2">Project Blueprint.</strong>
              Client and Consultant have{" "}
              <span className="underline-yellow">
                single source of truth
              </span>{" "}
              which is the Project Blueprint holding all the Deliverables
              grouped by Milestones providing a central reference point
            </p>
            <p className="col-lg-4">
              <strong className="mr-2">Dedicated Client Portal Links.</strong>
              Consultant can send a professional Client Portal link where Client
              can actively track the project’s real-time status through the
              Project Blueprint.
            </p>
            <p className="col-lg-4">
              <strong className="mr-2">Consultant Dashboard.</strong>
              Consultant will have a Consultant Dashboard where they can track
              and manage clients and projects with an overview of where they are
              as a business.
            </p>
          </div>
        </PortfolioItems>
      </div>
      <div className="p-5"></div>

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
            "Branding",
          ]}
          img="thinc-square.png"
          priTech={["WordPress"]}
          secTech={["SEO", "Slider Revolution", "Bootstrap"]}
          url="https://theinhouseco.com"
        >
          <p>
            The website is developed and designed to playfully combine elegance
            with latest UX trends. We also showcase the sectors our lawyers
            specialise and the benefit of choosing this Dubai-based law firm.
          </p>
          <p>The website is heavily SEO-optimized</p>
        </PortfolioItems>
        <PortfolioItems
          title="Phoenix Publishing House"
          img="phoenix-square.png"
          contribution={["Project Management", "Web Development", "Web Design"]}
          priTech={["WordPress"]}
          secTech={["Bootstrap"]}
          url="https://phoenix.com.ph"
        >
          <p>
            Designed with strong emphasis on the company’s values:{" "}
            <i>Alagang Mahalaga</i>. Developed with a team. The website acts as
            a directory of hundreds of books by the publication. Each book's
            details can be customized by the team from the content management
            system.
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
          title="Neo-Arch Development Corporation"
          url="https://neoarchdevtcorp.com/"
          img="nadb-square.png"
          priTech={["WordPress"]}
          contribution={["Project Management", "Web Design"]}
        >
          <p>
            This portfolio displays the achitectural details of the studio’s
            favourite works.
          </p>
          <p>
            <small>
              <em>Credits to Andi Ong as part of the Development Team.</em>
            </small>
          </p>
        </PortfolioItems>
        {/* <PortfolioItems
          title="PCIA (Philippine Concrete Industry Association)"
          contribution={["Web Development", "Web Design", "Project Management"]}
          img="pcia-square.png"
          priTech={["Javascript","ReactJS", "MongoDB", "Express", "Node", ]}
          secTech={["Bootstrap", "SASS-SCSS"]}
          url="https://philconcrete.com/"
        >
          <p>
          PCIA is a network of construction suppliers in the Philippines.
          </p>
          <p>
          Philconcrete.com enables potential members to register. The team admin also has their own dashboard where they can verify and edit member details. </p>
          <p>Website also includes a members-only directory.</p>
          <p>
          Event registration is also synced with the organization's Facebook page.
          </p>
          <p>
            <small>
              <em>Admin Access upon request.</em>
            </small>
          </p>
        </PortfolioItems> */}

        <PortfolioItems
          title="Precision Golf Middle East"
          contribution={["Web Development", "Web Design", "Project Management"]}
          img="pg-2-square.png"
          priTech={["WordPress"]}
          secTech={["Bootstrap"]}
          url="http://precisiongolf.com/"
        >
          <p>
            Precision Golf is a Dubai-based golf retail supplier, acting as an
            ambassador for Callaway and Mizuno.
          </p>
          <p>
            Precision Golf delivers your most enjoyable golf practice by
            distributing the top-quality equipment which you can customize to
            your measurements and your style.
          </p>
        </PortfolioItems>

        <PortfolioItems
          title="WaveKo"
          contribution={["Web Development", "Web Design"]}
          img="waveko-square.png"
          priTech={["Javascript", "WordPress"]}
          secTech={["jQuery", "Bootstrap", "SASS-SCSS"]}
          url="http://waveko.com/"
        >
          <p>WaveKo is a community-minded local surf brand.</p>
          <p>
            Waveko.com is a one-pager that showcases the startup's first
            products using product option tabs and carousel galleries. This
            compact website already takes in product orders.
          </p>
        </PortfolioItems>
      </div>
      <Spacer num="8" />
    </section>
  );
};

export default Portfolio;
