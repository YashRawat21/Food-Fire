// import  {withPromotedLabel}from "./RestaurantCard";
import { SWIGGY_API } from "./utils/constants";
import {useContext, useEffect, useState} from "react"
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import UserContext from "./utils/UserContext";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]); //while filtering we need this listOfRestraurant. listOfRestrasurant contains copy of all the restraurant. we r never modifying this list of restraurant.this remaoins intact .
   const [filteredRestraurant , setFilterRestraurant] = useState([]); //List only for filtered restraurant ..so whenerver u wanna filter u should update FilterRestraurant instead of listORestraurant.
  
   const [searchText , setSearchText] = useState(" ");
   const {loggedIn,setUserName} = useContext(UserContext);

  //  const RestaurantCardPromoted = withPromotedLabel(RestraurantCard); // now this RestaurantcardPromoted component has promoted label inside it.


  useEffect(() => {
    fetchData()
  },[]);
  const fetchData = async() => {
    const data = await fetch(SWIGGY_API)
    const json = await data.json();
    setListOfRestaurant( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestraurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(setListOfRestaurant);
  }   
  const onlineStatus = useOnlineStatus();
     if(onlineStatus === false) return <h1 style={{textAlign: "center" , color:"tomato",marginTop: "20px"} }>
      please check your internet connection!!
     </h1> 
      
    return listOfRestaurant.length === 0 ? <Shimmer /> :(
      <div className = "body">
       <div className = "search">
        <input type = "search" className = "border border-black ml-4 rounded-lg outline-none" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
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
       <label >User</label>
       <input className="border border-black p-2" value ={loggedIn}onChange={(e) => setUserName(e.target.value) }/>
    
       </div>
       <div className = "res-container flex flex-wrap">
        
         {
           
           filteredRestraurant.map((restaurant) =>
           <Link  key = {restaurant.info.id}  to={"/restaurants/" + restaurant.info.id} className = "link" style={{textDecoration: "none" ,color: "inherit"}}> <RestaurantCard {...restaurant.info} /> </Link>)
          //2nd method to map and pass data dynamically
          // restaurantList.map((restaurant) => <RestraurantCard resData = {restaurant} />)
         }

          
          {/* {
          restaurant.data.promoted? <RestaurantCardPromoted /> : <RestraurantCard {...restaurant.info} />  // Condition for rendering the restaurantcard with promted label...
         }  */}
       </div>
      </div>
    )
  }
  export default Body;