import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import GradeIcon from '@mui/icons-material/Grade';
// import {SWIGGY_MENU_API} from './utils/constants';
// import useRestaurantMenu from './utils/useRestaurantMenu';
// import useRestaurantMenu from './utils/useRestaurantMenu';
import {useParams} from 'react-router-dom';
import useRestaurantMenu from './useRestaurantMenu';

const RestaurantMenu = () => {
     const {resId} = useParams();
     const resInfo  = useRestaurantMenu(resId)
    
    if(resInfo === null) return <Shimmer />
    const {name,cuisines,costForTwoMessage,avgRating} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return  (
    <div className='menu-container'>

      <div className='menu-info'>
          <div className='left'>
          <h2>{name}</h2>
            <p className='left-info'>{cuisines.join(" , ")}</p>
            <p className='left-info'>{costForTwoMessage}</p>
          </div>
              <div className='right'>
               
             <p className='avg-rating'>< GradeIcon className='avg-ratingIcon'/>{avgRating}</p>
              </div>
          
            </div>
            <hr></hr>
             <h2> Recommended </h2>
           <ul className='recommended'>
             {
           itemCards.map(item =>  <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100} {item.card.info.description} {item.card.info.category}</li>)
             }
           </ul>
    </div>
        
              
   
     
    )
}

export default RestaurantMenu;
