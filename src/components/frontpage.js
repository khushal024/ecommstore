import React from 'react';

export const Frontpage = ()=>{
    return(
        <>
  <div className="hero_area">
    {/* <!-- header section strats --> */}
    
    {/* <!-- end header section --> */}
    {/* <!-- slider section --> */}
    <section className=" slider_section position-relative">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="img-box">
                    <img src={require('../images/medicine.png')} alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="detail-box">
                    <h1>
                      Welcome To Our <br />
                      <span>
                        Online Medicine
                      </span>

                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable.
                    </p>
                    <div>
                      <a href="/">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="img-box">
                    <img src={require('../images/medicine.png')} alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="detail-box">
                    <h1>
                      Welcome To Our <br />
                      <span>
                        Online Medicine
                      </span>

                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable.
                    </p>
                    <div>
                      <a href="/">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="img-box">
                    <img src={require('../images/medicine.png')} alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="detail-box">
                    <h1>
                      Welcome To Our <br />
                      <span>
                        Online Medicine
                      </span>

                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable.
                    </p>
                    <div>
                      <a href="/">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="/#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="/#carouselExampleIndicators" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>


    </section>
    {/* <!-- end slider section --> */}
  </div>

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
              any medicine <br />
              on
              <span>
                10% discount
              </span>

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
        Medicine & Health

      </h2>
      <div className="layout_padding2">
        <div className="helthproducts">
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-1.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Health
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-5.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Health
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-2.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Health
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-5.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Health
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-3.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Health
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-5.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Health
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-4.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Health
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-5.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Health
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="health_carousel-container">
      <h2 className="text-uppercase">
        Vitamins & Supplements


      </h2>
      <div className="layout_padding2">
        <div className="helthproducts">
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-6.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Medicine
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-6.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Medicine
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-6.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Medicine
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src={require('../images/p-6.jpg')} alt="" />
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Medicine
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center">
      <a href="/">
        See more
      </a>
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
  <section className="contact_section">
    <div className="container">
      <div className="row">
        <div className="custom_heading-container ">
          <h2>
            Request A call back
          </h2>
        </div>
      </div>
    </div>
    <div className="container layout_padding2">
      <div className="row">
        <div className="col-md-5">
          <div className="form_contaier">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Name</label>
                <input type="text" className="form-control" id="exampleInputName1" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputNumber1">Phone Number</label>
                <input type="text" className="form-control" id="exampleInputNumber1" />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email </label>
                <input type="email" className="form-control" id="exampleInputEmail1" />
              </div>
              <div className="form-group ">
                <label htmlFor="inputState">Select medicine</label>
                <select id="inputState" className="form-control">
                  <option >Medicine 1</option>
                  <option >Medicine 2</option>
                  <option >Medicine 3</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputMessage">Message</label>
                <input type="text" className="form-control" id="exampleInputMessage" />
              </div>
              <button type="submit" className="">Send</button>
            </form>
          </div>
        </div>
        <div className="col-md-7">
          <div className="detail-box">
            <h3>
              Get Now Medicines
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end contact section --> */}

  {/* <!-- info section --> */}
  


  {/* <!-- end info section --> */}

  {/* <!-- footer section --> */}
  
  {/* <!-- footer section --> */}


        </>
    )
} 