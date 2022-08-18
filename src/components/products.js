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
    fetch(`http://makeup-api.herokuapp.com/api/v1/products/${params.id}.json`)
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
                <h1 className='brand'>{singleProduct.brand}</h1>
                <h2>{singleProduct.item}</h2>
                <p>{singleProduct.description}</p>
                <p>
                  <strong>Price:</strong> {singleProduct.price}
                </p>
                <p>
                  <strong>Color:</strong> {singleProduct.color}
                </p>
              </div>
            </div>
  }

        </div>
      </>
    )
  }
}


export default Products;