import React from 'react'
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
const Mainslider = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item style={{position: 'relative'}}>
                <Image className="d-block w-100 slide-img" src="./assets/img/carousel-1.jpg" alt="Image One" />
                <Carousel.Caption >
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                    <div className="container">
                    <div className="row justify-content-start" style={{textAlign: 'left'}}>
                        <div className="col-sm-10 col-lg-8">
                        {/* <h5 class="text-primary text-uppercase mb-3 animated slideInDown">e-Shiksha  </h5> */}
                        <h1 className="display-4 text-white animated slideInDown mb-4"> Learning Management System</h1>
                        <button className="btn btn-primary py-md-2 px-md-4 me-3 animated slideInLeft" style={{borderRadius: '40px'}}>Read More</button>
                        <button className="btn btn-light py-md-2 px-md-4 animated slideInRight" style={{borderRadius: '40px'}}>Enroll Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{position: 'relative'}}>
                <Image className="d-block w-100 slide-img" src="./assets/img/carousel-2.jpg" alt="Image One" />
                <Carousel.Caption >
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                    <div className="container">
                    <div className="row justify-content-start" style={{textAlign: 'left'}}>
                        <div className="col-sm-10 col-lg-8">
                        {/* <h5 class="text-primary text-uppercase mb-3 animated slideInDown">e-Shiksha  </h5> */}
                        <h1 className="display-4 text-white animated slideInDown mb-4"> Learning Management System</h1>
                        <button className="btn btn-primary py-md-2 px-md-4 me-3 animated slideInLeft" style={{borderRadius: '40px'}}>Read More</button>
                        <button className="btn btn-light py-md-2 px-md-4 animated slideInRight" style={{borderRadius: '40px'}}>Enroll Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    </>
  )
}

export default Mainslider
