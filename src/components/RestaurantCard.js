import { CDN_URL } from "./utils/constants";

const RestraurantCard = ({name,cuisines,area,cloudinaryImageId,avgRating,lastMileTravelString,costForTwoString}) =>{
    //2nd method to destructure 
    // const {name,cuisines,area,cloudinaryImageId,avgRating,lastMileTravelString,costForTwoString} = resData?.data
    return(
      <div className = "res-card" style = {{backgroundColor : "#f0f0f0"}}>
          <img className = "resImg" alt = "res-logo" src = {CDN_URL +cloudinaryImageId}/>
        <h2>{name}</h2>
        <h4>{cuisines.join(",")}</h4>
        <h4>{area}</h4>
        <span>
        
        <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
      
        <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
        
      </div>
    )
  }
  export default RestraurantCard;