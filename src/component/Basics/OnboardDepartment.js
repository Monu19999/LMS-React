import React, {useState} from 'react';
import OnboardDepartment from "./DepartmentApi";

const Onboard = () => {
  const [DepartentData, setDepartentData] = useState(OnboardDepartment);
  console.log (DepartentData);
  return (
    <>
      <div className="container-fluid py-5 category" style={{backgroundColor: '#eef4f5', paddingLeft: 0, paddingRight: 0}}>
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5">Onboarded Departments</h1>
          </div>
          <div className="row">

                {DepartentData.map((curElem) => {
                  return (
                    <div className="col-xs-12 col-md-6 col-lg-3 mb-4" key={curElem.id}>
                      <div className="thumbnail">
                        <div className="thumb-logo">
                          <img src={curElem.image} alt="logo"  style={{height:'70px'}} />
                          <h4 className="mt-2" >{curElem.title}</h4>
                        </div>
                        <div className="caption">
                          <img src={curElem.image} alt="logo" style={{height:'70px'}} />
                          <h4 className="mt-2">{curElem.title}</h4>
                        </div>
                      </div>
                    </div>
                    )
                  
                  })}

            
            
            <div className="col-12 text-center">
              <a className="btn btn-primary py-2 px-4 mt-2" href="#" style={{borderRadius: '40px'}}>Find out more <i className="fas fa-arrow-alt-circle-right" style={{marginLeft: '10px'}} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Onboard;
