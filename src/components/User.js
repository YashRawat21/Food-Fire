import React, { useEffect, useState } from 'react'


const User = () => {

     const [user , setUser] = useState("")
    const fetchData = async() => {
        const data = await fetch("  https://api.github.com/users/yashrawat");
        const json = await data.json();
          setUser(json)
    }
    useEffect(() => {
        fetchData()
    },[])
    const {name,location} = user;
  return (
      
    <div>
         <h2>Name:{name}</h2>
         <h3>Location:{location}</h3>
        <h4>Contact: @yashrawat21</h4>
         
        
    </div>
  )
}

export default User;