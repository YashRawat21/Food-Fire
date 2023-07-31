import RestraurantCard from "./RestaurantCard";
import { SWIGGY_API } from "./utils/constants";
import {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";
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
    setListOfRestaurant( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestraurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }   
  const onlineStatus = useOnlineStatus();
     if(onlineStatus === false) return <h1 style={{textAlign: "center" , color:"tomato",marginTop: "20px"} }>
      please check your internet connection!!
     </h1> 
      
    return listOfRestaurant.length === 0 ? <Shimmer /> :(
      <div className = "body">
       <div className = "search">
        <input type = "search" className = "border-solid border-black ml-4 rounded-lg" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
        <button className = "px-4 m-4 py-1  bg-red-500 text-white rounded-lg" onClick={() => {
          const searchFilter = listOfRestaurant.filter((res) => 
           res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
           )
           setFilterRestraurant(searchFilter) 
        }}>Submit</button>
       <i className="sort-text ml-7">Sort By:</i>
       
       <button className = "filterBtn px-4 m-4 py-2 bg-red-500 text-white rounded-lg" onClick = {() => {
       const  filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
     setFilterRestraurant(filteredList)
      
       }}>Top Rated Restaurant</button>
       {/* <button className="filterBtn" onClick={() => {
        const highToLow = listOfRestaurant.filter(())
       }}> {filterByPrice}</button>
        */}
       </div>
       <div className = "res-container flex flex-wrap">
         {
         filteredRestraurant.map((restaurant) =>
         <Link  key = {restaurant.info.id}  to={"/restaurants/" + restaurant.info.id} className = "link" style={{textDecoration: "none" ,color: "inherit"}}> <RestraurantCard {...restaurant.info} /> </Link>)
          //2nd method to map and pass data dynamically
          // restaurantList.map((restaurant) => <RestraurantCard resData = {restaurant} />)
         }
       </div>
      </div>
    )
  }
  export default Body;