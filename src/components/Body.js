import RestraurantCard from "./RestaurantCard";
import { SWIGGY_API } from "./utils/constants";
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  

  
  useEffect(() => {
    fetchData()
  },[]);
  const fetchData = async() => {
    const data = await fetch(SWIGGY_API)
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
  }
      
    return listOfRestaurant.length === 0 ? <Shimmer /> :(
      <div className = "body">
       <div className = "search">
        <input type = "search" className = "searchInput"></input>
        <button className = "searchBtn">Submit</button>
       <button className = "filterBtn" onClick = {() => {
       const  filteredList = listOfRestaurant.filter((res) => res.data.avgRating > 4);
       setListOfRestaurant(filteredList)
       }}>Top Rated Restaurant</button>
       </div>
       <div className = "res-container">
         {
          listOfRestaurant.map((restaurant) => <RestraurantCard key = {restaurant.data.id} {...restaurant.data} />)
          //2nd method to map and pass data dynamically
          // restaurantList.map((restaurant) => <RestraurantCard resData = {restaurant} />)
         }
       </div>
      </div>
    )
  }
  export default Body;