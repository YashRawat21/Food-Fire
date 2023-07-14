import RestraurantCard from "./RestaurantCard";
import { restaurantList } from "./utils/constants";
import {useState} from "react"

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
    return(
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