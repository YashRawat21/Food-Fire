import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom';
import useRestaurantMenu from './useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
     const {resId} = useParams();
     const resInfo  = useRestaurantMenu(resId)
    
    if(resInfo === null) return <Shimmer />
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
   
    
    const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return  (
    <div className='text-center'>
      <h1 className='font-bold text-xl my-6'>{name}</h1>
      <p className='font-bold text-xl'>
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      
      {/* category accordian */}
      {
        category.map((category) => <RestaurantCategory data = {category?.card?.card}/>)
      }
    </div>
        
              
   
     
    )
}

export default RestaurantMenu;
