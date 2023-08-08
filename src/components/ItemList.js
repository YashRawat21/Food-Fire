import { CDN_URL } from "./utils/constants";
const ItemList = ({items}) => {

    return(
        <div>
          {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                   
                     <div className="w-9/12">
                <div className="py-2 m-4 ">
                    <span className="font-bold">{item.card.info.name}</span>
                    {" "} 
                    {/* <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.price.defaultPrice/100}</span> */}
                      <span> - ₹{item.card.info.price} </span>
                 </div>
                <p className="text-xs m-4 ">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 object-cover"> 
                  <div className="absolute">
                <button className="bg-black p-2 shadow-lg rounded-lg text-white mx-16">Add +</button>
                    </div>
                
                <img src ={CDN_URL + item.card.info.imageId } alt="food-img"  />
                 </div>
                   </div>
           
          ))}
        </div>
    )
}
export default ItemList;