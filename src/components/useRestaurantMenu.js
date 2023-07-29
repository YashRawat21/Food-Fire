
import { useEffect, useState } from "react"
import {SWIGGY_MENU_API} from './utils/constants';
const useRestaurantMenu = (resId) => {
    const [resInfo , setResInfo] = useState(null);

    const fetchMenu = async() => {
        const data = await fetch(SWIGGY_MENU_API + resId)
        const json = await data.json();
        setResInfo(json.data);
    }
    useEffect(() => {
        fetchMenu();
    },[])
   
   return resInfo;
}
export default useRestaurantMenu;
  