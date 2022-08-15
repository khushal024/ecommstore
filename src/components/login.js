import React, { useState ,useEffect } from 'react';

export const Login = ()=>{
const [data,setData]=useState([]);
const [username , setUsername] = useState("");
const [password , setPassword] = useState("")
  const getData=()=>{
    fetch('./backend/users.json'  
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
  },[]) ;

 const handleuser = (e)=>{
  let correctusername = e.target.value;
  setUsername(correctusername)
 }

  const handlepass = (e)=>{
  let correctpass = e.target.value;
  setPassword(correctpass)
 }
 
 const subitform =()=>{
 if(username === "hlo" && password === data) {
alert("hi")
 } else {
  // not a valid username / password
 }
 }


  return(
    <div className="login-wrapper">
       {
       data && data.length>0 && data.map((item)=><p key={item.id}>{item.email}</p>)
     }
      <h1>Please Log In</h1>
      <form onSubmit={subitform}>
        <label>
          <p>Username</p>
          <input type="text" value={username} onChange={handleuser}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={handlepass}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}