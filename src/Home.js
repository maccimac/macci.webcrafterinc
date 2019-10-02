import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MainNav from './layout/MainNav'
import Portfolio from './modules/Portfolio';


const Home = () =>(
  <BrowserRouter>
    <MainNav/>
    <section id="above-the-fold">
      <div className="container-fluid p-5">
        <div className="row align-items-center height-50vh p-5">
          <div className="col-md-7 py-3">
              <p className="clearfix h1 mb-2">Hello :)</p>

            <h1>
              I'm <span className="h1 underline-yellow strong">Macci Macaranas</span>, web developer & designer.
            </h1>
          </div>
          <div className="col-md-5 py-3">
            <h3 className="mb-3">I build websites.</h3>
            <p className="mb-4">
              I’ve been handling websites for 10 years. I’ve worked as a designer, developer, project manager, marketing strategist, and occasional makeshift psychologist for teams, companies, and clients.
            </p>
            <div className="d-inline-flex align-items-center">

                <Link className="btn btn-primary align-middle mr-3" to="">
                  Download Resume »
                </Link>
                <strong className="text-sans">
                  <Link className="text-blue animated-underline-blue" top="">
                    About the Developer
                  </Link>
                </strong>

            </div>



            <div className="minheight-2rem"> </div>
          </div>

        </div> {/* /row */}

      </div>
    </section>
    {/* <Switch>
      <Route path="/" exact component={Client} />
    </Switch> */}
  <Portfolio/>
  </BrowserRouter>
)


export default Home;
