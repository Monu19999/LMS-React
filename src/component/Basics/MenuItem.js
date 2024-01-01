import React from 'react';

const MenuItem = ({ menuData }) => {
  //console.log (menuData);
  return (
    <>
      
              <div className="c-navbar__links js-navbar-links ">
                 <ul className="c-navbar__list"> 
                 {menuData.map((curElem) => {
                  return (
                    <li className="c-navbar__item c-navbar__item--dropdown" key={curElem.id}>
                      <a href="#" className="c-navbar__link " >{curElem.title}</a>
                    </li>
                    )
                  
                  })}
                 </ul>
               </div>
               <div className="c-navbar__menu-container">
                 <button className="c-navbar__menu" id="js-navbar-menu-toggle" aria-controls="js-navbar-links">
                   <span>
                     <span className="u-visually-hide" />
                   </span>
                 </button>
               </div>
          
               
    </>
  )
}

export default MenuItem;
