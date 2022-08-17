import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Shop = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        // fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        fetch("./backend/latestproducts.json"
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
                <div className='item-container my-5'>
                    {items.map((item) => (
                        <div className='card' key={item.id}>
                            <img src={item.image} alt='' />
                            <h3>{item.brand}</h3>
                            <p>{item.item}</p>
                            <Link to={`/${item.id}`}>View</Link>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
