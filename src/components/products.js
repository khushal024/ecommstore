import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Products = () => {
  const params = useParams();
  // const [error, setError] = useState(null);

  const [singleProduct, setsingleProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
    fetch(`https://makeup-api.herokuapp.com/api/v1/products/${params.id}.json`)
    .then(res => res.json())
    .then((result) => {
        setLoading(true)
        setsingleProduct(result)
    },
        (error) => {
            setLoading(true);
            setError(error);
        }
    )

// eslint-disable-next-line react-hooks/exhaustive-deps
}, []) ;

let comminSoon = ()=>{
  alert("Comming soon")
}
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  else if (!isLoading) {
    return (
      <>
        <h2 className="text-center " style={{ minHeight: "200px", marginTop: "100px" }}>Loading...</h2>
      </>
    )
  }
  else {
    return (
      <>
        <div>

          {

            <div className='product-container' key={singleProduct.id}>
              <div>
                <img className='prod-image' src={singleProduct.image_link} alt='' />
              </div>
              <div>
                <span className='text-sm brand'>Brand: {singleProduct.brand}</span>
                <h2>Product Name: {singleProduct.name}</h2>
                <p>Description: {singleProduct.description}</p>
                <p>
                  <strong>Price :</strong> {singleProduct.price}
                </p>
                <p>
                  <strong>Colors : </strong> 
                  {singleProduct.product_colors.map((color)=>(
                                    <span>{color.colour_name}, </span>)
                  )}
                </p>
                <button className="btn btn-dark" onClick={comminSoon} href="/cart" >Add to cart</button>
              </div>
            </div>
  }

        </div>
      </>
    )
  }
}


export default Products;