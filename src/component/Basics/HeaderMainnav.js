import React, { useState } from 'react';
import Menu from "./menuApi";

import MenuItem from './MenuItem';
const HeaderMainnav = () => {

  const [menuData, setMenuData] = useState(Menu);
  return (
    <>
    
      <nav className="c-navbar shadow" id="js-navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="c-navbar__container">
              <div id="hs_cos_wrapper_navigation-primary" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                <MenuItem menuData={menuData}/>
                <div className="navbar-2">
                  <a href="#" className="navbar-brand d-flex align-items-center px-4 p-4">
                    <img src="./assets/img/logo.png" alt="" />
                    <div className="ml-2" style={{marginLeft: '10px'}}>
                      <p className="name">e-Shiksha</p>
                      <span className="subhead">Govt. of Madhya Pradesh</span>
                    </div>
                  </a>
                </div>
                <div className="navbar-3 c-navbar__buttons ">
                  <a className="btn btn-primary py-2 px-4 fa-search-toggle" href="#" style={{borderRadius: '40px'}}><span className="d-none-head">Search</span> <i className="fas fa-search" /></a>
                  <div className="search-box">
                    <input type="text"  />
                    <input type="button" defaultValue="Search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default HeaderMainnav;
