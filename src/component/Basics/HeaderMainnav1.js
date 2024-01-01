import React, { useState } from 'react';
import Menu from "./menuApi";
import menuItem from "./menuItem";
const HeaderMainnav = () => {

  // const [menuData, setMenuData] = useState(Menu);
  return (
    <>

    <nav className="c-navbar shadow" id="js-navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="c-navbar__container">
              <div id="hs_cos_wrapper_navigation-primary" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                <div className="c-navbar__links js-navbar-links ">
                  <ul className="c-navbar__list"> 
                    <li className="c-navbar__item c-navbar__item--dropdown">
                      <a href="#" className="c-navbar__link active" style={{color: '#06bbcc'}}>Home</a>
                    </li>
                    <li className="c-navbar__item c-navbar__item--dropdown">
                      <a href="#" className="c-navbar__link ">About</a>
                    </li>             
                    <li className="c-navbar__item c-navbar__item--dropdown">
                      <button className="c-navbar__link ">
                        Courses
                        <svg className="c-navbar__link-icon" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.217 8.502l1.435-1.435L12 15.415l8.348-8.348L21.783 8.5 12 18.284 2.217 8.501z" />
                        </svg>
                      </button>
                      <SubMenu />    
                    </li>
                    <li className="c-navbar__item c-navbar__item--dropdown">
                      <a href="#" className="c-navbar__link ">Download</a>
                    </li> 
                    <li className="c-navbar__item c-navbar__item--dropdown">
                      <a href="#" className="c-navbar__link ">Videos</a>
                    </li> 
                    <li className="c-navbar__item c-navbar__item--dropdown">
                      <a href="#" className="c-navbar__link ">Contact</a>
                    </li> 
                  </ul>
                  <menuItem />
                </div>
                <div className="c-navbar__menu-container">
                  <button className="c-navbar__menu" id="js-navbar-menu-toggle" aria-controls="js-navbar-links">
                    <span>
                      <span className="u-visually-hide" />
                    </span>
                  </button>
                </div>
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
