import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
const OurCourses = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container ">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5">Our Courses</h1>
          </div>

          <div className="owl-carousel courses-carousel position-relative d-block" >
            <div className="owl-item " style={{display: 'none'}}>
              <div className="wow fadeInUp" data-wow-delay="0.1s">
                <div className="course-item bg-light">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="./assets/img/course-1.jpg" alt="" />
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                      <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                        style={{ borderRadius: "30px 0 0 30px" }}
                      >
                        View
                      </a>
                      <a
                        href="#"
                        className="flex-shrink-0 btn btn-sm btn-primary px-3"
                        style={{ borderRadius: "0 30px 30px 0" }}
                      >
                        Enroll Now
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 pb-0 min-h">
                    <h5 className="mb-4">Advance Oracle Apex Training</h5>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-clock text-primary me-2" /> Duration -
                      10 Hrs
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item " style={{display: 'none'}}>
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <div className="course-item bg-light">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="./assets/img/course-2.jpg" alt="" />
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                      <a
                        href="#"
                        className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                        style={{ borderRadius: "30px 0 0 30px" }}
                      >
                        View
                      </a>
                      <a
                        href="#"
                        className="flex-shrink-0 btn btn-sm btn-primary px-3"
                        style={{ borderRadius: "0 30px 30px 0" }}
                      >
                        Enroll Now
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 pb-0 min-h">
                    <h5 className="mb-4">
                      Solar Technician (Electrical) - (Trade Code-560)
                    </h5>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-clock text-primary me-2" />
                      Duration - 1.49 Hrs
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-primary py-2 px-4 mt-4" style={{ borderRadius: "40px" }} >
              Find out more{" "} <i className="fas fa-arrow-alt-circle-right" style={{ marginLeft: "10px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCourses;
