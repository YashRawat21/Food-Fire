const About = () => {
    return(
        <div className="about-container">
            <img  src= "pizzaImg.jpg" alt=""  className="pizzaImg"/>
            <div className="about-details">
                <span className="about-our-restraurant"> About Our Restraurant</span>
                <h2 className="about-restraurant">We Provide Good Quality Food to Your Family</h2>
                 <p className="desc">Our team of dedicated professionals is driven by the desire to serve you with utmost efficiency and care. From the moment you place your order to the swift and reliable delivery, we strive to make your gastronomic journey exceptional.</p>
                  <br />
                  <p className="desc">
                  Join us as we embark on this flavorful adventure, bringing food from the best eateries directly to your doorstep. Your satisfaction is our ultimate goal, and we promise to continuously improve and innovate to make your food delivery experience memorable and gratifying.
                  </p>
            </div>
          
        </div>
    )
}
export default About;

// import User from "./User";
// import UserClass from "./UserClass"
// const About = () => {
//   return(

//   <div className="about-container">
//         <User name = {"Yash Rawat (functional Comp.)"}/>
          
//         <UserClass name ={"Yash Rawat (class)"} location = {"Delhi"} />
//     </div>
//   )  
// }
// export default About;

// import React from "react";
// import User from "./User";
// import UserClass from "./UserClass";
// class About extends React.Component{
//        constructor(props){

//            super(props)
//        }
//     render() {
//         return(
    
//               <div className="about-container">
//                     <User />
                      
//                     <UserClass name ={"Yash Rawat (class)"} location = {"Delhi"} />
//                 </div>
//         )
//     }
// }
// export default About;