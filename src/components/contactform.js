import React from 'react'

export const Contactform = (props)=>{
    if(props.showbanner){
        return(
    <>
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
    </>
)
    }
    else{
        return(
            <>
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
            <div className="col-12">
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

          </div>
        </div>
      </section>

      {/* <!-- end contact section --> */}
            </>
        )
    }

}