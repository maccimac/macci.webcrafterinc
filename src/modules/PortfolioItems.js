// One Template First
// Two Templates Next

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const PortfolioItems =({
  title,
  contribution = [],
  img,
  description,
  priTech,
  secTech,
  url
}) => {
  return(
    <div className="col-md-6 d-flex portfolio-item minheight-16rem shadow">
      <div className="item-show d-flex">
        <div className="item-show-title p-5">

          <div className="item-meta">
            <h3>{title}</h3>
            <strong>
              {priTech.map(
                (item,index)=>(
                  <span className="text-red pr-1">
                    {item}  /
                  </span>
                )
              )}
              {secTech.map(
                (item,index)=>(
                  <span className="text-light pr-1">
                    {item}  /
                  </span>
                )
              )}
            </strong>
          </div>


        </div>
        <div className="item-show-img">
            <img src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
        </div>
      </div>

    </div>
  )
}


export default PortfolioItems;
