import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
const Productscat = (props) => {
//   const params = useParams();
  // const [error, setError] = useState(null);

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products/.json?brand=${props.brand}`) 
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

          

           {items.map((item) => (
                            <div className="col-md-4" key={item.id}>
                                <div className='card'>
                                    <img src={item.image_link} alt='' />
                                    <h3>{item.name}</h3>
                                    <p><b>Brand: </b>{item.brand}</p>
                                    <p>Price: ${item.price}</p>
                                    <Link className="btn btn-dark" to={`/product/${item.id}`}>View</Link>
                                </div>
                            </div>
                        ))}

        </div>
      </>
    )
  }
}


export default Productscat;