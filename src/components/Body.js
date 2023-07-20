import RestraurantCard from "./RestaurantCard";
import { SWIGGY_API } from "./utils/constants";
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]); //while filtering we need this listOfRestraurant. listOfRestrasurant contains copy of all the restraurant. we r never modifying this list of restraurant.this remaoins intact .
   const [filteredRestraurant , setFilterRestraurant] = useState([]); //List only for filtered restraurant ..so whenerver u wanna filter u should update FilterRestraurant instead of listORestraurant.
  const [searchText , setSearchText] = useState(" ")
   
  
  useEffect(() => {
    fetchData()
  },[]);
  const fetchData = async() => {
    const data = await fetch(SWIGGY_API)
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    setFilterRestraurant(json?.data?.cards[2]?.data?.data?.cards)
  }
      
    return listOfRestaurant.length === 0 ? <Shimmer /> :(
      <div className = "body">
       <div className = "search">
        <input type = "search" className = "searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
        <button className = "searchBtn" onClick={() => {
          const searchFilter = listOfRestaurant.filter((res) => 
    
           
           res.data.name.toLowerCase().includes(searchText.toLowerCase()) 
        
           )
           setFilterRestraurant(searchFilter) 
        }}>Submit</button>
       <i className="sort-text">Sort By:</i>
       
       <button className = "filterBtn" onClick = {() => {
       const  filteredList = listOfRestaurant.filter((res) => res.data.avgRating > 4);
     setFilterRestraurant(filteredList)
      
       }}>Top Rated Restaurant</button>
       {/* <button className="filterBtn" onClick={() => {
        const highToLow = listOfRestaurant.filter(())
       }}> {filterByPrice}</button>
        */}
       </div>
       <div className = "res-container">
         {
         filteredRestraurant.map((restaurant) => <RestraurantCard key = {restaurant.data.id} {...restaurant.data} />)
          //2nd method to map and pass data dynamically
          // restaurantList.map((restaurant) => <RestraurantCard resData = {restaurant} />)
         }
       </div>
      </div>
    )
  }
  export default Body;