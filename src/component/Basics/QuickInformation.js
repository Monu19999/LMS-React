import React from 'react'

const QuickInformation = () => {
  return (
    <>
      <div className="container mb-4" style={{paddingTop: '50px'}}>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1>Quick Information</h1>
        </div>
        <div className="row">
          <div className="four col-md-6 col-lg-3  wow fadeInUp" data-wow-delay="0.1s">
            <div className="counter-box ">
              <span className="counter">20</span>
              <p>Total Departments Onboarded</p>
            </div>
          </div>
          <div className="four col-md-6 col-lg-3 wow zoomIn" data-wow-delay="0.3s">
            <div className="counter-box">
              <span className="counter">400</span>
              <p>Courses Enrolled </p>
            </div>
          </div>
          <div className="four col-md-6 col-lg-3 wow zoomIn" data-wow-delay="0.3s">
            <div className="counter-box">
              <span className="counter">1300</span>
              <p>Total Users Registered</p>
            </div>
          </div>
          <div className="four col-md-6 col-lg-3 wow zoomIn" data-wow-delay="0.3s">
            <div className="counter-box"> <span className="counter">350</span>
              <p>Total Certification</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuickInformation
