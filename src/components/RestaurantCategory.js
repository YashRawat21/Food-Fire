const RestaurantCategory = ({data}) => {
    console.log(data)
    return(
        <div>
        <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-50 p-4 flex justify-between">
        <span className="font-bold text-lg"> {data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
        
        </div>
    )
}
export default RestaurantCategory;