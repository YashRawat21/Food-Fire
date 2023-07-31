import { CDN_URL } from "./utils/constants";

const RestraurantCard = ({name,cuisines,area,cloudinaryImageId,avgRating,lastMileTravelString,costForTwoString}) =>{
    //2nd method to destructure 
    // const {name,cuisines,area,cloudinaryImageId,avgRating,lastMileTravelString,costForTwoString} = resData?.data
    return(
      <div className = "res-card p-5 m-4 w-[400px] ml-[70px] overflow-hidden bg-gray-100 hover:bg-gray-300 max-h-[400px] rounded-lg" >
          <img className = "resImg" alt = "res-logo" src = {CDN_URL +cloudinaryImageId}/>
        <h2 className="font-bold text-lg py-4">{name}</h2>
        <h4>{cuisines.join(",")}</h4>
        <h4>{area}</h4>
        <span>
        
        <h4 ><i class="fa-solid fa-star"></i>{avgRating}</h4>
      
        <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
        
      </div>
    )
  }
   //Higher Order Component

   // input - RestaurantCard output -> restaurantcardpromoted
  // export const withPromotedLabel = (RestaurantCard) => {
  //   return () => {
  //     return(
  //       <div>
  //         <label>Promoted</label>
  //         <RestraurantCard />
  //       </div>
  //     )
  //   }
  // }
  export default RestraurantCard;