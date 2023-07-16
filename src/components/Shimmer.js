const Shimmer = () => {
    return(
      
        <div className="shimmer-container">
          
         {
             Array.from({length:15}).map((el) => {
                 return(
                     <div className="shimmer-card"></div>
                     )
                    })
                }
        </div>
               
    )
}
export default Shimmer;