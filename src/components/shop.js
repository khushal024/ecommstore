import React, { useState, useEffect } from 'react'

export const Shop = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect( () => {
        fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
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
                <h2 style={{ minHeight: "200px", marginTop: "100px" }}>Loading...</h2>
            </>
        )
    }
    else {
        return (
            <>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                        <img src={item.api_featured_image} alt="" />
                            {item.name}</li>
                    ))}
                </ul>
            </>
        )
    }
}
