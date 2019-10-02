import React from 'react';
import MainNav from './MainNav'

const MainTemplate = ({children}) =>(
  <Fragment>
    <MainNav/>
    {children}
  </Fragment>

)

export default MainTemplate
