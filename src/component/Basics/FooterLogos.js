import React from 'react';
 
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


const FooterLogos = () => {
  return (
    <>
       <div id="logo-slider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12" style={{padding: 0}}>
              <div className="footer-section-row">
                <div className="first-img custom7 owl-carousel owl-theme owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s'}}>
                      <div className="owl-item active">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/cmhelpline.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/fomp.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/indiaportal.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/investmp.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/lokseva.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/mapit.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/mpcode.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/mpdashboard.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/mpdashboard.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/mpgov.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/mpinfo.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/mptourism.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <img src="./assets/img/departments/scroll/rajbhavan.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <button type="button" role="presentation" className="owl-prev">
                      <span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next">
                      <span aria-label="Next">›</span></button>
                  </div>
                  <div className="owl-dots ">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterLogos
