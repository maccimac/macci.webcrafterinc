// One Template First
// Two Templates Next

import React, {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const PortfolioItems =({
  title,
  contribution = [],
  img,
  children,
  priTech = [],
  secTech = [],
  url
}) => {



  const hideItem = e =>{
    const initItem = e.currentTarget.querySelector('.item-show');
    const hoverItem = e.currentTarget.querySelector('.item-hover');
    hoverItem.classList.remove('d-flex')
    hoverItem.classList.add('d-none')
    initItem.classList.remove('d-none');
    initItem.classList.add('d-flex');

  }
  const showHover = e =>{
    const initItem = e.currentTarget.querySelector('.item-show');
    const hoverItem = e.currentTarget.querySelector('.item-hover');
    initItem.classList.remove('d-flex')
    initItem.classList.add('d-none')
    hoverItem.classList.remove('d-none');
    hoverItem.classList.add('d-flex');
  }
  const itemMeta  = () => (
    <div className="item-meta">
      <div className="contribution mb-4">
        <ul className="list-inline">

        </ul>
        {contribution.map(
          (item,index)=>(
            <li className="list-inline-item tag">
              {item}
            </li>
          )

        )}
      </div>

      <h3>{title}</h3>
      <div className="item-description">
        {children}
      </div>
      <p><strong>
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
      </strong></p>

      <Link to={url} className="btn btn-primary">
          Visit &nbsp;
          <i class="btn-arrow fas fa-arrow-right text-white" ></i>
      </Link>
    </div>
  )


  // const [screenWidth, setScreenWidth] = useEffect(window.innerWidth);

  if(window.innerWidth < 1025){
    return(
      <div className="col-12 d-flex col-sm-6 p-3 align-items-stretch">
          <div className="shadow">
            <div className="" >
                <img src={"/img/portfolio/" + img} alt="" className="w-100"/>
            </div>
            <div className="p-5">
              {itemMeta()}
            </div>

          </div>
      </div>

    )
  }


  return(
    <div className="col-md-6 d-flex align-items-stretch">
      <div className="portfolio-item w-100 minheight-32rem shadow m-3" onMouseOver={showHover} onMouseOut={hideItem}>
      <div className="item-show">
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
        <div className="item-show-img align-self-stretch minheight-32rem" >
            <img src={"/img/portfolio/" + img} alt=""/>
        </div>
      </div>

      <div className="item-hover p-5 d-none minheight-32rem">
        {itemMeta()}
      </div>

    </div>
  </div>
  )
}


export default PortfolioItems;
