import React,{useState,useEffect} from 'react';

const Products = ()=> {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('./backend/userdata.json'  
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="hihi">
     {
       data && data.length>0 && data.map((item)=><img src={item.picture} alt="" />)
     }
    </div>
  );
}

export default Products;