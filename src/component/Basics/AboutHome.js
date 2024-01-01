import React from 'react'

const AboutHome = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
              <div className="position-relative h-100">
                <img className="img-fluid position-absolute w-100 h-100" src="./assets/img/e-book1.png" alt="" style={{objectFit: 'cover'}} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s" style={{display: 'table'}}>
              <div style={{verticalAlign: 'middle', display: 'table-cell'}}>
                <h1 className="mb-4">Welcome to e-Shiksha</h1>
                <p className="mb-4">eShiksha is an education management portal which simplifies the management and
                  provides enormous facilities to an Institute. Our portal assists educators to manage,
                  analyze and report extensive data, while making your institutes management "A cashless and
                  paperless management".</p>
                <a className="btn btn-primary py-2 px-4 mt-2" href="#" style={{borderRadius: '40px'}}>Find out more
                  <i className="fas fa-arrow-alt-circle-right" style={{marginLeft: '10px'}} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutHome
