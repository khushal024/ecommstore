import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Shop = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        // fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
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
                <div className="container">
                    <div className='item-container my-5 row'>
                        {items.map((item) => (
                            <div className="col-md-4" key={item.id}>
                                <div className='card'>
                                     <img src={item.image_link} alt='' />
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <Link to={`/product/${item.id}`}>View</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}
