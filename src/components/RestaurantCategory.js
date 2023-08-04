import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
     const [showItems,setShowItems] = useState(false);

     const handleClick = () => {
        setShowItems(!showItems)
     }
    return(
        <div>

        <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-50 p-4 cursor-pointer" onClick={handleClick}>
            <div className= " flex justify-between">
        <span className="font-bold text-lg "> {data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>

            </div>
       {  showItems && <ItemList items = {data.itemCards}/>}
        </div>
        </div>
    )
}
export default RestaurantCategory;