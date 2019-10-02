import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PortfolioItems from './PortfolioItems'
import { Spacer } from '../layout/MainTemplate';

const Portfolio = props =>{
  const showTag = () =>{

  }
  return(
    <section id="portfolio" className="container-fluid p-4">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 p-5 text-center">
          <div className="d-flex  minheight-16rem justify-content-center align-items-center">
            <h2 className="">
              We design <span className="h2 underline-yellow strong">websites you like seeing and using</span> , coupled with <span className="h2 underline-yellow strong">strong consistent branding</span> and <span className="h2 underline-yellow strong">beautiful online presence</span>
              .
            </h2>
          </div>

        </div>
      </div>


      <div className="row">


        <div className="col-lg-12">
          <ul id="portfolio-nav" className="list-inline">
            <li className="list-inline-item active">
              Featured Works
            </li>
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
              title = "Booking System - Siesta Farm and Resorts"
              contribution = {["Web Development", "Design"]}
              img = "https://images.pexels.com/photos/190364/pexels-photo-190364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
              priTech = {["ReactJS","MongoDB","Javascript"]}
              secTech={["Bootstrap","HTML-CSS"]}
              url = "https://siesta-farms-booking.herokuapp.com/"
             />
             <PortfolioItems
               title = "Asset Management System - Hotel Handler"
               contribution = {["Web Development", "Design"]}
               img = "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
               description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. C"
               priTech = {["ReactJS","MongoDB","Javascript"]}
               secTech={["Bootstrap","HTML-CSS"]}
               url = "https://siesta-farms-booking.herokuapp.com/"
              />
          </div>
    <Spacer num="8"/>
    </section>
  )
}

export default Portfolio;
