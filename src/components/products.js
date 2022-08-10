import React,{useState,useEffect} from 'react';

const Products = ()=> {
  
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]); 

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json") 
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        }
      )
  }, [])

   if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.price} 
          </li>
        ))}
      </ul>
    );
  }
}

export default Products;