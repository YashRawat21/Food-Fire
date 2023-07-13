import RestraurantCard from "./RestaurantCard";
import { restaurantList } from "./utils/constants";
const Body = () => {
    return(
      <div className = "body">
       <div className = "search">
        <input type = "search" className = "searchInput"></input>
       <button className = "searchBtn">Submit</button>
       </div>
       <div className = "res-container">
         {
          restaurantList.map((restaurant) => <RestraurantCard key = {restaurant.data.id} {...restaurant.data} />)
          //2nd method to map and pass data dynamically
          // restaurantList.map((restaurant) => <RestraurantCard resData = {restaurant} />)
         }
       </div>
      </div>
    )
  }
  export default Body;