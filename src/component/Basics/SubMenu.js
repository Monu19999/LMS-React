import React from 'react'

const SubMenu = ({ submenuData }) => {
  return (
    <>
       <div className="c-navbar__dropdown">
            <div className="c-navbar__dropdown-wrapper">
                <ul className="c-navbar__dropdown-list">
                {submenuData.map((curElem) => {
                  return (
                    <>
                        <li className="c-navbar__dropdown-item" key={curElem.id}>
                            <a href="#" className="c-navbar__dropdown-link">
                                <span>{curElem.title}</span>
                            </a>
                        </li>
                   <li className="c-navbar__item c-navbar__item--dropdown" >
                     <a href="#" className="c-navbar__link " ></a>
                   </li>
                   </>
                    )
                  
                  })}
                
                
                
                
                
                </ul>
            </div>
        </div> 
    </>
  )
}

export default SubMenu;
