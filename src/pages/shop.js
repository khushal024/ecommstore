import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Shop = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        // fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        fetch("https://shoppingapiacme.herokuapp.com/shopping")
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
                            <div className="col-md-4">
                                <div className='card' key={item.id}>
                                    <img src={item.image} alt='' />
                                    <h3>{item.brand}</h3>
                                    <p>{item.item}</p>
                                    <Link to={`/${item.id}`}>View</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}
