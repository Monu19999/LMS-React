import React from 'react';


const Topbar = () => {
  return (
    <div>
      <div id="topbar">
        <div className="d-flex align-items-center ">
          <div className="container-fluid d-flex justify-content-end">
          <ul className="d-flex align-items-center list-unstyled m-0 justify-content-end">
              <li className="px-0">
                <div className="theme-switch" data-toggle="tooltip" title="Change Theme">
                  <input className="theme-switch_toggle" id="themeSwitchToggle" type="checkbox" />
                  <label className="theme-switch_label" htmlFor="themeSwitchToggle" />
                </div>
              </li>
              <li className="px-0">
                <a  href="#" id="btn-decrease" className="js-font-decrease" data-toggle="tooltip" data-placement="bottom" data-original-title="A-">
                  A-
                </a>
              </li>
              <li className="px-0">
                <a  href="#" id="btn-orig" className="js-font-normal" data-toggle="tooltip" data-placement="bottom" data-original-title="A">
                  A
                </a>
              </li>
              <li className="px-0">
                <a  href="#" id="btn-increase" className="js-font-increase" data-toggle="tooltip" data-placement="bottom" data-original-title="A+">
                  A+
                </a>
              </li>
            </ul>
            <div className="contact-info d-flex align-items-center">
              <a href="#" className="d-sm-hide"><i className="fa fa-book px-2" /> <span className="d-none-head">Screen
                  Reader</span>
                </a>
              <a href="#" className="d-sm-hide">
                <i className="fa fa-fast-forward font-13 px-2" /> <span className="d-none-head">Skip to Nav
                  Content</span>
              </a>
              <a href="#" className="d-sm-hide">
                <i className="fa fa-fast-forward font-13 px-2" /> <span className="d-none-head">Skip to Main
                  Content</span>
              </a>
              <a href="#" className="d-sm-hide dropdown-toggle" data-bs-toggle="dropdown">
                <i className="fa fa-user font-13 px-2" /> <span className="d-none-head">Login</span>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Student Login</a></li>
                <li><a className="dropdown-item" href="#">Department Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;