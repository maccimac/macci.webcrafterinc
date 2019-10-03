import React from 'react'

const MainNav = () =>{


  return(
    <div id="navigation" class="container-fluid sticky-top">
      <nav class="row position-sticky p-3">
        <div class="col-sm-3 col-4 ">
          <img id="logo" src="./img/brand/webcrafter-logo.png" alt="WebCrafter" class="padding-topbot-halfrem"/>
        </div>
        <div class="col-sm-9 col-8">
          <div id="right-nav" class="float-right text-blue">
            <a href="mailto:macci@webcrafterinc.com" class="h3 text-blue add-peace" >macci<i class="fas fa-at text-blue" ></i>webcrafterinc.com</a>
            {/* &nbsp; | &nbsp; <i id="burger-nav" class="fas fa-bars text-blue pt-2"></i> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainNav;
