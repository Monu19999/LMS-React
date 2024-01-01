import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
          <div className="container-fluid py-3" style={{backgroundColor: '#1e233d', borderBottom: '1px solid rgba(256, 256, 256, .1)'}}>
            <div className="row g-5 justify-content-center">
              <div className="col-lg-12 col-md-12 text-center">
                <a className="btn btn-link" href="#">Feedback</a>
                <a className="btn btn-link" href="#">Hyperlink Policy</a>
                <a className="btn btn-link" href="#">Terms of Use</a>
                <a className="btn btn-link" href="#">Privacy Policy</a>
                <a className="btn btn-link" href="#">Disclaimer</a>
                <a className="btn btn-link" href="#">Help</a>
                <a href="#" className="btn btn-link">FQAs</a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-4 col-lg-4 text-center text-md-start mb-3 mb-md-0">
                  © <a className="border-bottom" href="#">e-shiksha</a>, All Right Reserved.
                </div>
                <div className="col-md-4 col-lg-4 text-center">
                  Last Update On : 03 Nov 2023, 15:50 
                </div>
                <div className="col-md-4 col-lg-4 text-center text-md-end">
                  <div className="footer-menu">
                    Designed and Developed By <a className="border-bottom" href="#">MPSEDC (CoE)</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
      </>
  )
}

export default Footer
