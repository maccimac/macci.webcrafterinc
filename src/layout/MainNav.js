import React from 'react'

const MainNav = () =>{


  return(
    <div id="navigation" class="container-fluid sticky-top">
      <nav class="row position-sticky p-3">
        <div class="col-sm-3 col-xs-12">
          <img id="logo" src="./img/brand/webcrafter-logo.png" alt="WebCrafter" class="padding-topbot-halfrem"/>
        </div>
        <div class="col-sm-9 col-xs-12 text-right">
          <div id="right-nav" class="float-right text-blue">
            <a href="/contact-us" class="h3 text-blue add-peace" >macci@webcrafterinc.com</a>
            {/* &nbsp; | &nbsp; <i id="burger-nav" class="fas fa-bars text-blue pt-2"></i> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainNav;
