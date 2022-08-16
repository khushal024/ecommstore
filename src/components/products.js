import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
const Products = () => {
  const { id } = useParams();
  // const [error, setError] = useState(null);

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null)


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
    fetch(`https://shoppingapiacme.herokuapp.com/shopping/?id=${id}`
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then((result) => {
        setLoading(true)
        setItems(result)
      },
        (error) => {
          setLoading(true);
          setError(error);
        }
      )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
          {items.map((item) => (

            <div className='product-container' key={item.id}>
              <div>
                <img className='prod-image' src={item.image} alt='' />
              </div>
              <div>
                <h1 className='brand'>{item.brand}</h1>
                <h2>{item.item}</h2>
                <p>{item.description}</p>
                <p>
                  <strong>Price:</strong> {item.price}
                </p>
                <p>
                  <strong>Color:</strong> {item.color}
                </p>
              </div>
            </div>
          ))}

        </div>
      </>
    )
  }
}


export default Products;