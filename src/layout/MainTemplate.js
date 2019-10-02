import React from 'react';
import MainNav from './MainNav'


export const Spacer = ({num = 4}) => (
  <div className={"minheight-" + num + "rem"}>
    &nbsp;
  </div>
)

const MainTemplate = ({children}) =>(
  <React.Fragment>
    <MainNav/>
    {children}
  </React.Fragment>

)

export default MainTemplate;
