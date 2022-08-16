import React from 'react';
import { Banner } from './banner';
import { Contactform } from './contactform';
import { Shop } from './shop';
export const Frontpage = () => {
  return (
    <>
      <Banner />

      <section className="feature_section  layout_padding">
        <div className="container">
          <div className="feature_container">
            <div className="box">
              <div className="img-box">

              </div>
              <div className="detail-box">
                <h5>
                  license of government
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">


              </div>
              <div className="detail-box">
                <h5>
                  support24/7
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end feature section --> */}

      {/* <!-- discount section --> */}

      <section className="discount_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-5 offset-md-2">
              <div className="detail-box">
                <h2>
                  You get <br />
                    10% discount
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
                <div>
                  <a href="/">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-5">
              <div className="img-box">
                <img src={require('../images/medicines.jpg')} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- end discount section --> */}

      {/* <!-- health section --> */}

      <section className="health_section layout_padding">
        <div className="health_carousel-container">
          <h2 className="text-uppercase">
            Our products

          </h2>
          <Shop />
        <div className="d-flex justify-content-center">
          <a href="/">
            See more
          </a>
        </div>
        </div>
      </section>

      {/* <!-- end health section --> */}

      {/* <!-- about section --> */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="custom_heading-container ">
            <h2>
              About Us
            </h2>
          </div>

          <div className="img-box">
            <img src={require('../images/about-medicine.png')} alt="" />
          </div>
          <div className="detail-box">
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it
            </p>
            <div className="d-flex justify-content-center">
              <a href="/">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end about section --> */}

      {/* <!-- client section --> */}
      <section className="client_section layout_padding">
        <div className="container">
          <div className="custom_heading-container ">
            <h2>
              What is says our clients
            </h2>
          </div>
          <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExample2Indicators" data-slide-to="0" className=""></li>
              <li data-target="#carouselExample2Indicators" data-slide-to="1" className="active"></li>
              <li data-target="#carouselExample2Indicators" data-slide-to="2" className=""></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item">
                <div className="client_container layout_padding2">
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in
                      some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                  </div>
                  <div className="client_box ">
                    <div className="img-box">
                      <img src={require('../images/client.png')} alt="" />
                    </div>
                    <div className="name">
                      <h5>
                        Randomised
                      </h5>
                      <h6>
                        <span>
                          Client
                        </span>
                        <img src={require('../images/quote.png')} alt="" />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="client_container layout_padding2">
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in
                      some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                  </div>
                  <div className="client_box ">
                    <div className="img-box">
                      <img src={require('../images/client.png')} alt="" />
                    </div>
                    <div className="name">
                      <h5>
                        Randomised
                      </h5>
                      <h6>
                        <span>
                          Client
                        </span>
                        <img src={require('../images/quote.png')} alt="" />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container layout_padding2">
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in
                      some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                  </div>
                  <div className="client_box ">
                    <div className="img-box">
                      <img src={require('../images/client.png')} alt="" />
                    </div>
                    <div className="name">
                      <h5>
                        Randomised
                      </h5>
                      <h6>
                        <span>
                          Client
                        </span>
                        <img src={require('../images/quote.png')} alt="" />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      {/* <!-- end client section --> */}

      {/* <!-- contact section --> */}


      <Contactform  showbanner/>

      {/* <!-- end contact section --> */}

      {/* <!-- info section --> */}



      {/* <!-- end info section --> */}

      {/* <!-- footer section --> */}

      {/* <!-- footer section --> */}


    </>
  )
} 